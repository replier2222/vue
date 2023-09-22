<script setup>
import { RouterLink } from 'vue-router'
import { usegetData } from '@/composables/useGetData';
import { useCounterStore } from '@/stores/counter';

const useCounter = useCounterStore();

const { getData, data, loading, error } = usegetData()

getData('https://pokeapi.co/api/v2/pokemon')

</script>
<template>
	<div>
		<span v-if="loading">Loading...</span>
		<div class="alert alert-danger mt-2" v-if="error">{{ error }}</div>
		<h1>Home {{ useCounter.count }}</h1>
		<h2>Double: {{ useCounter.double }}</h2>
		<button @click="useCounter.increment">Increment</button>
		<button @click="useCounter.decrement">Decrement</button>
		<div v-if="data">
			<ul class="list-group">
				<li v-for="p in data.results" class="list-group-item">
					<router-link :to="`/pokemons/${p.name}`">{{ p.name }}</router-link>
				</li>
			</ul>
			<div class="mt-2">
				<button :disabled="!data.previous" class="btn btn-primary me-2"
					@click="getData(data.previous)">Prev</button>
				<button :disabled="!data.next" class="btn btn-success" @click="getData(data.next)">Next</button>
			</div>
		</div>
	</div>
</template>