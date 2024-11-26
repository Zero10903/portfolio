<template>
	<section class="cv" @click="downloadCV">
		<p class="cv__text">Download CV</p>
		<svg
			class="cv__download"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24">
			<path d="M19 9h-4V3H9v6H5l7 8zM4 19h16v2H4z"></path>
		</svg>
	</section>
</template>

<script setup>
const downloadCV = () => {
	const link = document.createElement('a');
	link.href = '../../assets/PDFs/alejandro_bustos_cv.pdf';
	link.download = 'Alejandro_Bustos_CV.pdf';
	link.click();
};
</script>

<style lang="scss" scoped>
@use '../../assets/sass/layout';
@use '../../assets/sass/config' as *;

.cv {
	cursor: pointer;
	padding: 0.5rem 1rem;
	border-radius: 0.5rem;

	display: grid;
	grid-template-columns: 1fr auto;
	align-items: center;
	gap: 0.5rem;

	background-color: $darker-color;

	filter: drop-shadow($dark-shadow);

	transition: $transition-time filter, $transition-time background-color;

	&:hover {
		background-color: $accent-color;
		filter: drop-shadow($accent-shadow);

		& > .cv__text {
			color: $darker-color;
		}
		& > .cv__download {
			fill: $darker-color;
		}
	}

	&__text {
		font-weight: 600;
		color: $accent-color;
		transition: $transition-time color;
	}
	&__download {
		fill: $accent-color;
		@include layout.square(2rem);
		transition: $transition-time fill;
	}
}
</style>
