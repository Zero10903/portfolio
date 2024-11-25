<template>
	<section class="profile">
		<img
			src="../assets/images/profile_picture.jpg"
			alt="profile picture"
			class="profile__picture" />
		<h1 class="profile__name">Alejandro Bustos</h1>
		<h2 class="profile__main-skills">Game and web developer.</h2>
		<article class="profile__contact">
			<p class="profile__pop" :class="{ 'profile__pop--active': isCopied }">
				Copied!
			</p>
			<p class="profile__email">{{ email }}</p>
			<svg
				class="profile__copy"
				:class="{ 'profile__copy--enabled': !isCopied }"
				@click="copyToClipboard"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24">
				<path
					d="M20 2H10c-1.103 0-2 .897-2 2v4H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2v-4h4c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM4 20V10h10l.002 10H4zm16-6h-4v-4c0-1.103-.897-2-2-2h-4V4h10v10z"></path>
			</svg>
			<svg
				class="profile__copy"
				:class="{ 'profile__copy--enabled': isCopied }"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24">
				<path
					d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path>
			</svg>
		</article>
		<a
			class="profile__cv"
			href="../assets/PDFs/alejandro_bustos_cv.pdf"
			download="Alejandro_Bustos_CV.pdf">
			Download CV
			<svg
				class="profile__download"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24">
				<path d="M19 9h-4V3H9v6H5l7 8zM4 19h16v2H4z"></path>
			</svg>
		</a>
	</section>
</template>

<script setup>
import { ref } from 'vue';

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
@use '../assets/sass/layout';
@use '../assets/sass/config' as *;

.profile {
	padding: 1rem;
	@include layout.flexCenter(column, 1.5rem);

	&__picture {
		@include layout.square(clamp(10rem, 20vw, 20rem), 50%);
		filter: drop-shadow(1rem 1rem 1rem $dark-shadow);
	}
	&__main-skills {
		text-align: center;
	}
	&__contact {
		position: relative;
		padding: 0.5rem 1rem;
		border-radius: 0.5rem;

		display: grid;
		grid-template-columns: repeat(auto-fit, 1fr);
		grid-template-areas: 'email copy';
		align-items: center;
		gap: 0.5rem;

		background-color: $darker-color;

		filter: drop-shadow(0.5rem 0.5rem 0.5rem $dark-shadow);
	}
	&__pop {
		padding: 0.25rem 0.5rem;
		position: absolute;
		top: -1rem;
		left: 50%;
		transform: translateX(-50%);

		color: $accent-color;
		background-color: $darker-color;
		border-radius: 0.5rem;

		opacity: 0;
		transition: $transition-time opacity;
		&--active {
			opacity: 1;
		}
	}
	&__email {
		grid-area: email;
	}
	&__copy {
		cursor: pointer;
		fill: $accent-color;
		@include layout.square(2rem);
		scale: 0;

		grid-area: copy;

		transition: $transition-time scale;
		&--enabled {
			scale: 1;
		}
	}
	&__cv {
		cursor: pointer;
		padding: 0.5rem 1rem;
		border-radius: 0.5rem;

		display: grid;
		grid-template-columns: 1fr auto;
		align-items: center;
		gap: 0.5rem;

		color: $accent-color;
		background-color: $darker-color;

		filter: drop-shadow(0.5rem 0.5rem 0.5rem $dark-shadow);

		transition: $transition-time filter, $transition-time color,
			$transition-time background-color;
		&:hover {
			color: $darker-color;
			background-color: $accent-color;
			filter: drop-shadow(0rem 0rem 0.5rem $accent-shadow);

			& > .profile__download {
				fill: $darker-color;
			}
		}
	}
	&__download {
		fill: $accent-color;
		@include layout.square(2rem);
		transition: $transition-time fill;
	}
}
</style>
