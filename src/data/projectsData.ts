import { type iProject } from '../interfaces/iProject';
import { projectTag } from '../enums/projectTag';

export const projectsData: iProject[] = [
	{
		id: 1,
		title: 'Project 1',
		image: 'https://via.placeholder.com/150',
		src: 'https://github.com',
		techs: ['Vue', 'TypeScript', 'Sass'],
		tags: [projectTag.FRONTEND],
	},
	{
		id: 2,
		title: 'Project 2',
		image: 'https://via.placeholder.com/150',
		src: 'https://github.com',
		techs: ['Vue', 'TypeScript'],
		tags: [projectTag.BACKEND],
	},
	{
		id: 3,
		title: 'Project 3',
		image: 'https://via.placeholder.com/150',
		src: 'https://github.com',
		techs: ['Unity', 'C#'],
		tags: [projectTag.GAME],
	},
	{
		id: 4,
		title: 'Project 1',
		image: 'https://via.placeholder.com/150',
		src: 'https://github.com',
		techs: ['Vue', 'TypeScript', 'Sass'],
		tags: [projectTag.FRONTEND],
	},
	{
		id: 5,
		title: 'Project 2',
		image: 'https://via.placeholder.com/150',
		src: 'https://github.com',
		techs: ['Vue', 'TypeScript'],
		tags: [projectTag.BACKEND],
	},
	{
		id: 6,
		title: 'Project 3',
		image: 'https://via.placeholder.com/150',
		src: 'https://github.com',
		techs: ['Unity', 'C#'],
		tags: [projectTag.GAME],
	},
];
