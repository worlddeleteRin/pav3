<template>
	<div class="flex flex-col w-full max-w-sm mx-auto overflow-hidden shadow-2xl rounded-md">


		<div class="h-52">
			<ProductCardImageSimple
			@click="this.goToProductPage()"
			:imgsrc="this.product.images[0].imgsrc"
			/>
		</div>

		
        <div class="px-5 py-3 border-4 border-black">
				<router-link v-bind:to="'/product/' + this.product.id"
				class="text-xs text-gray-700 uppercase md:text-md">
					{{ product.name }}	
				</router-link>
				<br />
                <span class="mt-2 text-gray-500">
					от {{ this.product.price }}	
				</span>
         </div>
     </div>
</template>

<script>
import ProductCardImageSimple from '../components/ProductCardImageSimple.vue';
export default {
    name: 'ProductCard1',
	props: {
		product: {},
	},
	components: {
		ProductCardImageSimple
	},
	computed: {
		api_url () {
			return this.$store.state.common.api_url;
		},
	},
	methods: {
		goToProductPage () {
			this.$router.push('/product/' + this.product.id);
		},
	},
}
</script>


