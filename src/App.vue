<template>
	<section>
		<NavbarComponent />
		<article class="background"></article>
		<router-view></router-view>
		<FooterComponent />
	</section>
</template>

<script lang="ts" setup>
import { RouterView } from 'vue-router';
import NavbarComponent from '@/components/NavbarComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
</script>

<style lang="scss">
@use '@/assets/sass/reset';
@use '@/assets/sass/layout';
@use '@/assets/sass/config' as *;
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

body {
	color: $light-color;
	background-color: $dark-color;
}
h1 {
	font-size: 1.5rem;
	font-family: 'Montserrat', sans-serif;
	font-weight: 200;
}
h2 {
	font-size: 1.25rem;
	font-family: 'Montserrat', sans-serif;
	font-weight: 100;
	font-style: italic;
}
h1,
h2 {
	padding-bottom: 0.5rem;
}
p {
	font-size: 1rem;
	font-family: 'Roboto', sans-serif;
	font-weight: 400;
}
.accent-color {
	color: $accent-color;
}
.background {
	height: 100dvh;
	position: fixed;
	inset: 0;
	z-index: -1;
	background: url('@/assets/images/background.webp') no-repeat center
		center/cover;
}
</style>
