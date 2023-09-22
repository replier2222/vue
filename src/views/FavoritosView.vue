<script setup>
import { useFavoritosStore } from '@/stores/favoritos';
import { RouterLink } from 'vue-router';
import { storeToRefs } from 'pinia';


const useFavoritos = useFavoritosStore()

const { favoritos } = storeToRefs(useFavoritos)
const { remove } = useFavoritos
</script>

<template>
	<div>
		<h1>Favoritos</h1>
		<p v-if="favoritos.length === 0">Sin favoritos</p>
		<ul class="list-group" v-else>
			<li class="list-group-item" v-for="p in  favoritos " :key="p.id">
				<div>{{ p.name }}</div>
				<router-link class="btn btn-primary me-2" :to="`/pokemons/${p.name}`">Más información</router-link>
				<button class="btn btn-danger" @click="remove(p.id)">Eliminar</button>

			</li>
		</ul>

	</div>
</template>