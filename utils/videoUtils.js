export function PlayVIdeo (id) {
    const urlClass = 'https://platzicursodeprogramacionorientadaaobjetoconjavascript/' + id;
    console.log('Se esta reproduciendo la clase desde la URL: ' +urlClass);
  }
  
export function StopVideo (id) {
    const urlclassStop = 'https://platzicursodeprogramacionorientadaaobjetoconjavascript/' + id;
    console.log('Se puso pausa a la reproduccion de la URL de: ' + urlclassStop) 
  }