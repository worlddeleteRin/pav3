<template>

		<div class="w-full mx-auto border border-red-500 max-w-7xl grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
		<ProductCard1 
		v-for="product in products"
		:key="product.id"
		:product="product"
		/>
		</div>

</template>


<script>

import ProductCard1 from '../components/ProductCard1.vue';

export default {
	name: 'ProductsContainer',
	props: ['products'],
	components: {
		ProductCard1,
	},
}

</script>
