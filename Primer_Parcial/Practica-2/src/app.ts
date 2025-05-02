//ENTIDAD IA/FEEDBACK 

// Variables
const nombreUsuario: string = "William";
let grabacionActiva: boolean = true;
const totalFeedbacks: number = 5;


// interfaces 
interface Feedback {
    id_feedback: number;
    id_grabacion: number;
    claridad_score: number;
    velocidad_palabras: number;
    pausas: number;
    recomendaciones: string;
  }
  
  interface Transcripcion {
    id_transcripcion: number;
    id_grabacion: number;
    contenido: string;
    calidad: string;
  }
  
  interface ErrorDetectado {
    id_error: number;
    id_feedback: number;
    tipo: string;
    descripcion: string;
  }
  
  interface EmocionDetectada {
    id_emocion: number;
    id_feedback: number;
    tipo: string;
    intensidad: number;
  }
  
  interface ResumenFeedback {
    id_resumen: number;
    id_feedback: number;
    texto_resumen: string;
  }
  
  
// Objetos
const feedback1: Feedback = {
    id_feedback: 1,
    id_grabacion: 101,
    claridad_score: 8.5,
    velocidad_palabras: 120,
    pausas: 5,
    recomendaciones: "Hablar más pausado"
  };
  
  const transcripcion1: Transcripcion = {
    id_transcripcion: 1,
    id_grabacion: 101,
    contenido: "Este es el contenido de la grabación...",
    calidad: "Alta"
  };

// Arreglos
const feedbacks: Feedback[] = [feedback1];

const errores: ErrorDetectado[] = [
  { id_error: 1, id_feedback: 1, tipo: "Gramatical", descripcion: "Error de concordancia" }
];

const emociones: EmocionDetectada[] = [
  { id_emocion: 1, id_feedback: 1, tipo: "Tristeza", intensidad: 0.7 }
];

//FUnciones
function crearFeedback(feedback: Feedback): void {
    feedbacks.push(feedback);
  }
  
  function mostrarFeedbacks(): void {
    feedbacks.forEach(fb => {
      console.log(`Feedback #${fb.id_feedback}: claridad ${fb.claridad_score}, recomendaciones: ${fb.recomendaciones}`);
    });
  }
  
// Spread y rest
// Spread para clonar
const copiaFeedbacks = [...feedbacks];

// Rest en función
function sumarPausas(...pausas: number[]): number {
  return pausas.reduce((total, valor) => total + valor, 0);
}

//Callback
function procesarFeedbacks(callback: (fb: Feedback) => void): void {
    feedbacks.forEach(callback);
  }
  
  // Ejemplo de uso:
  procesarFeedbacks(fb => console.log(`Procesando Feedback ${fb.id_feedback}`));

// Promesas
function obtenerResumenFeedback(id: number): Promise<ResumenFeedback> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          id_resumen: 1,
          id_feedback: id,
          texto_resumen: "Buen desempeño con oportunidades de mejora."
        });
      }, 2000);
    });
  }

    // Ejemplo de uso de la promesa
    obtenerResumenFeedback(1)
        .then(resumen => {
            console.log(`Resumen del Feedback ${resumen.id_feedback
            }: ${resumen.texto_resumen}`);
        })
        .catch(error => {
            console.error(`Error al obtener el resumen: ${error}`);
        });
//async/await
async function mostrarResumenFeedback(id: number): Promise<void> {
    const resumen = await obtenerResumenFeedback(id);
    console.log(`Resumen del Feedback ${id}: ${resumen.texto_resumen}`);
  }
  