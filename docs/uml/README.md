# Diagramas UML - Módulo 34: Tour o Ayuda Contextual
**Estudiante:** Felix Daniel Flores Estrada  
**Carné:** 1890-23-7107  
**Módulo:** 34 - Tour o Ayuda Contextual

---

## Diagrama de Casos de Uso
+--------------------------------------------------+

|           Sistema Hospital HIS                   |

|                                                  |

|   [Usuario]                                      |

|      |                                           |

|      |----> (Ver tour de bienvenida)             |

|      |----> (Navegar pasos del tour)             |

|      |----> (Saltar tour)                        |

|      |----> (Finalizar tour)                     |

|      |----> (Reiniciar tour)                     |

|      |----> (Ver botón de ayuda flotante)        |

|                                                  |

+--------------------------------------------------+

---

## Diagrama de Clases
+------------------+       +------------------+      +------------------+

|   tourStore.js   |       |   useTour.js     |      |  TourGuide.vue   |

+------------------+       +------------------+      +------------------+

| - tourActivo     |<------| + tourActivo     |<-----| - pasoActualData |

| - pasoActual     |       | + pasoActual     |      | - totalPasos     |

| - tourCompletado |       | + tourCompletado |      | - esPrimerPaso   |

| - pasos[]        |       | + totalPasos     |      | - esUltimoPaso   |

+------------------+       | + esPrimerPaso   |      +------------------+

| + iniciarTour()  |       | + esUltimoPaso   |      | + iniciarTour()  |

| + siguientePaso()|       +------------------+      | + siguientePaso()|

| + anteriorPaso() |       | + iniciarTour()  |      | + anteriorPaso() |

| + saltarTour()   |       | + siguientePaso()|      | + saltarTour()   |

| + finalizarTour()|       | + anteriorPaso() |      +------------------+

| + reiniciarTour()|       | + saltarTour()   |

+------------------+       | + reiniciarTour()|

+------------------+

---

## Diagrama de Secuencia
Usuario          App.vue         tourStore        localStorage

|                |                 |                 |

|-- carga app -->|                 |                 |

|                |-- onMounted() ->|                 |

|                |                 |-- get() ------->|

|                |                 |<-- false -------|

|                |<- iniciarTour() |                 |

|<-- muestra tour|                 |                 |

|                |                 |                 |

|-- siguiente -->|                 |                 |

|                |-- siguientePaso()|                |

|                |                 |                 |

|-- finalizar -->|                 |                 |

|                |-- finalizarTour()|                |

|                |                 |-- set() ------->|

|                |                 |  'true'         |

|<- oculta tour  |                 |                 |

---

## Descripción del Módulo

El módulo de **Tour o Ayuda Contextual** implementa una guía visual interactiva que orienta al usuario cuando ingresa por primera vez al sistema Hospital HIS.

### Componentes implementados:
- **TourGuide.vue** - Componente visual del tour con overlay y caja de pasos
- **tourStore.js** - Estado global del tour usando Pinia
- **useTour.js** - Composable para acceder a la lógica del tour

### Funcionalidades:
- Tour automático al primer ingreso
- Navegación entre pasos (anterior/siguiente)
- Opción de saltar el tour
- Botón flotante para reiniciar el tour
- Persistencia en localStorage