import { Student } from "./students.js";

export class StudentFree extends Student {
    constructor(promps) {
      super(promps)
    }
  
    approvedCourse (newCourse) {
      if (newCourse.isFree) {
        this.approvedCourses.push(newCourse);
      } else {
        console.warm(`Lo sentimos ${this.name}, solo puedes recibir clases abiertas.`);
      };
    };
  };