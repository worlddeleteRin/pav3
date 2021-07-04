<template>
	<div
	class="pb-3"
	>

	<div 
	v-if="this.active_filters_exists()"
	>
			<span
			v-for="(active_values, key) in this.active_filters"
			:key="key"
			>
				
			<span
			v-if="active_values.length > 0"
			>

				<button
				v-if="this.current_attr[key].filter_type == 'range'"
				class="px-4 py-1 mx-1 my-1 text-sm font-light text-white bg-indigo-600 rounded-full"
				@click="this.clickDeleteRangeFilter(key, this.active_filters[key])"
				>
					{{ getAttributeDisplayName(key) }} : от 
					{{ this.active_filters[key][0] }} до 
					{{ this.active_filters[key][1] }} 	
				</button>

				<button
				v-else
				class="px-4 py-1 mx-1 my-1 text-sm font-light text-white bg-indigo-600 rounded-full"
				v-for="at_val in active_values"
				:key="at_val"
				@click="this.clickDeleteActiveFilter(key, at_val)"
				>
				{{ getAttributeDisplayName(key) }} : {{ getAttributeDisplayValue(key, at_val) }}
				</button>

			</span>

			</span>
	</div>

	</div>
</template>


<script>
export default {
	name: 'ActiveFiltersContainer',
	computed: {
		current_attr () {
			return this.$store.state.ecommerce.all_filters;
		},
		active_filters () {
			return this.$store.state.ecommerce.active_filters;
		},	
	},
	methods: {
		clickDeleteActiveFilter (f_key, f_value) {
			console.log('click to delete active filter', f_key, f_value)
			var params = {
				"f_key": f_key,
				"filter_value": f_value,
			}
			this.$store.commit('deleteActiveFilter', params)
			this.updateFilterRoutes()
		},
		clickDeleteRangeFilter (f_key) {
			var params = {
				"f_key": f_key,
			}
			this.$store.commit('deleteRangeFilter', params)
			this.updateFilterRoutes()
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
			this.$parent.getApiCategoryProducts(new_query)
			// window.history.pushState({},null, "/app" + this.$route.path + "?" + new URLSearchParams(new_query).toString())
			this.$router.options.history.push(new_path)
		},
		getAttributeDisplayName (attr_key) {
			return this.current_attr[attr_key].attribute_name;	
		},
		getAttributeDisplayValue (attr_key, attr_value) {
			var attr_val = this.current_attr[attr_key]["values"].find(
				val => val.code == attr_value 
			);
			if (attr_val) {
				return attr_val.display_value;
			}
		},	
		active_filters_exists () {
			console.log('active filters are', this.active_filters)
			if (Object.keys(this.active_filters).length > 0) {
				return true;
			} else {
				return false;
			}
		},
	}
		
}
</script>
