<template>
	<section class="email">
		<p class="email__pop" :class="{ 'email__pop--active': isCopied }">
			Copied!
		</p>
		<p class="email__text">{{ email }}</p>
		<IconComponent
			class="email__copy"
			:class="{ 'email__copy--active': !isCopied }"
			@click="copyToClipboard">
			<path
				d="M20 2H10c-1.103 0-2 .897-2 2v4H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2v-4h4c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM4 20V10h10l.002 10H4zm16-6h-4v-4c0-1.103-.897-2-2-2h-4V4h10v10z"></path>
		</IconComponent>
		<IconComponent
			class="email__copy"
			:class="{ 'email__copy--active': isCopied }">
			<path
				d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path>
		</IconComponent>
	</section>
</template>

<script setup>
import { ref } from 'vue';
import IconComponent from '../UtilityComponents/IconComponent.vue';

const email = ref('sam.alejandro.bustos@gmail.com');
const isCopied = ref(false);

const copyToClipboard = () => {
	navigator.clipboard
		.writeText(email.value)
		.then(() => {
			isCopied.value = true;

			setTimeout(() => {
				isCopied.value = false;
			}, 2000);
		})
		.catch((err) => {
			console.error('Error al copiar al portapapeles: ', err);
		});
};
</script>

<style lang="scss" scoped>
@use '../../assets/sass/layout';
@use '../../assets/sass/config' as *;

.email {
	position: relative;
	padding: 0.5rem 1rem;
	border-radius: 0.5rem;

	display: grid;
	grid-template-columns: repeat(auto-fit, 1fr);
	grid-template-areas: 'email copy';
	align-items: center;
	gap: 0.5rem;

	background-color: $dark-color;
	filter: drop-shadow($dark-shadow);

	&__pop {
		padding: 0.25rem 0.5rem;
		position: absolute;
		top: -1.3rem;
		left: 50%;
		transform: translateX(-50%);

		color: $accent-color;
		background-color: $dark-color;
		border-radius: 0.5rem;

		opacity: 0;
		transition: $transition-time opacity;
		&--active {
			opacity: 1;
		}
	}
	&__text {
		grid-area: email;
		font-size: clamp(0.8rem, 4dvw, 1rem);
	}
	&__copy {
		cursor: pointer;
		scale: 0;

		grid-area: copy;

		transition: $transition-time scale;
		&--active {
			scale: 1;
		}
	}
}
</style>
