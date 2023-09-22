<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav class="navbar bg-dark navbar-dark">
    <div class="container">
      <RouterLink class="navbar-brand" to="/">
        <img src="@/assets/logo.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
        PokeAPI
      </RouterLink>
      <div class="btn-group">
        <router-link to="/" class="btn btn-outline-primary me-1">Home</router-link>
        <router-link to="/pokemons" class="btn btn-outline-primary me-1">Pokemons</router-link>
        <router-link to="/favoritos" class="btn btn-outline-primary">Favoritos</router-link>
      </div>
    </div>
  </nav>

  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/pokemons">Pokemons</RouterLink>
      </nav>
    </div>
  </header> -->
  <div class="container text-center">
    <RouterView />
  </div>
</template>

<style scoped></style>
