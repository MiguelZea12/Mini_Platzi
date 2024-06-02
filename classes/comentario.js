export class Comment {
    constructor({
      content,
      studentName,
      studentRol = 'Estudiante',
    }){
      this.content = content,
      this.studentName = studentName,
      this.studentRol = studentRol,
      this.like = 0
    }
  
    publicar() {
      console.log(`${this.studentName} (${this.studentRol})\nLike: ${this.like}\ncontent: ${this.content}`);
    }
  };