//objeto literal.

const Miguel = {
    name : 'Miguel',
    lastname : 'Zea',
    age : 20,
    cursoAprobados : [
        'Curso de Python',
        'Curso de Javascript',
        'Curso de Principios de visualizacion de datos'
    ],

    aprobarCurso(curso) {
        this.cursoAprobados.push(curso);
    },
};

Miguel.cursoAprobados.push('Curso Profesional de Scrum');

// Prototipo.

function Student (name, lastname, age, cursoAprobados) {
    this.name = name,
    this.lastname = lastname,
    this.age = age,
    this.cursoAprobados = cursoAprobados,
    this.AprobarCursos = function (cursoNuevo) {
        this.cursoAprobados.push(cursoNuevo);
    }
}

const juan = new Student (
    'Juan',
    'Daza',
    20,
    [
        'Curso de python',
        'curso de Javascript',
        'Curso de POO'
    ],
)

