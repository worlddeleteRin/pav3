from django.db import models

# Create your models here.


class Category(models.Model):
    name = models.CharField(default='', max_length = 200)
    imgurl = models.ImageField(upload_to='static/images', blank = True, null = True)

    def __str__(self):
        return self.name

class Product(models.Model):
	product_types = (
		('stand_alone', 'stand_alone'),
		('parent', 'parent'),
		('child', 'child')
	)
	type = models.CharField(default = 'stand_alone', choices = product_types, max_length = 50)
	category = models.ManyToManyField(Category,)
	name = models.CharField(default='', max_length = 300)
	price = models.IntegerField(default=0,)
	sale_price = models.IntegerField(default = None, null = True, blank = True)

	def __str__(self):
		return self.name + ' ' + str(self.price)


class ProductImage(models.Model):
    product = models.ForeignKey(Product, on_delete = models.CASCADE, default = None)
    imgurl = models.ImageField(upload_to='static/images/products', blank = True, null = True)

    def __str__(self):
        return self.product.name
    

class ProductAttribute(models.Model):
	attributes_types = (
		('text', 'text'),
		('integer', 'integer'),
		('boolean', 'boolean'),
	)
	attributes_filter_types = (
		('multiple', 'multiple'),
		('option', 'option'),
	)
	name = models.CharField(max_length = 300, default = None)	
	code = models.CharField(max_length = 300, default = None)	
	type = models.CharField(default = 'text', max_length = 100, choices = attributes_types)
	filter_type = models.CharField(default = 'multiple', max_length = 100, choices = attributes_filter_types)
	use_filter = models.BooleanField(default = True)
	def __str__(self):
		return self.code  + ':' + self.name

class ProductAttributeValue(models.Model):
	boolean_choices = (
		('true', 'Yes'),
		('false', 'No'),
	)
	attribute = models.ForeignKey(ProductAttribute, on_delete = models.CASCADE, default  = None)
	product = models.ForeignKey(Product, on_delete = models.CASCADE, default = None, related_name = 'attr')
	code = models.CharField(max_length = 200, default = None)
	text =  models.CharField(max_length = 500, default = None,
	blank = True, null = True)
	integer = models.IntegerField(default = None, 
	blank = True, null = True)
	boolean = models.CharField(default = None, max_length = 20, choices = boolean_choices,
	blank = True, null = True) 

	def __str__(self):
		return  self.product.name + ' --- ' + str(self.get_value())
	def get_value(self):
		if self.attribute.type == 'text':
			return self.text
		if self.attribute.type == 'integer':
			return self.integer
		if self.attribute.type == 'boolean':
			return self.boolean




def deleteall():
    c = Category.objects.all()
    i = Product.objects.all()
    a = ProductAttribute.objects.all()
    product_image = ProductImage.objects.all()
    product_image.delete()
    a.delete()
    i.delete()
    c.delete()
    print('deleted all')
