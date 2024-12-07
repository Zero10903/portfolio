<template>
	<section class="skills card">
		<h2 class="skills__title">Skills and tools</h2>
		<ul class="skills__list">
			<li class="skills__category">Web Development</li>
			<li class="skills__container">
				<img
					class="skills__icon"
					src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/sass/sass-original.svg"
					title="Sass"
					alt="Sass" />
				<img
					class="skills__icon"
					src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/javascript/javascript-original.svg"
					title="JavaScript"
					alt="JavaScript" />
				<img
					class="skills__icon"
					src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/typescript/typescript-original.svg"
					title="TypeScript"
					alt="TypeScript" />
				<img
					class="skills__icon"
					src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/vuejs/vuejs-original.svg"
					title="Vue.js"
					alt="Vue.js" />
			</li>
			<li class="skills__category">Game Development</li>
			<li class="skills__container">
				<img
					class="skills__icon"
					src="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/unity/unity-original.svg"
					title="Unity"
					alt="Unity" />
				<img
					class="skills__icon"
					src="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/csharp/csharp-original.svg"
					title="CSharp"
					alt="CSharp" />
			</li>
			<li class="skills__category">Version Control</li>
			<li class="skills__container">
				<img
					class="skills__icon"
					src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/git/git-original.svg"
					title="Git"
					alt="Git" />
				<img
					class="skills__icon skills__icon--github"
					src="https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/github/github-original.svg"
					title="GitHub"
					alt="GitHub" />
			</li>
			<li class="skills__category">Others</li>
			<li class="skills__container">
				<img
					class="skills__icon"
					src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/arduino/arduino-original.svg"
					title="Arduino"
					alt="Arduino" />
				<img
					class="skills__icon"
					src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/figma/figma-original.svg"
					title="Figma"
					alt="Figma" />
				<img
					class="skills__icon"
					src="https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/slack/slack-original.svg"
					title="Slack"
					alt="Slack" />
				<img
					class="skills__icon"
					src="https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/trello/trello-original.svg"
					title="Trello"
					alt="Trello" />
			</li>
		</ul>
	</section>
</template>

<script setup></script>

<style lang="scss" scoped>
@use '../assets/sass/layout';
@use '../assets/sass/config' as *;

.skills {
	&__category {
		padding: 0.5rem 1rem 0.2rem;
	}
	&__container {
		padding-inline: 1rem;
		@include layout.flex(row, wrap, start, center, 0.5rem);

		// ? Scroll animation
		view-timeline-name: --skillScrollReveal;
		view-timeline-axis: block;
		animation-timeline: --skillScrollReveal;
		animation-range: entry 25% cover 30%;
		animation-fill-mode: both;
		animation-name: right;
	}
	&__icon {
		@include layout.square(3rem);

		&--github {
			border-radius: 50%;
			background-color: $light-color;
		}
	}
}

@keyframes right {
	from {
		opacity: 0;
		translate: 10%;
	}
	to {
		opacity: 1;
		translate: 0%;
	}
}
</style>
