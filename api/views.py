from django.shortcuts import render
from django.http import JsonResponse
from django.core.paginator import Paginator
from products.serializers import *

# import products models 
from products.models import * 
# import attribute models 
from attribute.models import * 

# serializers


# Create your views here.

def get_products(request):	
	raw_products = Product.objects.all()
	products = serialize_products(raw_products)	
	products_filters = get_products_filters(raw_products)
	print('products filters are', products_filters)
	return JsonResponse({
		'status': 1,
		'products': products,
		'products_filters': products_filters,
	}, status = 200)
def product(request, product_id):
	current_product = Product.objects.get(id = product_id)
	product = serialize_products([current_product])
	product_data = {
		'product': product[0],
	}
	return JsonResponse({
		'status': 1,
		'product_data': product_data,
	}, status = 200);

def get_category_products(request):
	print('get category request')
	if 'page' in request.GET:
		page = int(request.GET.get('page'))
		print('query page is', page)
	else:
		page = 1
	category_id = request.GET.get('category_id')
	raw_category_products = Category.objects.get(id = category_id).products.all()
	query_attrs = request.GET
	raw_products = filter_products(query_attrs, raw_category_products)
	paged_products = Paginator(raw_products, 20)
	products_page = paged_products.page(page)
	products = serialize_products(products_page.object_list)
	# get all products filters for current products
	products_filters = get_products_filters(raw_category_products)

	products_response = {
		'products_filters': products_filters,
		'data': products,
		'current_page': products_page.number,
		'page_start': min(paged_products.page_range), 
		'page_end': max(paged_products.page_range),
		'page_has_next': products_page.has_next(),
		'page_has_prev': products_page.has_previous(),
	}
	return JsonResponse({
		'status': 1,
		'products': products_response, 
	}, status = 200);

def get_categories(request):
	categories = Category.objects.all()
	categories = serialize_categories(categories)
	return JsonResponse({
		'status': 1,
		'categories': categories,
	}, status = 200)


#	useful methods here
def filter_products(query, products):
	print('start products filtering', query)
	all_attributes = Attribute.objects.values_list('code', flat = True)
#	all_attributes = ProductAttribute.objects.filter(type__in = ['option', 'multi_option']).values_list('code', flat=True)

	for (key,value) in query.items():
		if key in all_attributes:
			print('value is', value)
			print(len(value) == 0)
			print(len(value))
			if len(value) == 0:
				continue
			filter_values = value.split(',')
			print('filter values are', filter_values)
			products = products.filter(attributes__values__code__in = filter_values).distinct()
			print('products are', products)
			print(key, 'is in attributes!')
#	products = products.values_list('id', flat = True).distinct()
#	products = Product.objects.filter(id__in = products)
	return products

def get_products_filters(products):
	filters = {}
	attribute_values_ids = products.values_list('attributes__values', flat = True)
	attribute_options = AttributeValue.objects.filter(id__in = attribute_values_ids)
	for current_attr in attribute_options:
		code = current_attr.attribute.code
		current_attr_value = {
			'code': current_attr.code,
			'display_value': current_attr.option,
		}
		if code in filters.keys(): 
			filters[code]["values"].append(current_attr_value)
		else:
			filters[code] = {}
			filters[code]["values"] = []
			filters[code]["attribute_name"] = current_attr.attribute.name
			filters[code]["filter_type"] = current_attr.attribute.filter_type
			filters[code]["filter_view"] = current_attr.attribute.view_type
			filters[code]["type"] = current_attr.attribute.type
			filters[code]["values"].append(current_attr_value)

	return filters
