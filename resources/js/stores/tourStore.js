import { defineStore } from 'pinia'

export const useTourStore = defineStore('tour', {
  state: () => ({
    tourActivo: false,
    pasoActual: 0,
    tourCompletado: localStorage.getItem('tourCompletado') === 'true',
    pasos: [
      {
        id: 1,
        titulo: '👋 Bienvenido a Hospital HIS',
        descripcion: 'Este es el Sistema Hospitalario Integrado. Te guiaremos por las funciones principales.',
        elemento: '#navbar',
        posicion: 'bottom'
      },
      {
        id: 2,
        titulo: '🏠 Inicio',
        descripcion: 'Desde aquí puedes acceder a la pantalla principal del sistema.',
        elemento: '#nav-inicio',
        posicion: 'bottom'
      },
      {
        id: 3,
        titulo: '🔐 Acceso al sistema',
        descripcion: 'Usa este botón para iniciar sesión con tus credenciales.',
        elemento: '#nav-acceso',
        posicion: 'bottom'
      },
      {
        id: 4,
        titulo: '✅ Tour completado',
        descripcion: '¡Listo! Ya conoces las funciones básicas del sistema. Puedes reiniciar el tour desde el menú de ayuda.',
        elemento: null,
        posicion: 'center'
      }
    ]
  }),

  getters: {
    pasoActualData: (state) => state.pasos[state.pasoActual],
    esPrimerPaso: (state) => state.pasoActual === 0,
    esUltimoPaso: (state) => state.pasoActual === state.pasos.length - 1,
    totalPasos: (state) => state.pasos.length
  },

  actions: {
    iniciarTour() {
      this.tourActivo = true
      this.pasoActual = 0
      this.tourCompletado = false
    },
    siguientePaso() {
      if (this.pasoActual < this.pasos.length - 1) {
        this.pasoActual++
      } else {
        this.finalizarTour()
      }
    },
    anteriorPaso() {
      if (this.pasoActual > 0) {
        this.pasoActual--
      }
    },
    saltarTour() {
      this.tourActivo = false
      this.tourCompletado = true
      localStorage.setItem('tourCompletado', 'true')
    },
    finalizarTour() {
      this.tourActivo = false
      this.tourCompletado = true
      localStorage.setItem('tourCompletado', 'true')
    },
    reiniciarTour() {
      localStorage.removeItem('tourCompletado')
      this.tourCompletado = false
      this.iniciarTour()
    }
  }
})