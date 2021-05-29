from django.contrib import admin
from products.models import * 

# Register your models here.


class ProductimagesInline(admin.TabularInline):
    model = ProductImage 

class ProductAdmin(admin.ModelAdmin):
    inlines = [ProductimagesInline]

admin.site.register(Category)
admin.site.register(Product, ProductAdmin)
admin.site.register(ProductImage)
admin.site.register(ProductAttribute)
admin.site.register(ProductAttributeValue)
