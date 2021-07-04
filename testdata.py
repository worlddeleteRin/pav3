#!/usr/bin/env python3


import numpy as np
import os
import requests
import base64
import random
from timeit import default_timer as timer

import django
from django.conf import settings

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'pav.settings')
django.setup()

from products.models import *

test_attributes = {
	"color": [
		"red", "green", "blue", "white"
	],
	"size": [
		"small", "medium", "big"
	],
	"delivery_frequency": [
		"1d", "2d", "3d", "4d"
	]
}


def create_product(product):
	current_category = Category.objects.get(id = product["category_id"])
	new_p = Product(
		type = product["type"],
		name = product["name"],
		price = product["price"],
	)
	new_p.save()
	new_p.category.add(current_category)
	for i in range(3):
		img = ProductImage(
			product = new_p,
			imgurl = 'https://placehold.it/1000x1000',
		)
		img.save()
	# add attribute value to created product
	atr_list = list(test_attributes.keys())
	atr_list_len = atr_list.__len__()
	rnd_int = random.randint(0, atr_list_len - 1)
	rnd_atr_str = atr_list[rnd_int]
	current_attr = ProductAttribute.objects.get(code = rnd_atr_str)
	atr_values = test_attributes[rnd_atr_str]
	rnd_int = random.randint(0, len(atr_values) - 1)
	current_atr_value = atr_values[rnd_int]
	new_product_value = ProductAttributeValue(
		attribute = current_attr,
		product = new_p,
		code = current_atr_value,
		text = current_atr_value
	)
	new_product_value.save()
	return new_p
def create_category(category): 
	new_c = Category(
		name = category["name"],
		imgurl = category["imgurl"],
	)
	new_c.save()
	return new_c
def create_attributes(attribute):
	new_a = ProductAttribute(
		name = attribute["name"],
		code = attribute["code"],
		type = attribute["type"],
		filter_type = attribute["filter_type"],
	)
	new_a.save()
	return new_a
def create_product_attribute_value(attr_value):
	current_attribute = ProductAttribute.objects.get(id = attr_value["current_attribute_id"])
	current_product = Product.objects.get(id = attr_value["current_product_id"])
	new_attr = ProductAttributeValue(
		attribute = current_attribute,
		product = current_product,
		code = attr_value["code"],
		text = attr_value["text"],
	)
	return new_attr

if __name__ == '__main__':
#	set start timer
	start = timer()
#	delete all products first
	deleteall()
	print('all is deleted')
	print('start creating')
#	create categories 	
	for i in range(2):
		current_category = {
			'name': 'some category' + str(i),
			'imgurl': 'http://placehold.it/100x100',
		}
		create_category(current_category)
#	create attributes 
	for attr in list(test_attributes.keys()):
		current_attribute = {
			'name': attr,
			'code': attr,
			'type': 'text',
			'filter_type': 'multiple',
		}
		create_attributes(current_attribute)
#	create products
	products_to_create = []
	for i in range(10000):
		cat_count =  Category.objects.all().count()
		cat_number = random.randint(0, cat_count-1)
		current_category = Category.objects.all()[cat_number] 
		current_product = {
			'category_id': current_category.id,
			'type': 'stand_alone',
			'name': 'some product name' + str(i),
			'price': random.randint(100, 10000),
		}
		create_product(current_product)

#		print('creaeted', i, 'products')

#	track end of timer
	print('everything is created!')
	end = timer()
	print('took time (seconds): ', end - start)
