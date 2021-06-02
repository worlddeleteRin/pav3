<template>
	<div v-if="!this.is_global_data_loaded">
		site is loading...
	</div>
    <div v-else>
		<DesktopHeader />
		<router-view :key="$route.fullPath"></router-view>
	  
		<CallPhoneDialog />
    </div>
</template>

<script>

import DesktopHeader from './components/DesktopHeader.vue';
import CallPhoneDialog from './components/CallPhoneDialog.vue';

import { apiGetProducts, apiGetCategories } from './api.js';

export default {
	name: 'App',
	components: {
		DesktopHeader,
		CallPhoneDialog,
	 },
	 methods: {
		apiGetProducts,
		apiGetCategories,
	 },
	async beforeMount () {
		this.$store.commit('setGlobalDataLoaded', false);
//		await this.apiGetProducts();	
		await this.apiGetCategories();
		this.$store.commit('setGlobalDataLoaded', true);
	},
	computed: {
		is_global_data_loaded () {
			return this.$store.state.common.isGlobalDataLoaded;
		},
	},
}
</script>

<style>

</style>
