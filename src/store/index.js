import { createStore } from 'vuex'

export default createStore({
  state: {
    //lista de tareas
    tareas: [
      {id: 't1', tarea: 'prueba de tarea 1', estado: 'pendiente'},
      {id: 't2', tarea: 'prueba de tarea 2', estado: 'pendiente'},
      {id: 't3', tarea: 'prueba de tarea 3', estado: 'pendiente'}
    ],
    //lista de tareas filtradas
    tareasFiltradas: [],
    //estado filtro tareas
    estadoFiltro: 'todo',
    //variable para la nueva tarea
    values: {
      example: 'Agrega una nueva tarea'
    }
  },
  getters: {
  },
  mutations: {
    //actualiza la data del input de nueva tarea
    setValues(state, values) {
      state.values = Object.assign({}, state.values, values);
    },
    //agrega la nueva tarea a la lista tareas
    agregarTarea(state) {
      let id = 't' + (state.tareas.length + 1);
      let tarea = state.values.example;
      let estado = 'pendiente';
      state.tareas.push({id: id, tarea: tarea, estado: estado});
    },
    //cambia el estado de la tarea a completa
    cambiarEstado(state, index) {
      state.tareas[index].estado = 'completa'
    },
    //elimina la tarea de la lista tareas
    eliminarTarea(state, id) {
      state.tareas = state.tareas.filter(item => item.id != id);
      state.tareasFiltradas = state.tareas.filter(item => item.id != id);
    },
    //elimina las tareas en una variable temporal
    filtrarTareas(state, estado) {
      if (estado == 'todo') {
        state.estadoFiltro = 'todo';
        state.tareasFiltradas = [];
      } else {
        state.estadoFiltro = estado;
        state.tareasFiltradas = state.tareas.filter(item => item.estado == estado);
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
