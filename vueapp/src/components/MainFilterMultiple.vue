<template>

active filters are {{ this.active_filters }}
	<div
	 v-if="this.$parent.all_filters[this.filter_key].filter_view == 'list'"
	>
	<span 
	class="flex items-center w-9/12 py-1 pl-2 rounded-lg hover:bg-gray-50" 
	v-for="filter_value in this.$parent.all_filters[this.filter_key].values"
	:key="filter_value.code"
	>
	  <input 
	  class="border-2 rounded border-grey-50"
	  :id="'filter_attr_' + filter_value.code"
	  type="checkbox"
	  v-model="this.active_filters"
	  :value="filter_value.code"
	  name="filter_value.code"
	  :checked="this.$parent.isFilterValueChecked(filter_key, filter_value.code)"
	  @change="this.$parent.setFilterActive(filter_key, this.active_filters)"
	  />
	  <label
	  class="pl-2 font-normal cursor-pointer"	
	  :for="'filter_attr_' + filter_value.code"
	  >
	  {{ filter_value.display_value }}
	  </label>
	</span>
	</div>

	<el-select
	 v-if="this.$parent.all_filters[this.filter_key].filter_view == 'select'"
	 placeholder="choooose"
	 v-model="this.active_filters"
	 multiple
	>
	<el-option 
	class="flex items-center w-9/12 py-1 pl-2 rounded-lg hover:bg-gray-50" 
	v-for="filter_value in this.$parent.all_filters[this.filter_key].values"
	:key="filter_value.code"
	:selected="this.$parent.isFilterValueChecked(filter_key, filter_value.code)"
	:value="filter_value.code"
	:label="filter_value.display_value"
	>
		{{ filter_value.display_value }}
	</el-option>
	</el-select>

</template>

<script>
export default {
	props: ["filter_key"],
	name: 'MainFilterMultiple',
//	mounted() {
//		var curr = this.$store.state.ecommerce.active_filters[this.filter_key];
//		if (curr) {
//			this.active_filters =  curr
//		}
//		console.log('mounted multiple filters are', this.active_filters)
//	},
	computed: {
		active_filters: {
			get () {
				var val = this.$store.state.ecommerce.active_filters[this.filter_key];
				if (val) {
					return val
				}
				return []
			},
			set (val) {
				this.$parent.setFilterActive(this.filter_key, val)
			}
		}
	},
	methods: {
		testSelect (value) {
			console.log('change select, value is', value)
		},
	},
}
</script>
