<template>
	<span>
	<el-switch
	v-model="this.active_filters"
	>
	</el-switch>
	</span>

</template>


<script>
export default {
	props: ['filter_key'],
	name: 'MainFilterBoolean',
	mounted () {
		var curr = this.$store.state.ecommerce.active_filters[this.filter_key]
		console.log('curr is', curr)
		if (curr) {
			if (curr.length > 0) {
				this.active_filters = true; 
			}
		}
	},
	computed: {
		active_filters: {
			get () {
			var val = this.$store.state.ecommerce.active_filters[this.filter_key]			
				if (val) {
					if (val.length > 0) {
						return true
					}
				}
				return false
			},
			set (val) {
				this.$parent.setFilterOption(this.filter_key, this.getFilterValue(val))
			},
		}
	},
	methods: {
		testAction (event) {
			console.log(event)	
		},
		getFilterValue(event) {
			if (event == true) {
				return 't';
			}
			return '';
		}
	},
}
</script>
