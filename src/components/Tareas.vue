<template>
  <div class="container my-4">
    <div class="row g-3">
      <div class="col-8 col-md-4">
        <input 
          name="example"
          v-model="example"
          type="text" class="form-control" placeholder="Nueva Tarea">
      </div>
      <div class="col-4 col-md-2">
        <button type="submit" class="btn btn-primary w-100" @click="agregarTarea">
          <i class="fa fa-floppy-o" aria-hidden="true"></i> Guardar 
        </button>
      </div>
      <div class="col-12 col-md-6">
        <div class="row">
          <div class="col-4">
            <button type="submit" class="btn btn-success w-100" @click="filtrarTareas('completa')">
              <i class="fa fa-filter" aria-hidden="true"></i> Completas
            </button>
          </div>
          <div class="col-4">
            <button type="submit" class="btn btn-primary w-100" @click="filtrarTareas('pendiente')">
              <i class="fa fa-filter" aria-hidden="true"></i> Pendientes
            </button>
          </div>
          <div class="col-4">
            <button type="submit" class="btn btn-warning w-100" @click="filtrarTareas('todo')">
              <i class="fa fa-filter" aria-hidden="true"></i> Todo
            </button>
          </div>
        </div>
      </div>
    </div>
    <hr class="my-4">
    <ul class="list-group">
      <div v-if="estadoFiltro === 'todo'">
        <li v-for="(item, index) in tareas" :key="item.id" class="list-group-item p-3">
          <div class="row">
            <div class="col-12 col-md-7 col-lg-8">
              <h5 v-if="item.estado === 'completa'" class="text-success mb-2"><i class="fa fa-thumb-tack" aria-hidden="true"></i> Tarea {{ item.estado }}</h5>
              <h5 v-if="item.estado === 'pendiente'" class="text-primary mb-2"><i class="fa fa-thumb-tack" aria-hidden="true"></i> Tarea {{ item.estado }}</h5>
              {{ item.tarea }}
            </div>
            <div class="col-12 col-md-5 col-lg-4 mt-3">
              <div class="d-grid gap-2 d-sm-flex justify-content-sm-end">
                <button v-if="item.estado === 'pendiente'" type="button" class="btn btn-success" @click="cambiarEstado(index)">
                  <i class="fa fa-check" aria-hidden="true"></i> Terminar
                </button> 
                <button type="submit" class="btn btn-danger" @click='eliminarTarea(item.id)'>
                  <i class="fa fa-times" aria-hidden="true"></i> Eliminar
                </button>
              </div>
            </div>
          </div>
        </li>
      </div>
      <div v-else>
        <li v-for="(item, index) in tareasFiltradas" :key="item.id" class="list-group-item p-3">
          <div class="row">
            <div class="col-12 col-md-7 col-lg-8">
              <h5 v-if="item.estado === 'completa'" class="text-success mb-2"><i class="fa fa-thumb-tack" aria-hidden="true"></i> Tarea {{ item.estado }}</h5>
              <h5 v-if="item.estado === 'pendiente'" class="text-primary mb-2"><i class="fa fa-thumb-tack" aria-hidden="true"></i> Tarea {{ item.estado }}</h5>
              {{ item.tarea }}
            </div>
            <div class="col-12 col-md-5 col-lg-4 mt-3">
              <div class="d-grid gap-2 d-sm-flex justify-content-sm-end">
                <button v-if="item.estado === 'pendiente'" type="button" class="btn btn-success" @click="cambiarEstado(index)">
                  <i class="fa fa-check" aria-hidden="true"></i> Terminar
                </button> 
                <button type="submit" class="btn btn-danger" @click='eliminarTarea(item.id)'>
                  <i class="fa fa-times" aria-hidden="true"></i> Eliminar
                </button>
              </div>
            </div>
          </div>
        </li>
      </div>
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'Tareas',
  props: {
    msg: String
  },
  computed: {
    ...mapState(['tareas', 'tareasFiltradas', 'estadoFiltro', 'values']),
    example: {
      set(example) {
        this.$store.commit("setValues", { example });
      },
      get() {
        return this.values.example;
      }
    }
  },
  methods: {
    ...mapMutations(['agregarTarea', 'cambiarEstado', 'eliminarTarea', 'filtrarTareas'])
  }
}
</script>  