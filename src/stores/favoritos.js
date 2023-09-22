import { defineStore } from "pinia";
import { ref } from "vue";

export const useFavoritosStore = defineStore('favoritos', () => {
	const favoritos = ref([])

	if(localStorage.getItem('favoritos')) {
		favoritos.value = JSON.parse(localStorage.getItem('favoritos'))
	}
	
	const add = (pokemon) => {
		favoritos.value.push(pokemon)
		localStorage.setItem('favoritos', JSON.stringify(favoritos.value))
	}

	const remove = (id) => {
		favoritos.value = favoritos.value.filter(pokemon => pokemon.id !== id)
		localStorage.setItem('favoritos', JSON.stringify(favoritos.value))
	}	

	const findPoke = (id) => {
		return favoritos.value.find(pokemon => pokemon.id === id)
	}

	return {
		favoritos, add, remove, findPoke
	}
} );