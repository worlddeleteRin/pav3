<template>
	<div class="px-4 mx-auto border border-red-500 max-w-7xl">
		<div class="text-xl font-bold uppercase md:text-3xl lg:text-4xl">
			{{ this.current_category.name }}	
		</div>

		<div class="flex mx-auto">

		<div class="border-4 border-green-500">
		<ProductsFilterContainer />
		</div>

		<div>
		<ActiveFiltersContainer />
		<ProductsContainer 
		:products="this.current_products"
		/>
		</div>

		</div>
		
	</div>
</template>

<script>

import ProductsContainer from '../components/ProductsContainer.vue';
import ProductsFilterContainer from '../components/ProductsFilterContainer.vue';
import { collectProductsAttributes, collectActiveAttributes } from '../useful_methods.js';
import ActiveFiltersContainer from '../components/ActiveFiltersContainer.vue';

export default {
	name: 'CategoryPage',
	props: ['category_id'],
	components: {
		ProductsContainer,
		ProductsFilterContainer,
		ActiveFiltersContainer,
	},
	beforeMount () {
		console.log('category is mounted now');
		// getting products attributesd
		var products_filters = collectProductsAttributes(
			this.current_category_products	
		);
		this.$store.commit('setAllFilters', products_filters);
	
		// getting products active filters
		var active_filters = collectActiveAttributes(this.$route.query, products_filters);
		this.$store.commit('setActiveFilters', active_filters);
		console.log('active filters are: ', active_filters);		
	},
	computed: {
		current_category () {
			return this.$store.getters.getCategoryById(this.category_id);	
		},
		current_category_products () {
			return this.$store.getters.getProductsByCategoryId(this.category_id);
		},
		current_products () {
			return this.$store.getters.getProductsFilter(
				this.current_category_products
			);
		},
	},
	methods: {
		collectActiveAttributes,
		collectProductsAttributes,	
	},
}

</script>

