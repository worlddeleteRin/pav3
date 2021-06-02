import axios from 'axios';

export async function apiGetProducts() {
    await axios.get(
        '/api/get_products',
    ).then((response) => {
		var r_status = response.data.status
		if (r_status == 1) {
			this.$store.commit('setProducts', response.data.products)
		}
    })
}
export async function apiGetProductById(product_id) {
	var product_data = {}
	await axios.get(
	'/api/product/' + product_id
	).then((resp) => {
		product_data = resp.data.product_data	
	});
	return product_data
}

export async function apiGetCategoryProducts(category_id, query) {
	var products = {}
	var params = {
		'category_id': category_id,
	}
	for (var key in query) {
		params[key] = query[key]	
	}
	await axios.get(
		'/api/get_category_products/', {
			params: params,
		}
	).then((resp) => {
		products = resp.data.products;
		console.log('response is', resp.data.products)	
	})
	return products;
}

export async function apiGetCategories () {
    await axios.get(
        '/api/get_categories',
    ).then((response) => {
		var r_status = response.data.status
		if (r_status == 1) {
			this.$store.commit('setCategories', response.data.categories)
		}
    })
}
