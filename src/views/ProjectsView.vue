<template>
	<section class="projects">
		<h2 class="projects__title">My projects</h2>
		<article class="projects__list">
			<ProjectComponent
				v-for="project in filterStore.filteredProjects"
				:key="project.id"
				:img="project.image"
				:src="project.src"
				:title="project.title"
				:techs="project.techs"
				:tags="project.tags || []" />
		</article>
	</section>
</template>

<script lang="ts" setup>
import { useFilterStore } from '@/stores/filterStore';
import ProjectComponent from '@/components/projects/ProjectComponent.vue';

const filterStore = useFilterStore();
</script>

<style lang="scss" scoped>
@use '@/assets/sass/layout';
@use '@/assets/sass/config' as *;

.projects {
	min-height: 100dvh;

	&__title {
		padding: 1rem;
		text-align: center;
		font-weight: 400;
		color: $darker-color;
	}
	&__list {
		width: 100%;
		@include layout.flex(row, wrap, center, center, 1rem);
	}
}
</style>
