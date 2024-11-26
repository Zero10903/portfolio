<template>
	<section class="about">
		<h2 class="about__title">About me</h2>
		<article class="about__description">
			<p>
				Hi! I'm Ale, but online I go by <span class="accent-color">Zero</span>.
				I'm a developer who loves learning. I started programming in 2019 using
				PSeint to learn algorithms and then I learned C and Arduino to make some
				projects.
			</p>
			<p>
				I'm currently learning web development with
				<span class="accent-color">Vue.js</span> and I'm loving it.
				Additionally, I'm currently learning Game Development with
				<span class="accent-color">Unity</span> at the University.
			</p>
		</article>
	</section>
</template>

<script setup></script>

<style lang="scss" scoped>
@use '../assets/sass/layout';
@use '../assets/sass/config' as *;

.about {
	padding: 1rem 0.5rem;
	max-width: clamp(10rem, 90%, 30rem);

	background-color: $darker-color;
	border-radius: 0.5rem;

	filter: drop-shadow(0.5rem 0.5rem 0.5rem $dark-shadow);

	&__title {
		padding-bottom: 0.5rem;
	}
	&__description {
		@include layout.flexCenter(column, 0.5rem);
	}
}
</style>
