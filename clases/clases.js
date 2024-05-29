class Student {
    constructor(name, lastname, age, cursosAprobados) {
        this.name = name,
        this.lastname = lastname,
        this.age = age,
        this.cursosAprobados = cursosAprobados
    }

    AprobarCurso(nuevoCurso) {
        this.cursosAprobados.push(nuevoCurso)
    }
};
