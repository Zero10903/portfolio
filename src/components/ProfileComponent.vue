<template>
	<section class="profile">
		<article class="profile__user">
			<img
				src="../assets/images/profile_picture.jpg"
				alt="profile picture"
				class="profile__picture" />
			<h1 class="profile__name">Alejandro Bustos</h1>
			<h2 class="profile__main-skills">Game and web developer.</h2>
		</article>
		<EmailComponent />
		<CVComponent />
	</section>
</template>

<script setup>
import EmailComponent from './ProfileComponents/EmailComponent.vue';
import CVComponent from './ProfileComponents/CVComponent.vue';
</script>

<style lang="scss" scoped>
@use '../assets/sass/layout';
@use '../assets/sass/config' as *;

.profile {
	padding: 1rem;
	width: clamp(10rem, 90%, 30rem);

	@include layout.flexCenter(column, 1.2rem);

	background-color: $darker-color;

	@include layout.rounded($rounded);
	filter: drop-shadow($dark-shadow);

	&__user {
		padding: 1rem;
		@include layout.flexCenter(column, 1rem);
	}
	&__picture {
		@include layout.square(clamp(10rem, 20vw, 20rem), 50%);
		filter: drop-shadow($dark-shadow);
	}
	&__main-skills {
		text-align: center;
	}
}
</style>
