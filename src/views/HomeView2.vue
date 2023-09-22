<script setup>
import { useCounterStore } from '@/stores/counter';

const useCounter = useCounterStore();

const { increment, decrement } = useCounter;
const { count, double } = storeToRefs(useCounter);

</script>

<template>
	<h1>Home {{ count }}</h1>
	<h2>Double: {{ double }}</h2>
	<button @click="increment">Increment</button>
	<button @click="decrement">Decrement</button>
</template>
