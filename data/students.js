import { StudentFree } from '../classes/studentsFree.js';
import { StudentBasic } from '../classes/studentsBasic.js';
import { Teacher } from '../classes/teacher.js';
import { escuelaWeb, escuelaData, escuelaVgs } from './learningPaths.js';


export const juan = new StudentFree({
    name: "JuanDaza",
    username: "juandz",
    email: "juanDaza2004@gmail.com",
    twitter: "dzayaian",
    learningPaths: [
      escuelaWeb,
      escuelaVgs,
    ],
  });
    
export const miguelito = new StudentBasic({
    name: "Alejandro",
    username: "mzea6356",
    email: "aljandrozea@gmail.com",
    instagram: "ale_zea",
    learningPaths: [
      escuelaWeb,
      escuelaData,
    ],
  });
  
  
export const guillermo = new Teacher({
    name: "guillermo",
    username: "guille1212",
    email: "guillermo@gmail.com",
    instagram: "gui_lle",
  });