<template>
	<button :class="['btn', sizeClass]">
		<p class="btn__text">
			<slot></slot>
		</p>
	</button>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps({
	size: {
		type: String,
		default: 'md',
		validator: (value: string) => ['sm', 'md', 'lg'].includes(value),
	},
});

const sizeClass = computed(() => `btn--${props.size}`);
</script>

<style lang="scss" scoped>
@use '@/assets/sass/config' as *;

.btn {
	position: relative;
	z-index: 1;
	overflow: hidden;

	cursor: pointer;
	border: 1px solid $accent-color;
	border-radius: $rounded;
	background-color: transparent;

	color: $light-color;
	text-transform: uppercase;

	transition: $transition-time all;

	&::before,
	&::after {
		content: '';
		display: block;
		width: 50px;
		height: 50px;
		transform: translate(-50%, -50%);
		position: absolute;
		border-radius: 50%;
		z-index: -1;
		background-color: $accent-color;
		transition: 1s ease;
	}

	&::before {
		top: -1em;
		left: -1em;
	}

	&::after {
		left: calc(100% + 1em);
		top: calc(100% + 1em);
	}

	&:hover {
		color: $dark-color;

		&::before,
		&::after {
			height: 410px;
			width: 410px;
		}
	}

	&:active {
		filter: brightness(0.8);
	}

	// Button sizes
	&--sm {
		padding: 0.5rem 1rem;
	}
	&--md {
		padding: 1rem 1.5rem;
	}
	&--lg {
		font-size: 1.2rem;
		padding: 1.5rem 2rem;
	}
}
</style>
