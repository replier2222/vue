<script setup>
import { useFavoritosStore } from '@/stores/favoritos.js';
import { usegetData } from '@/composables/useGetData';
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const useFavoritos = useFavoritosStore()

const { add, findPoke } = useFavoritos

const back = () => {
	router.push('/pokemons')
}

const { getData, data, loading, error } = usegetData()

getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`)
</script>
<template>
	<span v-if="loading">Loading...</span>
	<div class="alert alert-danger mt-2" v-if="error">{{ error }}</div>
	<div v-if="data">
		<img :src="data.sprites?.front_default" alt="" />
		<h1>Poke name: {{ $route.params.name }}</h1>
		<button class="btn btn-primary mb-2" @click="add(data)" :disabled="findPoke(data.id)">Agregar favoritos</button>
	</div>
	<h1 v-else class="alert alert-danger mt-2">
		No existe el pokemon</h1>

	<button @click="back" class="btn btn-outline-primary">Volver</button>
</template>