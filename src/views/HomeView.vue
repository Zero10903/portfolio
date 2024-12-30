<template>
	<section class="home">
		<article class="home__background"></article>
		<HeroComponent />
		<AboutComponent />
		<ProjectsComponent />
	</section>
</template>

<script lang="ts" setup>
import AboutComponent from '@/components/AboutComponent.vue';
import HeroComponent from '@/components/HeroComponent.vue';
import ProjectsComponent from '@/components/ProjectsComponent.vue';
</script>

<style lang="scss" scoped>
.home {
	&__background {
		height: 100dvh;
		position: fixed;
		inset: 0;
		z-index: -1;
		background: url('@/assets/images/background.webp') no-repeat center
			center/cover;
	}
}
</style>
