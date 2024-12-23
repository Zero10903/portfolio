<template>
	<section class="home">
		<article class="home__background"></article>
		<HeroComponent />
	</section>
</template>

<script lang="ts" setup>
import HeroComponent from '@/components/HeroComponent.vue';
</script>

<style lang="scss" scoped>
.home {
	&__background {
		height: 100dvh;
		position: fixed;
		inset: 0;
		z-index: -1;
		background: url('@/assets/images/background.png') no-repeat center
			center/cover;
	}
}
</style>
