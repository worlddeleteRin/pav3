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
	var active_attr = {}
	for (var common_atr in current_attr) {
		if (common_atr in query) {
			var q_values = query[common_atr].split(',')
			for (var indx in q_values) {
				var q_val = q_values[indx]
				if (current_attr[common_atr]["values"].some(el => el.code == q_val)) {
					if (common_atr in active_attr) {
						active_attr[common_atr].push(q_val)
					} else {
						active_attr[common_atr] = [];
						active_attr[common_atr].push(q_val)
					}
				}
			}
		}
	}
	return active_attr
}
