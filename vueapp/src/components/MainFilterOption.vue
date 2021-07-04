<template>
	active filters: {{ this.active_filters }}
	<div
	v-if="this.$parent.all_filters[filter_key].filter_view == 'list'"
	>
	<div
	class="br-red-100"
	v-for="filter_value in this.$parent.all_filters[filter_key].values"
	:key="filter_value"
	>
		<input
		:id="'filter_attr_' + filter_value.code"
		:value="filter_value.code"
		type="radio"
		v-model="this.active_filters"
		/>
		<label
		:for="'filter_attr_' + filter_value.code"
		>
		 {{ filter_value.display_value }}
		</label>
	</div>
	</div>


	<el-select
	 v-if="this.$parent.all_filters[this.filter_key].filter_view == 'select'"
	 placeholder="choooose"
	 v-model="this.active_filters"
	 clearable
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
	props: ['filter_key'],
	name: 'MainFilterOption',
	computed: {
		active_filters: {
			get () {
				var val = this.$store.state.ecommerce.active_filters[this.filter_key]
				if (val) {
					return val[0]
				}
				return ''
			},
			set (val) {
				this.$parent.setFilterOption(this.filter_key, val)
			},
		},
	},	
}

</script>
