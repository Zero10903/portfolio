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
		<transition>
			<ModalComponent
				v-if="selectedSkill"
				:title="selectedSkill.name"
				:isVisible="isModalVisible"
				@close="closeModal">
				<p>{{ selectedSkill.description }}</p>
			</ModalComponent>
		</transition>
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

.v-enter-active {
	animation: $transition-modal toggleModal;
}
.v-leave-active {
	animation: $transition-modal toggleModal reverse;
}

@keyframes toggleModal {
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}
</style>
