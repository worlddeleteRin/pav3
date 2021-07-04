<template>

<div 
class="pr-6">

<div> {{ this.active_filters }} </div>	

<div
v-for="filter_key in Object.keys(all_filters)" 
:key="filter_key"
>
	<span class="py-2 text-lg font-semibold"> {{ this.all_filters[filter_key].attribute_name }} </span>

	<div>
	<MainFilterMultiple
	:filter_key="filter_key"
	v-if="this.all_filters[filter_key].filter_type == 'multiple'"
	class="flex flex-col"
	/>
	</div>

	<div>
	<MainFilterOption
	:filter_key="filter_key"
	v-if="this.all_filters[filter_key].filter_type == 'option'"
	/>
	</div>

	<div>
	<MainFilterRange
	:filter_key="filter_key"
	v-if="this.all_filters[filter_key].filter_type == 'range'"
	/>
	</div>

	<MainFilterBoolean
	:filter_key="filter_key"
	v-if="this.all_filters[filter_key].filter_type == 'boolean'"
	/>


</div>

</div>

</template>


<script>

import  { collectActiveAttributes,
getApiCategoryProducts } from '../useful_methods.js';
import { apiGetCategoryProducts } from '../api.js'; 

import MainFilterMultiple from '../components/MainFilterMultiple.vue';
import MainFilterOption from '../components/MainFilterOption.vue';
import MainFilterRange from '../components/MainFilterRange.vue';
import MainFilterBoolean from '../components/MainFilterBoolean.vue';
	
export default {
	name: 'MainFilterContainer',
	components: {
		MainFilterMultiple,
		MainFilterOption,
		MainFilterRange,
		MainFilterBoolean,
	},
	mounted () {
	
	},
	data () {
		return {
			// filters_loaded: false,
		}
	},
	computed: {
		all_filters () {
			return this.$store.state.ecommerce.all_filters;
		},
		active_filters () {
			return this.$store.state.ecommerce.active_filters;
		},
	},
	methods: {
		collectActiveAttributes,
		apiGetCategoryProducts,
		getApiCategoryProducts,
		isFilterValueChecked(filter_key, filter_code) {
			if (filter_key in this.active_filters) {
				return this.active_filters[filter_key].some(
					 attr_val => attr_val == filter_code	
				)
			}
			return false;
		},
		getFilterValuesCheched(filter_key) {
			console.log('call getFiletrValuesCheched')
			if (filter_key in this.active_filters) {
				return this.active_filters[filter_key].values;
			}
			return ''
		},
		setFilterActive(filter_key, filter_value) {
			console.log('call set active filter', filter_key, filter_value)
			var filter_params = {
				'f_key': filter_key,
				'filter_value': filter_value,
			}
			console.log("call with filter params", filter_params)
			this.$store.commit('addCheckboxFilter', filter_params)

			this.updateFilterRoutes()
		},
		setFilterOption(filter_key, filter_value) {
			console.log('set filter option running', filter_key, filter_value)
		
			var filter_params = {
				'f_key': filter_key,
				'filter_value': filter_value,
			}
			this.$store.commit('addOptionFilter', filter_params)
			this.updateFilterRoutes()
		},
		setFilterRange(filter_key, filter_value, make_request = true) {
			console.log('set filter range running', filter_key, filter_value)
			var filter_params = {
				'f_key': filter_key,
				'filter_value': filter_value,
			}
			this.$store.commit('addRangeFilter', filter_params)
			if (make_request == true) {
				this.updateFilterRoutes()
			}
		},
		updateFilterRoutes() {
			var filter_query = this.$store.getters.getFilterQuery;
			var new_path = this.$route.path+'?'+filter_query
			console.log("new path is", new_path)
			console.log('active attr are', this.active_filters)
			var new_query = {}
			for (var filter_key in this.active_filters) {
				new_query[filter_key] = this.active_filters[filter_key].join(',')	
			}
			// this.$router.push({ path: "/category/2511", query: new_query})
			this.getApiCategoryProducts(new_query)
			this.$route.query = new_query
			console.log('this route query is', this.$route.query)
			console.log('this route is', this.$route)
			console.log('this router is', this.$router.options.history)
			this.$router.options.history.push(new_path)
			// window.history.pushState({},null, "/app" + this.$route.path + "?" + new URLSearchParams(new_query).toString())
			console.log('froute', this.$route)
		//	this.$router.push(new_path)
		},
	},
}
</script>
