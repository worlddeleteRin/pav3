<template>
<div>


	<button
	@click="this.clickDeleteAllFilters()"
	>
		delete all filters
	</button>


	<div
	v-for="(values, key) in this.current_attr"
	:key="key">
		{{ this.current_attr[key].display_name }}
			
		<div
		v-if="this.getFilterType(key) == 'multiple'">
		<div
		v-for="attr_value in values['values']"
		:key="attr_value"
		>
		<input
		type="checkbox"
		:id="key + '-' + attr_value.code"
		:value="attr_value.code"
		:checked="isFilterValueActive(key, attr_value )"
		@input="updateFilterCheckbox(key, attr_value)"
		/>
		<label
		:for="key + '-' + attr_value.code"	
		>
		 {{ attr_value.display_name }}
		</label>
		</div>
		</div>

		
		<div
		v-if="this.getFilterType(key) == 'option'"
		/>
		<div
		v-show="this.getFilterType(key) == 'option'"
		v-for="attr_value in values.values"
		:key="attr_value"
		>
		<input
		type="radio"
		:id="key + '-' + attr_value.code"
		:value="attr_value.code"
		:checked="isFilterValueActive(key, attr_value)"
		@input="updateFilterOption(key, attr_value)"
		/>
		<label
		:for="key + '-' + attr_value.code"
		>
		 {{ attr_value.display_name }}
		</label>
		</div>
		</div>


</div>
</template>


<script>
import { collectProductsAttributes, collectActiveAttributes} from '../useful_methods.js';
export default {
	name: 'ProductsFilterContainer',
	data () {
		return {
		}
	},
	computed: {
		current_attr () {
			return this.$store.state.ecommerce.all_filters;
		},
		active_filters () {
			return this.$store.state.ecommerce.active_filters;
		}
	},
	methods: {
		isActive () {
			return true;
		},
		active_filters_exists () {
			if (Object.keys(this.active_filters).length > 0) {
				return true;
			} else {
				return false;
			}
		},
		collectProductsAttributes,
		collectActiveAttributes,
		getAttributeDisplayName (attr_key) {
			return this.current_attr[attr_key].display_name;	
		},
		getAttributeDisplayValue (attr_key, attr_value) {
			var attr_val = this.current_attr[attr_key]["values"].find(
				val => val.code == attr_value 
			);
			return attr_val.display_name;
		},
		clickDeleteAllFilters() {
			this.$store.commit('deleteAllFilters')
			// update route after changing filters
			this.updateFilterRoutes()
		},
		clickDeleteActiveFilter (f_key, f_value) {
			var params = {
				"f_key": f_key,
				"filter_value": f_value,
			}
			this.$store.commit('deleteActiveFilter', params)
			this.updateFilterRoutes()
		},
		isFilterValueActive(filter_key, filter_value) {
			if (filter_key in this.active_filters) {
				if (filter_value != undefined) {
					if(this.active_filters[filter_key].includes(filter_value.code)) {
						return true;
					}
				}
			}
			return false;
		},
		getFilterType(filter_key) {
			return this.current_attr[filter_key].filter_type;
		},
		updateFilterRoutes() {
			var filter_query = this.$store.getters.getFilterQuery;
			var new_path = this.$route.path+'?'+filter_query
			this.$router.push(new_path)
		},
		updateFilterOption (filter_key, filter_value) {
			var filter_params = {
				"f_key": filter_key,
				"filter_value": filter_value,
			}
			// run method to add option
			// only need add because we remove and add new option every time
			this.$store.commit('addOptionFilter', filter_params)
			// update filter routes routes and refresh page
			this.updateFilterRoutes()
		},
		updateFilterCheckbox (filter_key, filter_value) {
			// first add or remove current key/value to active filters
			var filter_params = {
				"f_key": filter_key,
				"filter_value": filter_value,
			}
			if (!event.target.checked) {
				this.$store.commit('removeCheckboxFilter', filter_params);
			} else {
				this.$store.commit('addCheckboxFilter', filter_params );
			}
			// now update filter routes
			this.updateFilterRoutes()
		},
	},
}
</script>
