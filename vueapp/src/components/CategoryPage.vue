<template>
	<div 
	v-if="this.api_products_loaded"
	class="px-4 mx-auto border border-red-500 max-w-7xl">
		<div class="text-xl font-bold uppercase md:text-3xl lg:text-4xl">
			{{ this.current_category.name }}	
		</div>

		<div> all filters: {{ this.all_filters }} </div>
		<div>current page {{ this.current_page }} page start {{ this.page_start }} page end {{ this.page_end }} </div>
		<div> has next page {{ this.page_has_next }} has prev page {{ this.page_has_prev }} </div>
		<div>products length {{ this.products.length }}</div>
		<div> current route query {{ this.$route.query }} </div>


		<MobileMainFilterContainer />

		<div class="flex">

		<MainFilterContainer
		class="invisible w-0 md:w-1/4 md:visible"
		/>	

		<div
		class="w-full border-2 border-red-500 md:w-4/5"
		>
		<MobileProductsMenu />

		<ActiveFiltersContainer />

		<ProductsContainer 
		:products="this.products"
		/>

		</div>

		</div>

		<div
		v-if="(this.page_end - this.page_start) > 0"
		>
		<el-pagination
		background
		@current-change="this.changePage()"
		layout="prev, pager, next"
		:current-page="this.current_page"
		:total="this.page_end * 10">
		</el-pagination>
		</div>

		
	</div>

	<div v-else>
		Loading products...
	</div>
</template>

<script>

import ProductsContainer from '../components/ProductsContainer.vue';
import MainFilterContainer from '../components/MainFilterContainer.vue';
import ActiveFiltersContainer from '../components/ActiveFiltersContainer.vue';
import MobileProductsMenu from '../components/MobileProductsMenu.vue';
import MobileMainFilterContainer from '../components/MobileMainFilterContainer.vue';
import { apiGetCategoryProducts } from '../api.js'; 
import { initActiveFilters, 
		collectActiveAttributes,
		getApiCategoryProducts } from '../useful_methods.js';


export default {
	name: 'CategoryPage',
	props: ['category_id'],
	components: {
		ActiveFiltersContainer,	
		ProductsContainer,
		MainFilterContainer,
		MobileProductsMenu,
		MobileMainFilterContainer,
	},
	async beforeMount () {
		this.$store.commit('setCurrentCategoryId', this.category_id)
		await this.getApiCategoryProducts()
		await this.initActiveFilters();
		this.$store.commit('setApiProductsLoaded', true)
	},
	data () {
		return {
		}
	},
	computed: {
		current_category () {
			return this.$store.getters.getCategoryById(this.category_id);	
		},
		all_filters () {
			return this.$store.state.ecommerce.all_filters;
		},
		// variables, that was in data
		api_products_loaded () {
			return this.$store.state.ecommerce.api_products_loaded;	
		},
		products () {
			return this.$store.state.ecommerce.products;
		},	
		products_pages () {
			return this.$store.state.ecommerce.products_pages;
		},
	},
	methods: {
		apiGetCategoryProducts,
		initActiveFilters,
		collectActiveAttributes,
		getApiCategoryProducts,
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
	},
}

</script>

