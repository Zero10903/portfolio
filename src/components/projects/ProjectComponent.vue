<template>
	<section class="project">
		<article class="project__card">
			<img :src="props.img" alt="project image" class="project__img" />
			<ul class="project__techs">
				<li
					class="project__tech"
					v-for="(tech, index) in props.techs"
					:key="index">
					{{ tech }}
				</li>
			</ul>
		</article>
		<article class="project__main">
			<p class="project__title">{{ props.title }}</p>
			<BtnComponent class="project__btn" size="sm" @click="openDemo"
				>Demo</BtnComponent
			>
		</article>
	</section>
</template>

<script lang="ts" setup>
const props = defineProps<{
	img: string;
	src: string;
	title: string;
	techs: string[];
}>();
const openDemo: () => void = () => {
	window.open(`${props.src}`, '_blank');
};
</script>

<style lang="scss" scoped>
@use '@/assets/sass/layout';
@use '@/assets/sass/config' as *;
@use '@/assets/sass/components/card';

.project {
	@extend .card;

	&__card {
		padding-bottom: 1rem;
		overflow: hidden;
		border-radius: $rounded;
		background-color: $darker-color;
		@include layout.flex(column, wrap, space-between, center, 1rem);
	}
	&__techs {
		text-transform: uppercase;
		@include layout.flex(row, wrap, center, start, 0.2rem);
	}
	&__tech {
		padding: 0.5rem;
		font-size: 0.8rem;
		border: 1px solid $accent-color;
		border-radius: $rounded;
	}
	&__main {
		width: 100%;
		padding-inline: 1rem;
		@include layout.flex(row, nowrap, space-between, center, 1.5rem);
	}
	&__btn {
		min-width: fit-content;
	}
}
</style>
