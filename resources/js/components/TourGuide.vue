<template>
  <div v-if="tourActivo">
    <!-- Overlay oscuro -->
    <div class="tour-overlay" @click="saltarTour"></div>

    <!-- Caja del tour -->
    <div class="tour-box" :class="'tour-box--' + (pasoActualData?.posicion || 'center')">
      <!-- Header -->
      <div class="tour-header">
        <span class="tour-paso">Paso {{ pasoActual + 1 }} de {{ totalPasos }}</span>
        <button class="tour-cerrar" @click="saltarTour">✕</button>
      </div>

      <!-- Contenido -->
      <div class="tour-contenido">
        <h3 class="tour-titulo">{{ pasoActualData?.titulo }}</h3>
        <p class="tour-descripcion">{{ pasoActualData?.descripcion }}</p>
      </div>

      <!-- Barra de progreso -->
      <div class="tour-progreso">
        <div
          class="tour-progreso-barra"
          :style="{ width: ((pasoActual + 1) / totalPasos * 100) + '%' }"
        ></div>
      </div>

      <!-- Botones -->
      <div class="tour-botones">
        <button
          v-if="!esPrimerPaso"
          class="tour-btn tour-btn--secundario"
          @click="anteriorPaso"
        >
          ← Anterior
        </button>
        <button class="tour-btn tour-btn--saltar" @click="saltarTour">
          Saltar tour
        </button>
        <button class="tour-btn tour-btn--primario" @click="siguientePaso">
          {{ esUltimoPaso ? 'Finalizar ✓' : 'Siguiente →' }}
        </button>
      </div>
    </div>
  </div>

  <!-- Botón flotante para reiniciar el tour -->
  <div v-if="!tourActivo" class="tour-fab" @click="iniciarTour" title="Iniciar tour de ayuda">
    ❓
  </div>
</template>

<script setup>
import { useTour } from '../composables/useTour'

const {
  tourActivo,
  pasoActual,
  pasoActualData,
  totalPasos,
  esPrimerPaso,
  esUltimoPaso,
  iniciarTour,
  siguientePaso,
  anteriorPaso,
  saltarTour
} = useTour()
</script>

<style scoped>
.tour-overlay {
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9998;
}

.tour-box {
  position: fixed;
  z-index: 9999;
  background: white;
  border-radius: 12px;
  padding: 24px;
  width: 360px;
  box-shadow: 0 20px 60px rgba(0,0,0,0.3);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.tour-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.tour-paso {
  font-size: 12px;
  color: #6b7280;
  font-weight: 600;
}

.tour-cerrar {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: #6b7280;
}

.tour-titulo {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 8px;
  color: #111827;
}

.tour-descripcion {
  font-size: 14px;
  color: #4b5563;
  line-height: 1.6;
}

.tour-progreso {
  height: 4px;
  background: #e5e7eb;
  border-radius: 4px;
  margin: 16px 0;
}

.tour-progreso-barra {
  height: 100%;
  background: #3b82f6;
  border-radius: 4px;
  transition: width 0.3s ease;
}

.tour-botones {
  display: flex;
  gap: 8px;
  justify-content: flex-end;
  flex-wrap: wrap;
}

.tour-btn {
  padding: 8px 16px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-size: 13px;
  font-weight: 600;
}

.tour-btn--primario {
  background: #3b82f6;
  color: white;
}

.tour-btn--primario:hover {
  background: #2563eb;
}

.tour-btn--secundario {
  background: #f3f4f6;
  color: #374151;
}

.tour-btn--saltar {
  background: none;
  color: #9ca3af;
  text-decoration: underline;
}

.tour-fab {
  position: fixed;
  bottom: 24px;
  right: 24px;
  width: 52px;
  height: 52px;
  background: #3b82f6;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(59,130,246,0.4);
  z-index: 9997;
  transition: transform 0.2s;
}

.tour-fab:hover {
  transform: scale(1.1);
}
</style>