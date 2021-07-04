<template>
<div
class="block md:hidden"
>
	<div class="flex justify-end">
		<span 
		@click="this.openMobileFilter()"
		class="flex items-center px-3 py-1 text-base font-normal text-black bg-gray-100 rounded-lg cursor-pointer select-none max-w-max"
		>
			Фильтры
			<AdjustmentsIcon 
			class="w-5 h-5 ml-2"
			/>
		</span>
	</div>	
</div>
</template>

<script>
import {
	AdjustmentsIcon
} from "@heroicons/vue/outline";
export default {
	name: 'MobileProductsMenu',
	components: {
		AdjustmentsIcon,
	},
	methods: {
		openMobileFilter () {
			this.$store.commit('set_mobile_filter_popup', true);
		},
	},
}
</script>
