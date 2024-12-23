<template>
	<section class="navbar">
		<header class="navbar__header">
			<h1 class="navbar__title">
				Zero<span class="navbar__dot accent-color">.</span>
			</h1>

			<article class="navbar__controls">
				<IconComponent
					class="navbar__icon"
					:class="{ 'navbar__icon--active': isActive == false }"
					@click="toggleActive">
					<path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
				</IconComponent>
				<IconComponent
					class="navbar__icon"
					:class="{ 'navbar__icon--active': isActive == true }"
					@click="toggleActive">
					<path
						d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
				</IconComponent>
			</article>
		</header>
		<transition>
			<nav class="navbar__list" v-if="isActive">
				<router-link to="/" class="navbar__link">Home</router-link>
				<router-link to="/" class="navbar__link">Projects</router-link>
				<router-link to="/" class="navbar__link">Options</router-link>
			</nav>
		</transition>
	</section>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount, type Ref } from 'vue';
import { RouterLink } from 'vue-router';

// Define the active state of the link list
const isActive: Ref<boolean> = ref(false);

// Toggle the active state of the link list
const toggleActive: () => void = () => {
	isActive.value = !isActive.value;
};

// Check if the screen width is greater than 768px
const checkScreenWidth: () => void = () => {
	isActive.value = window.innerWidth >= 768;
};

// Add event listener to check the screen width
onMounted(() => {
	checkScreenWidth();
	window.addEventListener('resize', checkScreenWidth);
});

// Remove event listener when the component is unmounted
onBeforeUnmount(() => {
	window.removeEventListener('resize', checkScreenWidth);
});
</script>

<style lang="scss" scoped>
@use '@/assets/sass/layout';
@use '@/assets/sass/config' as *;

.navbar {
	padding: 1rem;
	position: relative;

	background-color: $darker-color;

	&__header {
		width: 100%;
		position: relative;
		z-index: 5;

		@include layout.flex(row, nowrap, space-between, center, 1rem);
	}
	&__title {
		transition: $transition-time color;
		&:hover {
			color: $accent-color;

			& > .navbar__dot {
				color: $light-color;
			}
		}
	}
	&__dot {
		font-weight: 700;
		transition: $transition-time color;
	}
	&__controls {
		display: grid;
		grid-template-areas: 'icon';
	}
	&__icon {
		grid-area: icon;
		scale: 0;

		&--active {
			scale: 1;
		}
	}
	&__list {
		width: 100%;
		padding: 2rem;
		position: absolute;
		left: 0;
		z-index: 4;

		background-color: $darker-color;

		@include layout.flexCenter(column, 1rem);
	}
	&__link {
		position: relative;
		transition: $transition-time color;

		&::after {
			content: '';
			position: absolute;
			bottom: -2px;
			left: 0;
			height: 0.1rem;
			width: 0%;
			background-color: $light-color;

			transition: $transition-time width, $transition-time background-color;
		}
		&:hover {
			color: $accent-color;

			&::after {
				width: 100%;
				background-color: $accent-color;
			}
		}
	}
}

.v-enter-active {
	animation: slide $transition-time;
}
.v-leave-active {
	animation: slide $transition-time reverse;
}

@keyframes slide {
	0% {
		scale: 50%;
		transform: translateX(-100%);
	}
	50% {
		scale: 50%;
		transform: translateX(0%);
	}
	100% {
		scale: 100%;
		transform: translateX(0%);
	}
}

// RESPONSIVE
// Media query for tablet
@media (width >= $tablet) {
	.navbar {
		@include layout.flex(row, nowrap, space-between, center, 1rem);
		&__controls {
			display: none;
		}
		&__list {
			width: fit-content;
			padding: 0rem;
			position: relative;

			animation: none;
			background-color: transparent;

			@include layout.flexCenter(row, 0.5rem);
		}
	}
}
</style>
