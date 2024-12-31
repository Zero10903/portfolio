<template>
	<section class="about">
		<AboutMeComponent />
		<TechSkillsComponent />
		<SoftSkillsComponent />
	</section>
</template>

<script lang="ts" setup>
import AboutMeComponent from './about/AboutMeComponent.vue';
import SoftSkillsComponent from './about/SoftSkillsComponent.vue';
import TechSkillsComponent from './about/TechSkillsComponent.vue';
</script>

<style lang="scss" scoped>
@use '@/assets/sass/layout';
@use '@/assets/sass/config' as *;

.about {
	padding: 1rem;
	background-color: $dark-color;
	@include layout.rounded($rounded-lg, (top-left, top-right));

	@include layout.flex(row, wrap, center, start, 1rem);
}
</style>
