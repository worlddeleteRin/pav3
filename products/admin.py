from django.contrib import admin
from products.models import * 

# Register your models here.


class ProductmediaInline(admin.TabularInline):
    model = ProductMedia 

class ProductAdmin(admin.ModelAdmin):
    inlines = [ProductmediaInline]

admin.site.register(Category)
admin.site.register(Product, ProductAdmin)
admin.site.register(ProductVariant)
admin.site.register(VariantMedia)
admin.site.register(ProductMedia)
