<template>
<form @submit.prevent="onSearch">
	<input v-model="searchInput" type="search" placeholder="Search for a song" class="border">
	<ul>
		<td v-for="searchResult in searchResults" :key="searchResult.id" class="block" @click="onSong(searchResult)">
			<div class="text-lg">{{ searchResult.name }}</div>
			<div class="text-sm">
				{{ searchResult.album?.name ?? '??' }} - {{ searchResult.artists?.map(artist => artist.name).join('/') ?? '??' }}
			</div>
		</td>
	</ul>
</form>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import type { TrackObject } from '#c/spotify.api'

import trpc from '#p/trpc'

const searchInput = ref('')
const searchResults = ref<TrackObject[] | null>(null)

async function onSearch() {
	if (searchInput.value.length >= 2) {
		searchResults.value = await trpc.songSearch.query(searchInput.value)
		console.log(searchResults.value)
	}
}

function onSong(song: any) {
	console.log(song)
}
</script>
