<template>
	<section>
		<ProfileComponent />
		<ProjectsComponent />
		<AboutComponent />
		<ContactComponent />
	</section>
</template>

<script setup>
import ProfileComponent from './components/ProfileComponent.vue';
import ProjectsComponent from './components/ProjectsComponent.vue';
import AboutComponent from './components/AboutComponent.vue';
import ContactComponent from './components/ContactComponent.vue';
</script>

<style lang="scss">
@use './assets/sass/reset';
@use './assets/sass/config' as *;

body {
	color: $light-color;
	background-color: $dark-color;
}
h1 {
	font-size: 1.5rem;
}
h2 {
	font-size: 1.25rem;
}
</style>
