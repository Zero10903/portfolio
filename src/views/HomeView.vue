<template>
	<section class="home">
		<HeroComponent />
		<AboutComponent />
		<FeaturedProjectsComponent />
		<CTAComponent />
	</section>
</template>

<script lang="ts" setup>
import AboutComponent from '@/components/AboutComponent.vue';
import CTAComponent from '@/components/CTAComponent.vue';
import HeroComponent from '@/components/HeroComponent.vue';
import FeaturedProjectsComponent from '@/components/FeaturedProjectsComponent.vue';
</script>

<style lang="scss" scoped></style>
