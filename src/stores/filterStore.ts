import { defineStore } from 'pinia';
import { computed, type ComputedRef, ref, type Ref } from 'vue';
import { projectsData } from '../data/projectsData';
import { projectTag } from '../enums/projectTag';
import { type iProject } from '../interfaces/iProject';

export const useFilterStore = defineStore('filter', () => {
	function setTag(tag: projectTag) {
		selectedTag.value = tag;
	}

	const selectedTag: Ref<projectTag> = ref(projectTag.ALL);

	const filteredProjects: ComputedRef<iProject[]> = computed(() => {
		if (selectedTag.value == projectTag.ALL) {
			return projectsData;
		}
		return projectsData.filter(
			(project) =>
				project.tags &&
				selectedTag.value &&
				project.tags.includes(selectedTag.value as string)
		);
	});

	return {
		setTag,
		selectedTag,
		filteredProjects,
	};
});
