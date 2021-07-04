from django.db import models


# change attribute option from option group to the Attribute directly
class AttributeOptionGroup(models.Model):
	name = models.CharField(default = None, max_length = 400)

	def __str__(self):
		return self.name


class Attribute(models.Model):
	attributes_view_types = [
		('list', 'list',),
		('select', 'select')
	]
	attributes_types = (
		('text', 'text'),
		('integer', 'integer'),
		('boolean', 'boolean'),
		('option', 'option'),
		('multi_option', 'multi option'),
	)
	attributes_filter_types = (
		('multiple', 'multiple'),
		('option', 'option'),
		('boolean', 'boolean'),
		('range', 'range'),
	)
	name = models.CharField(max_length = 300, default = None)
	code = models.CharField(max_length = 300, default = None)
	view_type = models.CharField(max_length = 400,
	default = 'list', 
	choices = attributes_view_types)
	type = models.CharField(default = 'text', max_length = 100, choices = attributes_types)
	filter_type = models.CharField(default = None, max_length = 100, choices = attributes_filter_types,
	blank = True, null = True)
	use_filter = models.BooleanField(default = True)

	# option group, select if use attribute groups (option / multi-option )
#	option_group =  models.ForeignKey(
#		AttributeOptionGroup,
#		on_delete = models.CASCADE,
#		blank = True,
#		null = True,
#	)
	def __str__(self):
		return self.code  + ':' + self.name


class AttributeValue(models.Model):
#	group = models.ForeignKey(
#		AttributeOptionGroup,
#		on_delete = models.CASCADE,
#		related_name = 'options',
#	)
	attribute = models.ForeignKey(Attribute,
	on_delete = models.CASCADE)
	option = models.CharField(default = None, max_length = 400)
	code = models.CharField(default = None, max_length = 400)

	def __str__(self):
		return self.option



#class ProductAttributeValue(models.Model):
#	boolean_choices = (
#		('true', 'Yes'),
#		('false', 'No'),
#	)
#	attribute = models.ForeignKey(ProductAttribute, on_delete = models.CASCADE, default  = None)
#	product = models.ForeignKey(Product, on_delete = models.CASCADE, default = None, related_name = 'attr')
#	code = models.CharField(max_length = 200, default = None, null = True, blank = True)
#	text =  models.CharField(max_length = 500, default = None,
#	blank = True, null = True)
#	integer = models.IntegerField(default = None, 
#	blank = True, null = True)
#	boolean = models.CharField(default = None, max_length = 20, choices = boolean_choices,
#	blank = True, null = True) 
#
##	value multi option
#	value_multi_option = models.ManyToManyField(
#		AttributeOption,
#		related_name = 'multi_value_attribute_values',
#		blank = True,
#	)
#	# value option
#	value_option = models.ForeignKey(
#		AttributeOption,
#		on_delete = models.CASCADE,
#		blank = True, null = True,
#	)
#
#	def __str__(self):
#		return  self.product.name + ' --- ' + str(self.get_value())
#	def get_code(self):
#		if not self.code:
#			return self.get_value()
#		return self.get_code()
#	def get_value(self):
#		if self.attribute.type == 'text':
#			return self.text
#		if self.attribute.type == 'integer':
#			return self.integer
#		if self.attribute.type == 'boolean':
#			return self.boolean
#		if self.attribute.type == 'option':
#			return self.value_option.option
#		if self.attribute.type == 'multi_option':
#			return list(self.value_multi_option.values_list('option', flat = True))
#


