<template>
	
	<div
	class="relative flex w-full h-full border-4 border-red-500 max-h-48"
	>

		<swiper
	class="z-10 flex w-full h-full max-h-full border-4 border-green-500"
	@swiper="setProductCardImageSlider"
	:slidesPerView="1"
	pagination
	>
		<swiper-slide
		v-for="image in this.product.images"	
		:key="image.id"
		@click="this.goToProductPage()"
		>
			<img 
			class="object-contain w-full h-full"
			:src="this.api_url + image.imgsrc" />	
		</swiper-slide>

		</swiper>

	</div>
</template>

<script>

import SwiperCore, {
Pagination} from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.min.css';

SwiperCore.use([Pagination])

export default {
	name: 'ProductCardImageContainer',
	props: ['product'],
	components: {
		Swiper,
		SwiperSlide,
	},
	data () {
		return {
			card_image_slider: null,	
		}
	},
	computed: {
		api_url () {
			return this.$store.state.common.api_url;
		},
	},
	methods: {
		setProductCardImageSlider(swiper) {
			this.card_image_slider = swiper;			
		},
		goToProductPage () {
			this.$router.push('/product/' + this.product.id)
		},
	},
}
</script>
