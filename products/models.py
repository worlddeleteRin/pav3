from django.db import models
from mptt.models import MPTTModel, TreeForeignKey
from mptt.managers import TreeManager
from versatileimagefield.fields import PPOIField, VersatileImageField

from django.db.models import JSONField

# Create your models here.

class ProductMediaTypes:
	IMAGE = "IMAGE"
	VIDEO = "VIDEO"

	CHOICES = [
		(IMAGE, "Uploaded image or url to an image"),
		(VIDEO, "A Url to external video"),
	]


class Category(MPTTModel):
	name = models.CharField(max_length = 250, default = None)
	slug = models.SlugField(max_length = 255, unique = True, allow_unicode = True, default = None)
	description = models.TextField(default = None)
	parent = TreeForeignKey(
		"self", null=True,blank=True,related_name="children",on_delete=models.CASCADE
	)
	image = VersatileImageField(
		'Image',
		upload_to="static/images/category_images",
		blank = True, null = True,
		ppoi_field='ppoi'
	)
	ppoi = PPOIField()

	objects = models.Manager()

	def __str__(self) -> str:
		return self.name or 'no name specified'

class Product(models.Model):
	product_types = (
		('stand_alone', 'stand_alone'),
		('parent', 'parent'),
		('child', 'child')
	)
	type = models.CharField(default = 'stand_alone', choices = product_types, max_length = 50)

	category = models.ForeignKey(
		Category,
		related_name="products",
		on_delete = models.SET_NULL,
		null=True,
		blank=True,
	)

	name = models.CharField(default='', max_length = 300)
	slug = models.SlugField(default = None, max_length = 300, unique=True, allow_unicode=True)
	description = models.TextField(default = None)

# 	price = models.IntegerField(default=0,)
#	sale_price = models.IntegerField(default = None, null = True, blank = True)

	updated_at = models.DateTimeField(auto_now=True, null=True)

	default_variant = models.OneToOneField(
		"ProductVariant",
		blank=True,
		null=True,
		on_delete=models.SET_NULL
	)
	rating = models.FloatField(null=True, blank=True)

	def __str__(self) -> str:
		return self.name

class ProductVariant(models.Model):
	sku = models.CharField(max_length=255,unique=True)
	name = models.CharField(max_length=255, blank=True)
	parent_product = models.ForeignKey(
		Product, related_name="variants", on_delete=models.CASCADE
	)
	media = models.ManyToManyField("ProductMedia", through = "VariantMedia")

	def __str__(self) -> str:
		return self.name or self.sku

class ProductMedia(models.Model):
	product = models.ForeignKey(Product, related_name="media", on_delete = models.CASCADE)
	image = VersatileImageField(
		upload_to="static/images/products",
		ppoi_field="ppoi", blank=True, null=True,
	)
	ppoi = PPOIField()
	type = models.CharField(
		max_length=50,
		choices=ProductMediaTypes.CHOICES,
		default=ProductMediaTypes.IMAGE,
	)
	external_url = models.CharField(max_length=300, blank=True, null=True)
	oembed_data = JSONField(blank = True, null = True)

class VariantMedia(models.Model):
	variant = models.ForeignKey(
		"ProductVariant", related_name="variant_media", on_delete=models.CASCADE
	)
	media = models.ForeignKey(
		ProductMedia, related_name="variant_media", on_delete=models.CASCADE
	)


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
