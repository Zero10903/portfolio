<template>
	<section class="hero">
		<ParticlesComponent />
		<article class="hero__content">
			<div class="hero__text">
				<h1 class="hero__title">
					Hi, I'm Zero
					<br />
					<span class="hero__title--large">Game and web developer.</span>
				</h1>
				<p class="hero__subtitle">
					Are you ready to get your next website or videogame?
				</p>
			</div>
			<a href="mailto:sam.alejandro.bustos@gmail.com">
				<BtnComponent size="md">Contact me</BtnComponent>
			</a>
		</article>
		<article class="hero__images">
			<transition>
				<img
					class="hero__image"
					v-if="isActive"
					src="@/assets/images/web.svg"
					alt="Web image"
					loading="lazy" />
				<img
					class="hero__image"
					v-else-if="!isActive"
					src="@/assets/images/gaming.svg"
					alt="Gaming image"
					loading="lazy" />
			</transition>
		</article>
	</section>
</template>

<script lang="ts" setup>
import { onMounted, ref, type Ref } from 'vue';
import ParticlesComponent from '@/components/utility/ParticlesComponent.vue';

// Define the active state of the image
const isActive: Ref<boolean> = ref(true);

// Change the image every 2.5 seconds
const toggleImage: () => void = () => {
	setInterval(() => {
		isActive.value = !isActive.value;
	}, 2500);
};

onMounted(() => {
	toggleImage();
});
</script>

<style lang="scss" scoped>
@use '@/assets/sass/layout';
@use '@/assets/sass/config' as *;
@use '@/assets/sass/components/card';

.hero {
	height: 95dvh;
	padding: 1rem;
	position: relative;

	@include layout.flexCenter(column, 1rem);

	&__content {
		@extend .card;

		padding: 0rem clamp(1rem, 5dvw, 2rem);
		@include layout.flexCenter(column, 1rem);
	}
	&__title {
		font-size: 2rem;
		&--large {
			font-size: 2.5rem;
		}
	}
	&__image {
		display: none;
	}
}

@media (width >= $tablet) {
	.hero {
		flex-flow: row nowrap;

		&__content {
			align-items: start;
		}
		&__images {
			display: grid;
			grid-template-areas: 'img';
		}
		&__image {
			height: 17rem;
			width: 25rem;
			display: block;
			grid-area: img;
		}
	}
}
.v-enter-active {
	animation: slide-in $transition-time;
}
.v-leave-active {
	animation: slide-out $transition-time;
}
@keyframes slide-in {
	from {
		opacity: 0;
		transform: translateX(-30%);
	}
	to {
		opacity: 1;
		transform: translateX(0%);
	}
}
@keyframes slide-out {
	0% {
		opacity: 1;
		scale: 1;
		transform: translateX(0%);
	}
	50% {
		opacity: 1;
		scale: 0.5;
		transform: translateX(0%);
	}
	100% {
		opacity: 0;
		scale: 0.5;
		transform: translateX(-30%);
	}
}
</style>
