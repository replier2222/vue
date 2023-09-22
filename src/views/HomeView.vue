<script setup>
import { useCounterStore } from '@/stores/counter';

const useCounter = useCounterStore();

</script>

<template>
  <h1>Home {{ useCounter.count }}</h1>
  <h2>Double: {{ useCounter.double }}</h2>
  <button @click="useCounter.increment">Increment</button>
  <button @click="useCounter.decrement">Decrement</button>
</template>