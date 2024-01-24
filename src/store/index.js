import { createStore } from 'vuex'
import VuexPersistence from 'vuex-persist';

export default createStore({
  state: {
    //lista de tareas
    tareas: [],
    //lista de tareas filtradas
    tareasFiltradas: [],
    //estado filtro tareas
    estadoFiltro: 'todo',
    //variable para la nueva tarea
    values: {
      nombre: 'Agrega el título',
      descripcion: 'Agrega la descripción'
    }
  },
  getters: {
  },
  mutations: {
    //actualiza la data del input de nueva tarea
    setValues(state, values) {
      console.log('asdfasdfadsadsads');
      console.log(state.values.nombre);
      console.log(state.values.descripcion);
      state.values = Object.assign({}, state.values, values);
    },
    //agrega la nueva tarea a la lista tareas
    agregarTarea(state) {
      let id = 't' + (state.tareas.length + 1);
      let nombre = state.values.nombre;
      console.log('1asdfasdfadsadsads');
      console.log(state.values.descripcion.toString());
     let descripcion = 'adfdsfdsa';
      //console.log(descripcion);
      console.log('2asdfasdfadsadsads');
      let estado = 'pendiente';
      state.tareas.push({
        id: id,
        nombre: nombre,
        descripcion: state.values.descripcion.toString(),
        estado: estado
      });
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
  },
  plugins: [
    //guarda los datos en el local storage
    new VuexPersistence({
      storage: window.localStorage
    }).plugin
  ]
})
