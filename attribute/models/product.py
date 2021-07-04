from django.db.models import *
from products.models import Product
from .base import *

class AssignedProductAttributeValue(models.Model):
	value = models.ForeignKey(
		"AttributeValue",
		on_delete=models.CASCADE,
		related_name="productvalueassignment",
	)
	assignment = models.ForeignKey(
		"AssignedProductAttribute",
		on_delete=models.CASCADE,
		related_name="productvalueassignment"
	)

	def __str__(self):
		return self.value.attribute.code + '---' +  self.value.code + ' --- ' + self.assignment.product.name


class AssignedProductAttribute(models.Model):
	"""
		Associate selected values and given product
	"""
	product =  models.ForeignKey(
		Product, related_name="attributes", on_delete=models.CASCADE
	)
	assignment = models.ForeignKey(
		"AttributeProduct", on_delete=models.CASCADE,
		related_name="productassignments"
	)
	values = models.ManyToManyField(
		"AttributeValue",
		blank=True,
		related_name="productassignments",
		through=AssignedProductAttributeValue
	)

	def __str__(self):
		return self.product.name + ' --- '+  self.assignment.attribute.code


class AttributeProduct(models.Model):
	attribute = models.ForeignKey(
		"Attribute", related_name="attributeproduct", on_delete=models.CASCADE
	)
	assigned_products = models.ManyToManyField(
		Product,
		blank = True,
		through = AssignedProductAttribute,
		through_fields=("assignment", "product"),
		related_name="attributesrelated",
	)

	def __str__(self):
		return self.attribute.code
