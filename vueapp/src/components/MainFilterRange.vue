<template>
	active filters: {{ this.active_filters }}

	<el-slider
	v-model="this.active_filters"
	range
	show-stops
	:min="this.getRangeMin()"
	:max="this.getRangeMax()"
	@change="this.clickSetFilterRange($event)"
	>
	</el-slider>

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
					if (val.length > 0) {
						return val;
					}
				}
				return [this.getRangeMin(), this.getRangeMax()];
			},
			set (val) {
				console.log('val is', val)
				if (val[0] == this.getRangeMin() && val[1] == this.getRangeMax() ) {
					this.$parent.setFilterRange(this.filter_key, [], false)
				} else {
					this.$parent.setFilterRange(this.filter_key, val, false)
				}
			},
		},
	},
	methods: {
		testAction (event) {
			console.log(event)	
		},
		clickSetFilterRange(val) {
			if(val[0] == this.getRangeMin() && val[1] == this.getRangeMax()) {
				this.$parent.setFilterRange(this.filter_key, [])
			} else {
				this.$parent.setFilterRange(this.filter_key, val)
			}
		},
		getRangeMin() {
		console.log('start getting min range')
			var values = this.$parent.all_filters[this.filter_key].values
			var min = parseInt(values[0].code)
			values.forEach(val => {
				if (parseInt(val.code) < min) {
					min = parseInt(val.code);
				}
			})
			return min
		},
		getRangeMax() {
			var values = this.$parent.all_filters[this.filter_key].values
			var max = parseInt(values[0].code)
			values.forEach(val => {
				if (parseInt(val.code) > max) {
					max = parseInt(val.code);
				}
			})
			console.log('max is', max)
			return max
		},
	},
}
</script>
