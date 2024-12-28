<template>
	<div class="modal" v-if="props.isVisible" @click.self="closeModal">
		<div class="modal__content">
			<h2 class="modal__title">{{ props.title }}</h2>
			<p class="modal__text">{{ props.description }}</p>
			<BtnComponent class="modal__btn" size="sm" @click="closeModal">
				Close
			</BtnComponent>
		</div>
	</div>
</template>

<script lang="ts" setup>
const props = defineProps<{
	title: string;
	description: string;
	isVisible: boolean;
}>();

const emit = defineEmits(['close']);

const closeModal = () => {
	emit('close');
};
</script>

<style lang="scss" scoped>
@use '@/assets/sass/layout';
@use '@/assets/sass/config' as *;
@use '@/assets/sass/components/card';

.modal {
	width: 100%;
	height: 100%;

	position: fixed;
	top: 0;
	left: 0;
	z-index: 10;

	@include layout.glass;
	@include layout.flexCenter(column);

	&__content {
		@extend .card;

		padding: 2rem;

		@include layout.flex(column, nowrap, center, start, 0.5rem);

		border-radius: $rounded;
		background: $dark-color;
	}
}
</style>
