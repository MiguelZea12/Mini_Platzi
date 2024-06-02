import { juan, miguelito, guillermo } from './data/students.js';


juan.publicarComentario("Este es un comentario de Juan");
miguelito.publicarComentario("Este es un comentario de Miguelito");
guillermo.publicarComentario("Este es un comentario de Guillermo");

juan.approvedCourse({
  name: "Curso de Prueba",
  isFree: true
});

console.log(juan);
console.log(miguelito);
console.log(guillermo);




  

  