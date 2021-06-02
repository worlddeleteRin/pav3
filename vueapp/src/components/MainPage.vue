<template>
	<div>
		{{ this.categories }}
	</div>
	<div class="relative">
		dialog is: {{ this.dialog }}
		products are {{ this.products }}
		<button
		@click="this.show_hey_dialog()">
			show it
		</button>
		<button
		@click="this.openCallPhoneDialog()">
			open call phone dialog
		</button>
		<div>
		<input type="checkbox" class="cursor-pointer"
		/>
		</div>
		<br />
		

		<SimpleDialogVue />
		<FeaturesBlock />


	</div>
</template>

<script>

import FeaturesBlock from '../components/FeaturesBlock.vue';

import SimpleDialogVue from '../components/SimpleDialog.vue';

	export default {
		name: 'MainPage',
		components: {
			FeaturesBlock,
			// 
			SimpleDialogVue,
		},
		computed: {
			dialog () {
				return this.$store.state.dialogs.simple_dialog.show;
			},
			products () {
				return this.$store.state.ecommerce.products;
			},
			categories () {
				return this.$store.state.ecommerce.categories;
			},
		},
		methods: {
			show_hey_dialog () {
			var button_text = 'Отлично!';
			var heading = 'some heading for simple dialog'
			var description = 'some description for simple dialog'
				return this.$store.commit('openSimpleDialog', {
					button_text, heading, description
				}
				);
			},
				openCallPhoneDialog () {
			console.log('clicked to open')
			this.$store.commit('openCallPhoneDialog');
		},
		},
	}
</script>

