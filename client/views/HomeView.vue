<template>
<form @submit.prevent="onSearch">
	<input v-model="searchInput" type="search" placeholder="Search for a song" class="border">
</form>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import trpc from '#p/trpc'

const searchInput = ref('')

async function onSearch() {
	if (searchInput.value.length >= 2) {
		const searchResults = await trpc.songSearch.query(searchInput.value)
		console.log(searchResults)
	}
}
</script>
