<template>
	<section class="container">
		<ProfileComponent />
		<AboutComponent />
		<ProjectsComponent />
		<ContactComponent />
	</section>
</template>

<script setup>
import ProfileComponent from './components/ProfileComponent.vue';
import AboutComponent from './components/AboutComponent.vue';
import ProjectsComponent from './components/ProjectsComponent.vue';
import ContactComponent from './components/ContactComponent.vue';
</script>

<style lang="scss">
@use './assets/sass/reset';
@use './assets/sass/layout';
@use './assets/sass/config' as *;
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
p {
	font-size: 1rem;
	font-family: 'Roboto', sans-serif;
	font-weight: 300;
}
.container {
	@include layout.flex(column, nowrap, center, center, 1rem);
}
.accent-color {
	color: $accent-color;
}
.accent-background {
	background-color: $accent-color;
}
</style>
