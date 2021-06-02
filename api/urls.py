"""pav URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from . import views

app_name = 'api'

urlpatterns = [
    path('get_products/', views.get_products, name='get_products'),
	path('get_categories/', views.get_categories, name='get_categories'),
	path('get_category_products/', views.get_category_products, name = 'get_category_products'),
	path('product/<int:product_id>', views.product, name = 'product'),
]
