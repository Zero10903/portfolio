<template>
	<section class="cta">
		<article class="cta__content">
			<h2 class="cta__text">Lets work together on your next project!</h2>
			<a href="mailto:sam.alejandro.bustos@gmail.com" class="cta__btn">
				<BtnComponent size="lg">Contact me</BtnComponent>
			</a>
		</article>
		<img
			src="@/assets/images/cta.svg"
			alt="call to action image"
			class="cta__image" />
	</section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
@use '@/assets/sass/layout';
@use '@/assets/sass/config' as *;
@use '@/assets/sass/components/card';

.cta {
	height: 95dvh;
	@include layout.flex(row, nowrap, center, center, 1rem);

	// Scroll animation
	view-timeline-name: --darkenBackground;
	view-timeline-axis: block;
	animation-timeline: --darkenBackground;
	animation-range: entry 25% cover 30%;
	animation-fill-mode: both;
	animation-name: darken;

	&__content {
		@extend .card;

		padding: 0rem clamp(1rem, 5dvw, 2rem);
		@include layout.flexCenter(column, 1rem);
	}
	&__text {
		font-size: 2.5rem;
	}
	&__image {
		display: none;
	}
}

@media (width >= $tablet) {
	.cta {
		&__content {
			align-items: start;
		}
		&__image {
			display: block;
			width: 25rem;
		}
	}
}

@keyframes darken {
	0% {
		background-color: rgba(black, 0);
	}
	100% {
		background-color: rgba(black, 0.5);
	}
}
</style>
