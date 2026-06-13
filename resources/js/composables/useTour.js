import { computed } from 'vue'
import { useTourStore } from '../stores/tourStore'

export function useTour() {
  const tourStore = useTourStore()

  const tourActivo = computed(() => tourStore.tourActivo)
  const pasoActual = computed(() => tourStore.pasoActual)
  const pasoActualData = computed(() => tourStore.pasoActualData)
  const tourCompletado = computed(() => tourStore.tourCompletado)
  const totalPasos = computed(() => tourStore.totalPasos)
  const esPrimerPaso = computed(() => tourStore.esPrimerPaso)
  const esUltimoPaso = computed(() => tourStore.esUltimoPaso)

  function iniciarTour() {
    tourStore.iniciarTour()
  }

  function siguientePaso() {
    tourStore.siguientePaso()
  }

  function anteriorPaso() {
    tourStore.anteriorPaso()
  }

  function saltarTour() {
    tourStore.saltarTour()
  }

  function reiniciarTour() {
    tourStore.reiniciarTour()
  }

  return {
    tourActivo,
    pasoActual,
    pasoActualData,
    tourCompletado,
    totalPasos,
    esPrimerPaso,
    esUltimoPaso,
    iniciarTour,
    siguientePaso,
    anteriorPaso,
    saltarTour,
    reiniciarTour
  }
}