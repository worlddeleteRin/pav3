#!/usr/bin/env python3


import numpy as np
import os
import requests
import base64
import random

import django
from django.conf import settings

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'pav.settings')
django.setup()

from products.models import *



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
#	delete all products first
	deleteall()
#	create categories 	
	for i in range(7):
		current_category = {
			'name': 'some category' + str(i),
			'imgurl': 'http://placehold.it/100x100',
		}
		create_category(current_category)
#	create attributes 
	for i in range(200):
		current_attribute = {
			'name': 'Какое-то название атрибута' + str(i),
			'code': 'some_attr_name' + str(i),
			'type': 'text',
			'filter_type': 'multiple',
		}
		create_attributes(current_attribute)
#	create products
	for i in range(100):
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
		print('creaeted', i, 'products')
	print('script is running')
