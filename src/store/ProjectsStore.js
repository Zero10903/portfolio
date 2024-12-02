import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { projectsData } from '../data/ProjectsData';

export const useProjectsStore = defineStore('useProjects', () => {
	const projects = ref(projectsData);

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

	return { projects, selectedTech, filterProjects, filteredProjects };
});
