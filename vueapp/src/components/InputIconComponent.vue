<template>

	<div class="relative overflow-hidden mx-auto max-w-sm">
		<div class="w-10 h-full flex justify-center absolute rounded-l-full"
		:class="[this.iconbgcolor, this.iconcolor]">
			<component :is="this.icon" class="w-6"
			:class="[this.iconcolor]"/>
		</div>
		<input 
		v-on:input="this.set($event)"
		:placeholder="this.placeholder"
		class="w-full pl-14 pr-8 py-2 outline-none border-red-500"
		:class="[this.bgcolor, this.placeholdercolor, this.rounded, this.text, this.get_border()]"/>
		
		
		<div 
		v-show="this.is_error"
		class="absolute w-10 h-full flex justify-center right-0 top-0 animate-bounce">
			<ExclamationCircleIcon 
			class="w-6 text-red-500"
			/>
		</div>

	</div>
</template>

<script>
import { UserIcon,
		PhoneIcon,
		} from '@heroicons/vue/outline';
import {
		ExclamationCircleIcon,
		} from '@heroicons/vue/solid';
	export default {
		name: 'InputIconComponent',
		props: [
		'icon', 
		'iconcolor', 
		'bgcolor', 
		'iconbgcolor',
		'rounded',
		'text',
		'placeholder',
		'placeholdercolor',
		// properties
		'modelValue',
		'is_error',
		],
		data () {
			return {
			}
		},
		components: {
			UserIcon,
			PhoneIcon,
			ExclamationCircleIcon,
		},
		emits: ['update:modelValue'],
		methods: {
			set (val) {
				var raw_val = val.target.value;
				console.log('val is', raw_val)
				this.$emit('update:modelValue', raw_val)
			},
			get_border () {
				if (this.is_error) {
				return 'border-2';
				}
				return '';
			},
		},
	}
</script>
