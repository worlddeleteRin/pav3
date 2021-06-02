from django.shortcuts import render
from django.http import JsonResponse
from django.core.paginator import Paginator

# import products models 
from products.models import * 

# serializers
from .api_serializers import *


# Create your views here.

def get_products(request):	
	raw_products = Product.objects.all()
	products = serialize_products(raw_products)	
	return JsonResponse({
		'status': 1,
		'products': products,
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
	raw_products = Category.objects.get(id = category_id).product_set.all()
	query_attrs = request.GET
	raw_products = filter_products(query_attrs, raw_products)
	paged_products = Paginator(raw_products, 10)
	products_page = paged_products.page(page)
	products = serialize_products(products_page.object_list)
	products_response = {
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
	categories = list(Category.objects.all().values())
	return JsonResponse({
		'status': 1,
		'categories': categories,
	}, status = 200)


#	useful methods here
def filter_products(query, products):
	print('start products filtering', query)
	all_attributes = ProductAttribute.objects.values_list('code', flat = True)
	for (key,value) in query.items():
		print(key, value.split(','))
		if key in all_attributes:
			filter_values = value.split(',')
			products = products.filter(attr__code__in = filter_values)
			print(key, 'is in attributes!')
	return products
