<template>
	<section class="profile card">
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
import EmailComponent from './Profile/EmailComponent.vue';
import CVComponent from './Profile/CVComponent.vue';
</script>

<style lang="scss" scoped>
@use '../assets/sass/layout';
@use '../assets/sass/config' as *;

.profile {
	margin-top: 1rem;
	@include layout.flexCenter(column, 1.2rem);

	&__user {
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
