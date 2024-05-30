export class Course {
    constructor({
      name,
      classes = [],
    }) {
      this._name = ''; // Inicializa la propiedad privada _name como una cadena vacía
      this.name = name; // Llama al setter de name para validar y actualizar el valor de _name
      this.classes = classes; // Inicializa la propiedad classes con un valor opcional
    }
  
    get name() {
      return this._name; // Devuelve el valor actual de _name
    }
  
    set name(newName) {
      if (typeof newName === 'string') { // Comprueba si newName es un string válido
        newName = newName.trim(); // Elimina los espacios en blanco al inicio y al final del string
        if (newName !== '') { // Comprueba si el string resultante no es vacío
          this._name = newName.split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' '); 
        }
      }
      // Si newName no es un string válido o es un string vacío, no se modifica el valor de _name
    }
  }