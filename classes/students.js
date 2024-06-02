import { Comment } from "./comentario.js";

export class Student {
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = [],
      }) {
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
          twitter,
          instagram,
          facebook,
        };
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
      }
  
      publicarComentario (newComment) {
        const comment = new Comment({
          studentName : this.name,
          content : newComment
        });
        comment.publicar();
      }
    }