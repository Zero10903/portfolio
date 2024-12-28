<template>
	<section class="skills">
		<h2 class="skills__title">Soft Skills</h2>
		<ul class="skills__list">
			<BtnComponent
				size="sm"
				class="skills__item"
				v-for="skill in softSkillsData"
				:key="skill.id"
				@click="openModal(skill)">
				{{ skill.name }}
			</BtnComponent>
		</ul>
		<ModalComponent
			v-if="selectedSkill"
			:title="selectedSkill.name"
			:description="selectedSkill.description"
			:isVisible="isModalVisible"
			@close="closeModal" />
	</section>
</template>

<script lang="ts" setup>
import { ref, type Ref } from 'vue';
import { softSkillsData } from '@/data/softSkillsData';
import { type iSoftSkill } from '@/interfaces/iSoftSkill';

const selectedSkill: Ref<iSoftSkill | null> = ref(null);
const isModalVisible: Ref<boolean> = ref(false);

const openModal: (skill: iSoftSkill) => void = (skill: iSoftSkill) => {
	selectedSkill.value = skill;
	isModalVisible.value = true;
};

const closeModal: () => void = () => {
	isModalVisible.value = false;
	selectedSkill.value = null;
};
</script>

<style lang="scss" scoped>
@use '@/assets/sass/layout';
@use '@/assets/sass/config' as *;
@use '@/assets/sass/components/card';

.skills {
	@extend .card;

	&__list {
		@include layout.flex(row, wrap, center, center, 1rem);
	}
}
</style>
