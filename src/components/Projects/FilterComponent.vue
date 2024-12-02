<template>
	<section class="filter">
		<button
			v-for="tech in technologies"
			:key="tech"
			@click="store.filterProjects(tech)"
			class="filter__btn">
			{{ tech }}
		</button>
	</section>
</template>

<script setup>
import { ref } from 'vue';
import { useProjectsStore } from '@/store/ProjectsStore';

const store = useProjectsStore();
const technologies = ref(['All', 'Vue', 'TypeScript', 'C#', 'Unity']);
</script>

<style lang="scss" scoped>
@use '../../assets/sass/layout';
@use '../../assets/sass/config' as *;

.filter {
	padding: 1rem;
	@include layout.flex(row, wrap, center, start, 0.5rem);

	&__btn {
		cursor: pointer;
		padding: 0.5rem 1rem;
		@include layout.rounded($rounded);

		background-color: $accent-color;
		filter: drop-shadow($dark-shadow);

		transition: $transition-time background-color;
		&:hover {
			background-color: $accent-dark-color;
		}
	}
}
</style>
