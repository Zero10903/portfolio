<template>
	<section class="home">
		<HeroComponent />
		<AboutComponent />
		<ProjectsComponent />
		<CTAComponent />
	</section>
</template>

<script lang="ts" setup>
import AboutComponent from '@/components/AboutComponent.vue';
import CTAComponent from '@/components/CTAComponent.vue';
import HeroComponent from '@/components/HeroComponent.vue';
import ProjectsComponent from '@/components/ProjectsComponent.vue';
</script>

<style lang="scss" scoped></style>
