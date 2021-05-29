<template>
	<div>

	<div v-show="this.active_filters_exists()">
		<span
		v-for="(active_values, key) in this.active_filters"
		:key="key"
		>
		<button
		class="mx-4 text-red-500 bg-green-500"
		v-for="at_val in active_values"
		:key="at_val"
		@click="this.clickDeleteActiveFilter(key, at_val)"
		>
		{{ getAttributeDisplayName(key) }} : {{ getAttributeDisplayValue(key, at_val) }}
																																			</button>
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
		updateFilterRoutes() {
			console.log('need to update route')
			var filter_query = this.$store.getters.getFilterQuery;
			var new_path = this.$route.path+'?'+filter_query
			console.log('route query is', this.$route.path)
			console.log('filter query is', filter_query)
			console.log('the whole route is', new_path)
			this.$router.push(new_path)
		},
		getAttributeDisplayName (attr_key) {
			return this.current_attr[attr_key].display_name;	
		},
		getAttributeDisplayValue (attr_key, attr_value) {
			var attr_val = this.current_attr[attr_key]["values"].find(
				val => val.code == attr_value 
			);
			return attr_val.display_name;
		},	
		active_filters_exists () {
			if (Object.keys(this.active_filters).length > 0) {
				return true;
			} else {
				return false;
			}
		},
	}
		
}
</script>
