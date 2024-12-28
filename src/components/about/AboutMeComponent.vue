<template>
	<section class="about-me">
		<h2 class="about-me__title">About me</h2>
		<p class="about-me__text">
			Hi! I'm Alejandro, but online I go by
			<span class="accent-color">Zero</span>. I'm a developer who loves
			learning. I started programming in 2019 using PSeint to learn algorithms
			and then I learned C and Arduino to make some projects.
		</p>
		<p class="about-me__text">
			I'm currently learning web development with
			<span class="accent-color">Vue.js</span> and I'm loving it. Additionally,
			I'm currently learning Game Development with
			<span class="accent-color">Unity</span> at the University.
		</p>
		<div class="about-me__btns">
			<BtnComponent size="sm" @click="copyToClipboard">Copy mail </BtnComponent>
			<BtnComponent size="sm" @click="downloadCV">Download CV</BtnComponent>
		</div>
	</section>
</template>

<script lang="ts" setup>
import { ref, type Ref } from 'vue';

const email: Ref<string> = ref('sam.alejandro.bustos@gmail.com');

const copyToClipboard: () => void = () => {
	navigator.clipboard.writeText(email.value);
};

const downloadCV: () => void = () => {
	const link = document.createElement('a');
	link.href = '@/assets/PDFs/alejandro_bustos_cv.pdf';
	link.download = 'Alejandro_Bustos_CV.pdf';
	link.click();
};
</script>

<style lang="scss" scoped>
@use '@/assets/sass/layout';
@use '@/assets/sass/config' as *;
@use '@/assets/sass/components/card';

.about-me {
	@extend .card;

	&__btns {
		@include layout.flex(row, nowrap, space-between, center, 1rem);
	}
}

@media ($tablet <= width < $desktop) {
	.about-me {
		width: 70%;
	}
}
</style>
