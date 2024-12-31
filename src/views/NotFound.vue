<template>
	<section class="not-found">
		<h1 class="not-found__title">404 - Page Not Found</h1>
		<p>The page you are looking for does not exist.</p>
		<router-link :to="{ name: 'home' }">
			<BtnComponent size="lg">Go to Home</BtnComponent>
		</router-link>
	</section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
@use '@/assets/sass/layout';

.not-found {
	height: 71dvh;
	@include layout.flexCenter(column, 1rem);

	&__title {
		font-size: 2.5rem;
	}
}
</style>
