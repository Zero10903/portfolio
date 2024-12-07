<template>
	<section class="list">
		<article
			v-for="project in store.filteredProjects"
			:key="project.id"
			class="list__card card"
			@click="openProject(project.link)">
			<img :src="project.image" :alt="project.title" class="list__image" />
			<h3 class="list__title">{{ project.title }}</h3>
			<div class="list__tech">
				<img
					v-for="tech in project.technologies"
					:key="tech"
					:src="techIcons[tech]"
					:alt="tech"
					class="list__tech-icon" />
			</div>
		</article>
	</section>
</template>

<script setup>
import { useProjectsStore } from '@/store/ProjectsStore';

const store = useProjectsStore();

const techIcons = {
	Sass: 'https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/sass/sass-original.svg',
	JavaScript:
		'https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/javascript/javascript-original.svg',
	TypeScript:
		'https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/typescript/typescript-original.svg',
	Vue: 'https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/vuejs/vuejs-original.svg',
	'C#': 'https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/csharp/csharp-original.svg',
	Unity:
		'https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/unity/unity-original.svg',
};
</script>

<style lang="scss" scoped>
@use '../../assets/sass/layout';
@use '../../assets/sass/config' as *;

.list {
	max-height: 30rem;
	padding: 1rem;

	overflow-y: scroll;
	scrollbar-color: $accent-color $dark-color;

	@include layout.flex(row, wrap, center, center, 1rem);

	&__card {
		cursor: pointer;
		max-width: 20rem;
		@include layout.flex(column, nowrap, center, center, 1rem);

		transition: $transition-time background-color;
		&:hover {
			background-color: $accent-color;
		}

		// ? Scroll animation
		view-timeline-name: --projectScrollReveal;
		view-timeline-axis: block;
		animation-timeline: --projectScrollReveal;
		animation-range: entry 25% cover 30%;
		animation-fill-mode: both;
		animation-name: bottom;
	}

	&__tech {
		@include layout.flex(row, wrap, center, start, 0.5rem);

		&-icon {
			@include layout.square($icon-size);
		}
	}
}

@media (min-width: 480px) {
	.list {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		align-items: center;
	}
}

@keyframes bottom {
	from {
		opacity: 0;
		translate: 0% 10%;
	}
	to {
		opacity: 1;
		translate: 0% 0%;
	}
}
</style>
