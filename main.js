import { juan, miguelito, guillermo } from './data/students.js';


juan.publicarComentario("Muy buena clase profesor");
miguelito.publicarComentario("Excelente clase de Poo Ingeniero.");
guillermo.publicarComentario("Gracias por sus comentarios chicos.");

juan.approvedCourse({
  name: "Curso de Prueba",
  isFree: true
});

console.log(juan);
console.log(miguelito);
console.log(guillermo);




  

  