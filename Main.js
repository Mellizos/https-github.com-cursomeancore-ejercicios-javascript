/* 
Ejercicio 3: escribe un programa que declare dos objetos: { x: 1, y: 2, z: 3 } y { a: 1, y: 2, z: 1 }. Acontinuación, comprueba qué nombres de propiedades son coincidentes y cuáles son tambiéncoincidentes en valor.
*/

// creación de un objeto vacío
// const alejandro = {};

// agregando un método nuevo
// alejandro.saludar = () => {
// console.log('Hola');
//};


const objeto1 = { 
  x: 1, 
  y: 2, 
  z: 3 
};

const objeto2 = { 
  a: 1, 
  y: 2, 
  z: 1 
};


for (const key1 in objeto1) {

  //console.log(`objeto1 posee la propiedad ${key1}´);

  for (const key2 in objeto2) {

    // La propiedad existe en los dos objetos
    if (key1 === key2) {
      console.log(`La propiedad ${key1} existe en los dos objetos`);

      // La propiedad existe en los dos objetos y tiene el mismo valor
      //const value1 = objeto1[key1];
      //const value2 = objeto1[key2];
      //console.log(value1);
      //console.log(value2);
      if (objeto[key1] === objeto2[key2]) {
        console.log(`La propiedad ${key1} tiene el mismo valor para los dos objetos: ${objeto1[key1]}`);
      }
    }
  }
}



