const malla = {
  "Primer año": {
    "Semestre 1": [
      "Taller de Comunicación Oral y Escrita",
      "Matemática General",
      "Introducción a la Medicina Veterinaria",
      "Biología Celular",
      "Química"
    ],
    "Semestre 2": [
      "Inglés I",
      "Bioestadística",
      "Anatomía del canino",
      "Histoembriología",
      "Bioquímica"
    ]
  },
  "Segundo año": {
    "Semestre 3": [
      "Inglés II",
      "Medio Ambiente y Gestión Ambiental",
      "Anatomía Comparada",
      "Zoología",
      "Práctica Básica"
    ],
    "Semestre 4": [
      "Administración y Emprendimiento Veterinario",
      "Microbiología General y Veterinaria",
      "Fisiología Animal",
      "Enfermedades Parasitarias",
      "Genética"
    ]
  },
  "Tercer año": {
    "Semestre 5": [
      "Reproducción e Inseminación Artificial",
      "Inmunología",
      "Fisiopatología",
      "Etología y Bienestar Animal",
      "Tecnología de los Alimentos",
      "Nutrición y Alimentación Animal"
    ],
    "Semestre 6": [
      "Obstetricia y Ginecología",
      "Control de Calidad de los Alimentos",
      "Producción Avícola",
      "Farmacología y Toxicología",
      "Enfermedades Infecciosas",
      "Patología de Sistemas"
    ]
  },
  "Cuarto año": {
    "Semestre 7": [
      "Laboratorio Clínico",
      "Producción de Ovinos y Caprinos",
      "Producción Porcina",
      "Epidemiología Veterinaria",
      "Semiología",
      "Práctica Intermedia"
    ],
    "Semestre 8": [
      "Cirugía General",
      "Medicina de Animales Mayores",
      "Medicina de Caninos",
      "Medicina de felinos",
      "Medicina de Animales Exóticos"
    ]
  },
  "Quinto año": {
    "Semestre 9": [
      "Formulación y Evaluación de Proyectos Agropecuarios",
      "Producción Acuícola",
      "Producción de Bovinos de Carne y Leche",
      "Patología Quirúrgica",
      "Diagnóstico por imágenes",
      "Metodología de Investigación",
      "Práctica Final"
    ],
    "Semestre 10": [
      "Farmacología Aplicada",
      "Salud Pública",
      "Trabajo de titulación",
      "Clínica de Animales Menores",
      "Clínica de Animales Mayores"
    ]
  }
};

const contenedor = document.getElementById("malla");

for (const año in malla) {
  for (const semestre in malla[año]) {
    const bloque = document.createElement("div");
    bloque.classList.add("semestre");

    const titulo = document.createElement("h2");
    titulo.textContent = `${año} - ${semestre}`;
    bloque.appendChild(titulo);

    const listaRamos = document.createElement("div");
    listaRamos.classList.add("ramos");

    malla[año][semestre].forEach((ramo) => {
      const divRamo = document.createElement("div");
      divRamo.classList.add("ramo");
      divRamo.textContent = ramo;

      divRamo.addEventListener("click", () => {
        divRamo.classList.toggle("aprobado");
      });

      listaRamos.appendChild(divRamo);
    });

    bloque.appendChild(listaRamos);
    contenedor.appendChild(bloque);
  }
}
