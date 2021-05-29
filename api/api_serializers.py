def serialize_products(products_raw):
	ser_products = []
	pr_image_url = '/static/images/products/'
	for product in products_raw:
		pr = {
			'id': product.id,
			'name': product.name,
			'price': product.price,
			'sale_price': product.sale_price,
			'categories': [],
			'attributes': {},
			'images': [],
			
		}
		for category in product.category.all():
			pr['categories'].append(category.id)
		
		for attr_value in product.attr.all():
			attr_code = attr_value.attribute.code
			attr_name = attr_value.attribute.name
			attr_use_filter = attr_value.attribute.use_filter
			val = attr_value.get_value()
			current_attr = {
				'id': attr_value.id,
				'display_name': attr_name,
				'value': val,
				'code': attr_value.code,
				'display_value': val,
				'type': attr_value.attribute.type,
				'filter_type': attr_value.attribute.filter_type,
				'use_filter': attr_use_filter,
			}
			if attr_code in pr['attributes']:
				pr['attributes'][attr_code].append(current_attr)
			else:
				pr['attributes'][attr_code] = []
				pr['attributes'][attr_code].append(current_attr)

		for image in product.productimage_set.all():
			img_name = image.imgurl.name.split('/')[-1]
			im = {
				"id": image.id,
				"product_id": image.product.id,
				"imgsrc": pr_image_url + img_name,
			}
			pr['images'].append(im)
		ser_products.append(pr)
	return ser_products
	
