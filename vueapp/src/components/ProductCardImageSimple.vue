<template>
	<div class="relative w-full h-full max-w-full max-h-full">
		<img 
		class="object-contain w-full h-full"
		:src="this.imgsrc" />
	</div>
</template>


<script>
export default {
	name: 'ProductCardImageSimple',
	props: ['imgsrc'],
}
</script>
