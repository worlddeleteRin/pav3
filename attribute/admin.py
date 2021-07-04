from django.contrib import admin
from .models import * 

# Register your models here.


admin.site.register(Attribute)
admin.site.register(AttributeValue)

admin.site.register(AttributeProduct)
admin.site.register(AssignedProductAttribute)
admin.site.register(AssignedProductAttributeValue)

admin.site.register(AttributeVariant)
admin.site.register(AssignedVariantAttribute)
admin.site.register(AssignedVariantAttributeValue)

