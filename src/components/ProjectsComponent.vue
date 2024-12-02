<template>
	<section class="projects card">
		<h2 class="projects__title">Projects</h2>
		<FilterComponent />
		<ListComponent />
	</section>
</template>

<script setup>
import FilterComponent from './Projects/FilterComponent.vue';
import ListComponent from './Projects/ListComponent.vue';
</script>

<style lang="scss" scoped></style>
