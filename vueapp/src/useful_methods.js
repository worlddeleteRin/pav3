
export function close_mobile_header () {
    this.$store.commit('setMobileHeaderShow', false)
}
export function open_mobile_header () {
    this.$store.commit('setMobileHeaderShow', true)
}

export function collectProductsAttributes (products) {
	var attr = {}
	products.forEach(product => {
		var k = Object.keys(product.attributes)
		
		// iterate for product attribute keys
		for (var key_item in k) {
			var atr_key = k[key_item]			
			var attribute_values = product.attributes[atr_key]
			
			// iterate through each product attribute value
			for (var atr_indx in attribute_values) {
			var current_attr = attribute_values[atr_indx]	

			if (current_attr["use_filter"]) {
			var atr_val = current_attr["value"]
			var atr_code = current_attr["code"]
			var new_attr = {
				'code': atr_code,
				'display_name': atr_val,
			}
			if (atr_key in attr) {
				// key already exist, need to check value
				if (attr[atr_key]["values"].some(el => el.code == atr_code)) {
				// if already has that value, just skip it
				} else {
					attr[atr_key]["values"].push(new_attr)
				}
			} else {
				// key not exist, create it and add value
				// init attr key with all parameters
				attr[atr_key] = {}
				attr[atr_key]["values"] = []
				attr[atr_key]["display_name"] = current_attr["display_name"]
				attr[atr_key]["type"] = current_attr["type"] 
				attr[atr_key]["filter_type"] = current_attr["filter_type"]

				attr[atr_key]["values"].push(new_attr)
			}
		}
		}
		}
	}
	)

	return attr;
}

export function collectActiveAttributes (query, current_attr) {	
	console.log('start collect active filters', query, current_attr)
	var active_attr = {}
	for (var common_atr in current_attr) {
		active_attr[common_atr] = []
		if (common_atr in query) {
			var q_values = query[common_atr].split(',')
			for (var indx in q_values) {
				var q_val = q_values[indx]
				if (q_val) {
					if (current_attr[common_atr]["values"].some(el => el.code == q_val)) {
						active_attr[common_atr].push(q_val)
					} else if (current_attr[common_atr]["filter_type"] == 'range') {
						active_attr[common_atr].push(q_val)
					}
				}
			}
		}
	}
	return active_attr
}


export function initActiveFilters () {
	console.log('start collect active filters',)
	var active_attr = this.collectActiveAttributes(this.$route.query, this.all_filters);
	this.$store.commit('setActiveFilters', active_attr)
}


export async function getApiCategoryProducts(query = this.$route.query) {
		console.log('query is', query)
		var current_cat_id = this.$store.state.ecommerce.current_category_id
		var products_response = await this.apiGetCategoryProducts(current_cat_id, query);
		this.$store.commit('setProducts', products_response.data)
		var pages_info = {
			'current_page': products_response.current_page,
			'page_start': products_response.page_start,
			'page_end': products_response.page_end,
			'page_has_next': products_response.page_has_next,
			'page_has_prev': products_response.page_has_prev,
		}
		this.$store.commit('setProductsPages', pages_info)
		// set all filters for current products
		this.$store.commit('setAllFilters', products_response.products_filters)
}
