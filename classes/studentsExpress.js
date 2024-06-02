import { Student } from "./students";


export class StudentExpress extends Student {
    constructor(promps) {
      super(promps)
    }
  
    approvedCourse(newCourse) {
      this.approvedCourses.push(newCourse);
    };
  };