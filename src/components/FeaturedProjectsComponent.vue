<template>
	<section class="projects">
		<article class="projects__header">
			<h2 class="projects__title">Featured projects</h2>
			<router-link to="/">
				<BtnComponent size="sm">View all</BtnComponent>
			</router-link>
		</article>
		<ul class="projects__list">
			<ProjectComponent
				v-for="project in featuredProjectsData"
				:key="project.id"
				:img="project.image"
				:techs="project.techs"
				:title="project.title"
				:src="project.src" />
		</ul>
	</section>
</template>

<script lang="ts" setup>
import { RouterLink } from 'vue-router';
import { featuredProjectsData } from '@/data/featuredProjectsData';
import ProjectComponent from '@/components/projects/ProjectComponent.vue';
</script>

<style lang="scss" scoped>
@use '@/assets/sass/layout';
@use '@/assets/sass/config' as *;

.projects {
	padding-bottom: 2rem;
	background-color: $dark-color;
	@include layout.rounded($rounded-lg, (bottom-left, bottom-right));

	&__header {
		padding: 2rem;
		@include layout.flex(row, nowrap, center, center, 1rem);
	}
	&__list {
		@include layout.flex(row, wrap, center, start, 1rem);
	}
}

@media (width >= $desktop) {
	.projects {
		&__header {
			justify-content: start;
		}
	}
}
</style>
