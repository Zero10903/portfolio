<template>
	<section class="filter">
		<BtnComponent
			size="sm"
			v-for="tag in projectTag"
			@click="filterStore.setTag(tag)">
			{{ tag }}
		</BtnComponent>
	</section>
</template>

<script lang="ts" setup>
import { useFilterStore } from '@/stores/filterStore';
import { projectTag } from '@/enums/projectTag';

const filterStore = useFilterStore();
</script>

<style lang="scss" scoped>
@use '@/assets/sass/layout';

.filter {
	padding: 0.5rem;
	@include layout.flex(row, wrap, start, center, 0.5rem);
}
</style>
