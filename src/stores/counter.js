import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useCounterStore = defineStore('counter', () => {
	const count = ref(0)

	const increment = () => count.value++
	const decrement = () => count.value--

	const double = computed(() => count.value * 2)
	return {
count, increment, double, decrement
	}
});
	// state: () => ({
	// 	count: 0
	// }),
	// actions: {
	// 	increment() {
	// 		this.count++
	// 	},
	// 	decrement() {
	// 		this.count--
	// 	}
	// },
	// getters: {
	// 	double() {
	// 		return this.count * 2
	// 	}
	// }

//})