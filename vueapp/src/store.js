/* store start */
import { createStore } from 'vuex'
import {collectActiveAttributes, collectProductsAttributes} from './useful_methods';

const storeDialogs = {
  state: () => ({
	simple_dialog: {
		show: false,
		button_text: '',
		heading: '',
		description: '',
	},
	call_phone_dialog: {
		show: false,
	},
  }),
  mutations: {
      openSimpleDialog(state, { 
		button_text, heading, description 
		}) {
        state.simple_dialog.show = true;
		state.simple_dialog.button_text = button_text;
		state.simple_dialog.heading = heading;
		state.simple_dialog.description = description;
      },
      closeSimpleDialog(state) {
        state.simple_dialog.show = false;
      },
		openCallPhoneDialog(state) {
			state.call_phone_dialog.show = true;
		},
		closeCallPhoneDialog(state) {
			state.call_phone_dialog.show = false;
		},
  },
  actions: {},
  getters: {}
}

const storeEcommerce = {
  state: () => ({
	products: {},
	categories: {},
	active_filters: {},
	all_filters: {},
  }),
  mutations: {
	setProducts(state, products) {
		state.products = products;
	},
	setCategories(state, categories) {
		state.categories = categories;
	},
	setAllFilters(state, all_filters) {
		state.all_filters = all_filters;
	},
	setActiveFilters(state, active_filters) {
		state.active_filters = active_filters;
	},
	deleteAllFilters(state) {
		state.active_filters = {};
	},
	deleteActiveFilter(state, params) {
		var filter_key = params.f_key
		var filter_item = params.filter_value
		for (var indx in state.active_filters[filter_key]) {
			var f_val = state.active_filters[filter_key][indx]
			if (f_val == filter_item) {
				state.active_filters[filter_key].splice(indx, 1)	
			}
		}
	},
	addOptionFilter(state, filter_params) {
		var filter_key = filter_params.f_key
		var filter_item = filter_params.filter_value
		// code to add option filter	
		if (filter_key in state.active_filters) {
			delete state.active_filters[filter_key]
		}
		state.active_filters[filter_key] = []
		state.active_filters[filter_key].push(filter_item.code)
	},
	addCheckboxFilter(state, filter_params) {
		var filter_key = filter_params.f_key 
		var filter_item = filter_params.filter_value
		// code to add checkbox filter
		if(filter_key in state.active_filters) {
			state.active_filters[filter_key].push(filter_item.code)
		} else {
			state.active_filters[filter_key] = []
			state.active_filters[filter_key].push(filter_item.code)
		}
	},
	removeCheckboxFilter(state, filter_params) {
		var filter_key = filter_params.f_key
		var filter_item = filter_params.filter_value
		for (var indx in state.active_filters[filter_key]) {
			var current_item = state.active_filters[filter_key][indx]	
			if(current_item == filter_item.code) {
				state.active_filters[filter_key].splice(indx, 1)
			}
		}
		if(state.active_filters[filter_key].length == 0) {
			delete state.active_filters[filter_key]
		}
	},
  },
  actions: {},
  getters: {
	getCategoryById: (state) => (id) => {
		return state.categories.filter(
		category => category.id == id)[0];
	},	
	getProductById: (state) => (id) => {
		return state.products.filter(
		product => product.id == id)[0];
	},	
	getProductsByCategoryId: (state) => (cat_id) => {
		var id = parseInt(cat_id)
		var result =  state.products.filter(
		product => product.categories.includes(id));
		return result
	},	
	getAllFilters: (state) => (products) => {
		var filters = collectProductsAttributes(
			products
		);
		state.all_filters = filters;
		return filters;
	},
	getActiveFilters: (state) => (route, current_attr) => {

		var active_attr = collectActiveAttributes(route.query, current_attr);
		state.active_filters = active_attr;
		return state.active_filters;
	},
	getFilterQuery: (state) => {
		var query = ""
		for (var filter_key in state.active_filters) {
			query += filter_key + '='	
			var filter_values = state.active_filters[filter_key]
			for (var filter_value in filter_values) {
				query += filter_values[filter_value] + ','
			}
			query += '&'
		}
		return query
	},
	getProductsFilter: (state) => (products) => {
		if (Object.keys(state.active_filters).length > 0) {
			var final_products = products.filter(product => {
				var to_include = false;
				// iterate through active filters keys
				for(var atr_key in state.active_filters) {
					// filter only if key has values, so they are specified	
					var atr_values = state.active_filters[atr_key];
					if (atr_values.length > 0) {
						var attr_values = product.attributes[atr_key]
						for (var attr_indx in attr_values) {
						var current_val = attr_values[attr_indx]
						if(atr_values.includes(current_val["code"])) {
							to_include = true;
							break;
						} else {
							to_include = false;
						}
					}
					if (to_include == false) {
						return to_include;
					}
					}
				}
				return to_include
			});
			return final_products;

		} else {
			return products;
		}
	},
  }
}


const storeCommon = {
  state: () => ({
    api_url: 'http://127.0.0.1:8000',
	//api_url: 'http://192.168.1.111:8000',
	isGlobalDataLoaded: false,
  }),
  mutations: {
	setGlobalDataLoaded (state, is_loaded) {
		state.isGlobalDataLoaded = is_loaded;
	},
  },
  actions: {},
  getters: {
  }
}

export const store = createStore({
  modules: {
    dialogs: storeDialogs,
    common: storeCommon,
	ecommerce: storeEcommerce,
  }
})

/* store end */
