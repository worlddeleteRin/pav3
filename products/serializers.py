from .models import Category 
from attribute.models import * 

from mptt.utils import get_cached_trees

def serialize_category(category: Category) -> dict:
	ser_cat = {
		'id': category.id,
		'name': category.name,
		'children': [serialize_category(ch) for ch in category.get_children()],
	}
	return ser_cat

def serialize_categories(categories):
	categories = get_cached_trees(categories)
	all_categories = []
	for category in categories:
		serialized_cat_tree = serialize_category(category)
		all_categories.append(serialized_cat_tree)
	return all_categories

def serialize_product_variant(pr_variant):
	current_variant = {
		'sku': pr_variant.sku,
		'name': pr_variant.name,
		'parent_id': pr_variant.parent_product.id,
		'images': [],
		'attributes': {},
	}
	attributes_values_ids_list = pr_variant.attributes.values_list('values', flat = True).distinct()
	attribute_values = AttributeValue.objects.filter(id__in = attributes_values_ids_list)
	for attr_val in attribute_values:
		current_attr = serialize_attribute(attr_val)
		attr_code = attr_val.attribute.code
		if attr_code in current_variant['attributes']:
			current_variant['attributes'][attr_code].append(current_attr)
		else:
			current_variant['attributes'][attr_code] = []
			current_variant['attributes'][attr_code].append(current_attr)

	# adding product variant images
	if pr_variant.media.all().__len__() > 0:
		for image in pr_variant.media.all():
			img_name = image.image.name.split('/')[-1]
			im = {
				"id": image.id,
				"product_id": image.product.id,
				"imgsrc": pr_image_url + img_name,
			}
			current_variant['images'].append(im)
	print('current variant is', current_variant)
	return current_variant


def serialize_product(product):
	pr_image_url = '/static/images/products/'
	pr = {
			'id': product.id,
			'name': product.name,
			'price': 0,
			'sale_price': 0,
			'category': product.category.id,
			'attributes': {},
			'images': [],
			'variants': [],
		}

	# adding product images
	for image in product.media.all():
		img_name = image.image.name.split('/')[-1]
		im = {
			"id": image.id,
			"product_id": image.product.id,
			"imgsrc": pr_image_url + img_name,
		}
		pr['images'].append(im)

	# adding product attributes
	attributes_values_ids_list = product.attributes.values_list('values', flat = True).distinct()
	attribute_values = AttributeValue.objects.filter(id__in = attributes_values_ids_list)
	for attr_val in attribute_values:
		current_attr = serialize_attribute(attr_val)
		attr_code = attr_val.attribute.code
		if attr_code in pr['attributes']:
			pr['attributes'][attr_code].append(current_attr)
		else:
			pr['attributes'][attr_code] = []
			pr['attributes'][attr_code].append(current_attr)

	# adding product variants
	for pr_variant in product.variants.all():
		serialized_variant = serialize_product_variant(pr_variant)
		pr['variants'].append(serialized_variant)
	return pr

def serialize_attribute(attr_value):
	attr_code = attr_value.attribute.code
	attr_name = attr_value.attribute.name
	attr_use_filter = attr_value.attribute.use_filter
	val = attr_value.option
	current_attr = {
		'id': attr_value.id,
		'display_name': attr_name,
		'value': val,
		'code': attr_value.code,
		'display_value': val,
		'type': attr_value.attribute.type,
		'filter_type': attr_value.attribute.filter_type,
		'filter_view': attr_value.attribute.view_type,
		'use_filter': attr_use_filter,
	}
	return current_attr

def serialize_products(products_raw):
	ser_products = []
	for product in products_raw:
		current_product = serialize_product(product)
		ser_products.append(current_product)

	return ser_products
	
