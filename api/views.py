from django.shortcuts import render
from django.http import JsonResponse

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

def get_categories(request):
	categories = list(Category.objects.all().values())
	return JsonResponse({
		'status': 1,
		'categories': categories,
	}, status = 200)

