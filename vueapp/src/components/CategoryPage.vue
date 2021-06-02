<template>
	<div class="px-4 mx-auto border border-red-500 max-w-7xl">
		<div class="text-xl font-bold uppercase md:text-3xl lg:text-4xl">
			{{ this.current_category.name }}	
		</div>

		<div>current page {{ this.current_page }} page start {{ this.page_start }} page end {{ this.page_end }} </div>
		<div> has next page {{ this.page_has_next }} has prev page {{ this.page_has_prev }} </div>
		<div>products length {{ this.products.length }}</div>
		<div> current route query {{ this.$route.query }} </div>

		<div>
		<ProductsContainer 
		:products="this.products"
		/>
		</div>

		<el-pagination
		background
		@current-change="this.changePage()"
		layout="prev, pager, next, total"
		:current-page="this.current_page"
		:total="1000 * 10">
		</el-pagination>

		
	</div>
</template>

<script>

import ProductsContainer from '../components/ProductsContainer.vue';
import { apiGetCategoryProducts } from '../api.js'; 

export default {
	name: 'CategoryPage',
	props: ['category_id'],
	components: {
		ProductsContainer,
	},
	async beforeMount () {
		await this.getApiCategoryProducts()
//		console.log('category is mounted now');
//		// getting products attributesd
//		var products_filters = collectProductsAttributes(
//			this.current_category_products	
//		);
//		this.$store.commit('setAllFilters', products_filters);
//	
//		// getting products active filters
//		var active_filters = collectActiveAttributes(this.$route.query, products_filters);
//		this.$store.commit('setActiveFilters', active_filters);
//		console.log('active filters are: ', active_filters);		
	},
	data () {
		return {
			products: {},
			current_page: null,
			page_start: null,
			page_end: null,
			page_has_next: null,
			page_has_prev: null,
		}
	},
	computed: {
		current_category () {
			return this.$store.getters.getCategoryById(this.category_id);	
		},
//		current_category_products () {
//			return this.$store.getters.getProductsByCategoryId(this.category_id);
//		},
//		current_products () {
//			return this.$store.getters.getProductsFilter(
//				this.current_category_products
//			);
//		},
	},
	methods: {
		apiGetCategoryProducts,
		changePage() {
			console.log("trigger page change. new page:", event.target)
			var path = this.$route.fullPath;
			var query = this.$route.query;	
			var new_query = {}
			for (var q_key in query) {
				new_query[q_key] = query[q_key]
			}
			new_query['page'] = event.target.textContent
			console.log(path, new_query)
			this.$router.push({ path: path, query: new_query})
		},
		async getApiCategoryProducts() {
			var products_response = await apiGetCategoryProducts(this.category_id, this.$route.query);
		 	this.products = products_response.data	
		 	this.current_page = products_response.current_page
		 	this.page_start = products_response.page_start
		 	this.page_end = products_response.page_end
		 	this.page_has_next = products_response.page_has_next
		 	this.page_has_prev = products_response.page_has_prev	
		},
	},
}

</script>

