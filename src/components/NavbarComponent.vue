<template>
	<section class="navbar">
		<header class="navbar__header">
			<h1 class="navbar__title">
				Zero<span class="navbar__dot accent-color">.</span>
			</h1>

			<article class="navbar__controls">
				<IconComponent
					class="navbar__filter"
					@click="openModal"
					v-if="isFilterVisible">
					<path
						d="M13 20v-4.586L20.414 8c.375-.375.586-.884.586-1.415V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v2.585c0 .531.211 1.04.586 1.415L11 15.414V22l2-2z"></path>
				</IconComponent>
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
		<transition name="menu">
			<nav class="navbar__list" v-if="isActive">
				<router-link :to="{ name: 'home' }" class="navbar__link">
					Home
				</router-link>
				<router-link :to="{ name: 'projects' }" class="navbar__link">
					Projects
				</router-link>
				<router-link to="/" class="navbar__link">Options</router-link>
			</nav>
		</transition>
		<transition name="filter">
			<ModalComponent
				v-if="isModalVisible"
				:is-visible="isModalVisible"
				title="Filter"
				@close="closeModal">
				<FilterComponent />
			</ModalComponent>
		</transition>
	</section>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount, type Ref, watch } from 'vue';
import { RouterLink } from 'vue-router';
import router from '@/router';
import FilterComponent from './FilterComponent.vue';

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

// Control the visibility of the filter icon
const isFilterVisible: Ref<boolean> = ref(false);

// Watch the route name to show the filter icon
watch(
	() => router.currentRoute.value.name,
	(newRouteName) => {
		isFilterVisible.value = newRouteName === 'projects';
	},
	{ immediate: true }
);

// Control the visibility of the filter modal
const isModalVisible: Ref<boolean> = ref(false);

// Open the filter modal
const openModal = () => {
	isModalVisible.value = true;
};

// Close the filter modal
const closeModal: () => void = () => {
	isModalVisible.value = false;
};
</script>

<style lang="scss" scoped>
@use '@/assets/sass/layout';
@use '@/assets/sass/config' as *;

.navbar {
	padding: 1rem;
	position: sticky;
	top: 0;
	z-index: 5;

	background-color: $darker-color;
	@include layout.rounded($rounded-lg, (bottom-left, bottom-right));

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
		grid-template-areas: 'filter icon';
	}
	&__filter {
		margin-inline: 0.5rem;
		grid-area: filter;
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

.menu-enter-active {
	animation: slide $transition-time;
}
.menu-leave-active {
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

.filter-enter-active {
	animation: $transition-modal toggleModal;
}
.filter-leave-active {
	animation: $transition-modal toggleModal reverse;
}

@keyframes toggleModal {
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}

// RESPONSIVE
// Media query for tablet
@media (width >= $tablet) {
	.navbar {
		@include layout.flex(row, nowrap, space-between, center, 1rem);
		&__icon {
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
