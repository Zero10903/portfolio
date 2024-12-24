<template>
	<div id="app">
		<vue-particles id="tsparticles" url="http://foo.bar/particles.json" />

		<vue-particles
			id="tsparticles"
			:options="{
				background: {
					color: {
						value: 'transparent',
					},
				},
				fpsLimit: 120,
				interactivity: {
					events: {
						onClick: {
							enable: false,
						},
						onHover: {
							enable: false,
						},
					},
				},
				particles: {
					color: {
						value: '#9932cc',
					},
					links: {
						color: '#9932cc',
						distance: 150,
						enable: true,
						opacity: 0.5,
						width: 1,
					},
					move: {
						direction: 'none',
						enable: true,
						outModes: 'bounce',
						random: false,
						speed: 3,
						straight: false,
					},
					number: {
						density: {
							enable: true,
						},
						value: 80,
					},
					opacity: {
						value: 0.5,
					},
					shape: {
						type: 'circle',
					},
					size: {
						value: { min: 1, max: 5 },
					},
				},
				detectRetina: true,
			}" />
	</div>
</template>

<style lang="scss" scoped>
#app {
	position: absolute;
	inset: 0;
	z-index: -1;
}
</style>
