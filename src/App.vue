<template>
	<section>
		<NavbarComponent />
		<router-view></router-view>
	</section>
</template>

<script lang="ts" setup>
import { RouterView } from 'vue-router';
import NavbarComponent from '@/components/NavbarComponent.vue';
</script>

<style lang="scss">
@use '@/assets/sass/reset';
@use '@/assets/sass/layout';
@use '@/assets/sass/config' as *;

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
	font-weight: 300;
}
.accent-color {
	color: $accent-color;
}
</style>
