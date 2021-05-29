<template>
	<div v-if="!this.product_loaded">
		loading product...
	</div>
	<div 
	v-if="this.product_loaded"
	class="px-4 mx-auto max-w-7xl">

	<ProductPageImageContainer
	:product="this.current_product"
	/>

		product page is here
	product id is {{ this.product_id }}
	<br />
	product: {{ this.current_product }}
	product is: {{ this.current_product.id }}
	<br />

	</div>
</template>

<script>

import ProductPageImageContainer from '../components/ProductPageImageContainer.vue';

export default {
	name: 'ProductPage',
	props: ['product_id'],
	components: {
		ProductPageImageContainer,
	},
	async beforeMount () {
		this.current_product = await this.$store.getters.getProductById(this.product_id);
		console.log('product is:', this.current_product);
		this.product_loaded = true;
	},
	data () {
		return {
			product_loaded: false,
			current_product: {},
		}
	},
	computed: {
		api_url () {
			return this.$store.state.common.api_url;
		},
	},
}

</script>
