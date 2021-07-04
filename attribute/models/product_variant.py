from django.db.models import *
from products.models import ProductVariant
from .base import *

class AssignedVariantAttributeValue(models.Model):
	value = models.ForeignKey(
		"AttributeValue",
		on_delete=models.CASCADE,
		related_name="variantvalueassignment",
	)
	assignment = models.ForeignKey(
		"AssignedVariantAttribute",
		on_delete=models.CASCADE,
		related_name="variantvalueassignment"
	)

	def __str__(self):
		return self.value.attribute.code + '---' +  self.value.code + ' --- ' + self.assignment.variant.name

class AssignedVariantAttribute(models.Model):
	"""
		Associate selected values and given variant
	"""
	variant =  models.ForeignKey(
		ProductVariant, related_name="attributes", on_delete=models.CASCADE
	)
	assignment = models.ForeignKey(
		"AttributeVariant", on_delete=models.CASCADE,
		related_name="variantassignments"
	)
	values = models.ManyToManyField(
		"AttributeValue",
		blank=True,
		related_name="variantassignments",
		through=AssignedVariantAttributeValue
	)

	def __str__(self):
		return self.variant.name + ' --- '+  self.assignment.attribute.code

class AttributeVariant(models.Model):
	attribute = models.ForeignKey(
		"Attribute", related_name="attributevariant", on_delete=models.CASCADE
	)
	assigned_variants = models.ManyToManyField(
		ProductVariant,
		blank = True,
		through = AssignedVariantAttribute,
		through_fields=("assignment", "variant"),
		related_name="attributesrelated",
	)

	def __str__(self):
		return self.attribute.code
