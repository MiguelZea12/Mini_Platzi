import { Student } from "./students.js";
import { Comment } from "./comentario.js";

export class Teacher extends Student {
    constructor(promps) {
      super(promps)
    }
  
    approvedCourse(newCourse) {
      this.approvedCourses.push(newCourse);
    };
  
    publicarComentario (newComment) {
      const comment = new Comment({
        studentName : this.name,
        content : newComment,
        studentRol : 'Teacher',
      });
      comment.publicar();
    }
  };