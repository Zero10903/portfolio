<template>
	<section class="skills">
		<h2 class="skills__title">Tech skills and tools</h2>
		<ul class="skills__list">
			<li class="skills__category">Web Development</li>
			<li class="skills__container">
				<img
					class="skills__icon"
					v-for="tech in webTechData"
					:key="tech.id"
					:src="tech.icon"
					:title="tech.name"
					:alt="tech.name" />
			</li>
			<li class="skills__category">Game Development</li>
			<li class="skills__container">
				<img
					class="skills__icon"
					v-for="tech in gameTechData"
					:key="tech.id"
					:src="tech.icon"
					:title="tech.name"
					:alt="tech.name" />
			</li>
			<li class="skills__category">Others</li>
			<li class="skills__container">
				<img
					class="skills__icon"
					v-for="tech in otherTechData"
					:key="tech.id"
					:src="tech.icon"
					:title="tech.name"
					:alt="tech.name" />
			</li>
		</ul>
	</section>
</template>

<script lang="ts" setup>
import { gameTechData } from '@/data/gameTechData';
import { otherTechData } from '@/data/otherTechData';
import { webTechData } from '@/data/webTechData';
</script>

<style lang="scss" scoped>
@use '@/assets/sass/layout';
@use '@/assets/sass/config' as *;
@use '@/assets/sass/components/card';

.skills {
	@extend .card;

	&__title {
		text-align: center;
	}
	&__category {
		padding-bottom: 0.2rem;

		&:not(:first-child) {
			padding-top: 0.5rem;
		}
	}
	&__container {
		padding-inline: 1rem;
		@include layout.flex(row, wrap, start, center, 0.5rem);

		// Scroll animation
		view-timeline-name: --skillScrollReveal;
		view-timeline-axis: block;
		animation-timeline: --skillScrollReveal;
		animation-range: entry 25% cover 30%;
		animation-fill-mode: both;
		animation-name: left;
	}
	&__icon {
		@include layout.square(3rem);
	}
}

@keyframes left {
	from {
		opacity: 0;
		translate: -10%;
	}
	to {
		opacity: 1;
		translate: 0%;
	}
}
</style>
