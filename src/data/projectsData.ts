import { type iProject } from '../interfaces/iProject';
import { projectTag } from '../enums/projectTag';

export const projectsData: iProject[] = [
	{
		id: 1,
		title: 'Somnium',
		image:
			'https://raw.githubusercontent.com/Zero10903/somnium/main/Assets/Marketing/CoverArt/cover.png',
		src: 'https://github.com/zero10903/somnium',
		techs: ['Unity', 'C#'],
		tags: [projectTag.GAME],
	},
	{
		id: 2,
		title: 'Dario\'s Barbershop',
		image:
			'/images/screenshots/dariosbarbershop.png',
		src: 'https://github.com/zero10903/dariosbarbershop',
		techs: ['Vue.js', 'TypeScript', 'Sass'],
		tags: [projectTag.FRONTEND]
	},
];
