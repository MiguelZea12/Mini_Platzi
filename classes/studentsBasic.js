import { Student } from "./students.js";

export class StudentBasic extends Student {
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