// Comentario.

class Comment {
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


function PlayVIdeo (id) {
  const urlClass = 'https://platzicursodeprogramacionorientadaaobjetoconjavascript/' + id;
  console.log('Se esta reproduciendo la clase desde la URL: ' +urlClass);
}

function StopVideo (id) {
  const urlclassStop = 'https://platzicursodeprogramacionorientadaaobjetoconjavascript/' + id;
  console.log('Se puso pausa a la reproduccion de la URL de: ' + urlclassStop) 
}

class VideoClass{
    constructor ({
      name,
      videoId
    }) {
      this.name = name,
      this.videoId = videoId
    }

    reproducion () {
      PlayVIdeo(this.videoId);
    }

    pause () {
      StopVideo(this.videoId);
    }
  }



// Clase de los cursos,
class Course {
    constructor({
      name,
      classes = [],
      isFree = false,
      lang = 'spanish'
    }) {
      this._name = name;
      this.classes = classes;
      this.isFree = isFree;
      this.lang = lang;
    }
  
    get name() {
      return this._name;
    }
  
    set name(nuevoNombrecito) {
      if (nuevoNombrecito === "Curso Malito de Programación Básica") {
        console.error("Web... no");
      } else {
        this._name = nuevoNombrecito; 
      }
    }
  }
  
const cursoProgBasica = new Course({
    name: "Curso Gratis de Programación Básica",
    isFree: true
  });
  
const cursoDefinitivoHTML = new Course({
  name: "Curso Definitivo de HTML y CSS",
  });
const cursoPracticoHTML = new Course({
  name: "Curso Practico de HTML y CSS",
  lang: 'english'
});
  
  
class LearningPath {
  constructor({
    name,
    courses = [],
  }) {
    this.name = name;
    this.courses = courses;
  }
}
  
const escuelaWeb = new LearningPath({
  name: "Escuela de Desarrollo Web",
  courses: [
    cursoProgBasica,
    cursoDefinitivoHTML,
    cursoPracticoHTML,
  ],
});
  
const escuelaData = new LearningPath({
  name: "Escuela de Data Science",
  courses: [
    cursoProgBasica,
    "Curso DataBusiness",
    "Curso Dataviz",
    ],
});
  
const escuelaVgs = new LearningPath({
  name: "Escuela de Vidweojuegos",
  courses: [
    cursoProgBasica,
    "Curso de Unity",
    "Curso de Unreal",
  ],
})
  
//Clase madre student.
class Student {
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


// Clase de Estudiante free
class StudentFree extends Student {
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

// Clase de Estudiante Basic
class StudentBasic extends Student {
  constructor(promps) {
    super(promps)
  }

  approvedCourse(newCourse) {
    if (newCourse.lang !== 'english') {
      this.approvedCourses.push(newCourse);
    } else {
      console.warn(`Lo sentimos ${this.name}, no puedes ver clases en ingles`);
    };
  };
};


// Clase de Estudiante Express
class StudentExpress extends Student {
  constructor(promps) {
    super(promps)
  }

  approvedCourse(newCourse) {
    this.approvedCourses.push(newCourse);
  };
};

// Clase de Profesor
class Teacher extends Student {
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
  
const juan = new StudentFree({
  name: "JuanDaza",
  username: "juandz",
  email: "juanDaza2004@gmail.com",
  twitter: "dzayaian",
  learningPaths: [
    escuelaWeb,
    escuelaVgs,
  ],
});
  
const miguelito = new StudentBasic({
  name: "Alejandro",
  username: "mzea6356",
  email: "aljandrozea@gmail.com",
  instagram: "ale_zea",
  learningPaths: [
    escuelaWeb,
    escuelaData,
  ],
});


const guillermo = new Teacher({
  name: "guillermo",
  username: "guille1212",
  email: "guillermo@gmail.com",
  instagram: "gui_lle",
});
  