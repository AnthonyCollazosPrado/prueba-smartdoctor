<template>
  <div>
    <Cabecera msg="Prueba Técnica"/>
    <Tareas />
  </div>
</template>

<script>
import Cabecera from './components/Cabecera.vue';
import Tareas from './components/Tareas.vue';

export default {
  name: 'App',
  components: {
    Cabecera,
    Tareas
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
