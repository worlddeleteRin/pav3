<template>
<div
v-if="this.mobile_filter_show"
>
	<div class="fixed top-0 left-0 z-50 w-9/12 h-full overflow-y-scroll bg-white">
		<MainFilterContainer 
		class="px-4 py-8"
		/>
	</div>
	<div 
	@click="this.closeMobileFilter()"
	class="fixed top-0 left-0 z-40 w-full h-full bg-black opacity-10">
	</div>
</div>
</template>

<script>
import MainFilterContainer from '../components/MainFilterContainer.vue';
export default {
	name: 'MobileMainFilterContainer',
	components: {
		MainFilterContainer,
	},
	computed: {
		mobile_filter_show () {
			return this.$store.state.dialogs.mobile_filter_popup.show;
		},
	},
	methods: {
		closeMobileFilter () {
			this.$store.commit('set_mobile_filter_popup', false);
		}
	},
}
</script>
