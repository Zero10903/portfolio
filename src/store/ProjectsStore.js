import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useProjectsStore = defineStore('useProjects', () => {
	const selectedTech = ref('All');

	function filterProjects(tech) {
		selectedTech.value = tech;
	}

	const filteredProjects = computed(() => {
		if (selectedTech.value === 'All') {
			return projects.value;
		}
		return projects.value.filter((project) => {
			return project.technologies.includes(selectedTech.value);
		});
	});

	const projects = ref([
		{
			id: 1,
			title: 'README Profile',
			image:
				'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1415&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			technologies: ['Vue', 'JavaScript', 'Sass'],
			link: 'https://github.com/Zero10903/Zero10903',
		},
		{
			id: 2,
			title: 'Somnium',
			image:
				'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1415&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			technologies: ['C#', 'Unity'],
			link: 'https://github.com/Zero10903/somnium',
		},
		{
			id: 3,
			title: 'Somnium',
			image:
				'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1415&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			technologies: ['C#', 'Unity'],
			link: 'https://github.com/Zero10903/somnium',
		},
		{
			id: 4,
			title: 'Somnium',
			image:
				'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1415&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			technologies: ['C#', 'Unity'],
			link: 'https://github.com/Zero10903/somnium',
		},
		{
			id: 5,
			title: 'Somnium',
			image:
				'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1415&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			technologies: ['C#', 'Unity'],
			link: 'https://github.com/Zero10903/somnium',
		},
	]);

	return { projects, selectedTech, filterProjects, filteredProjects };
});
