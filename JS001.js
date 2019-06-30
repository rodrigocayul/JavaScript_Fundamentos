console.log("Hola Mundo");

var arreglo = [];

arreglo.push("Brasil");
arreglo.push("Argentina");
arreglo.push("Chile");
arreglo.push("Peru");

console.log(arreglo);

var objeto = {};
objeto.nombre = "Jugador 1";
objeto.edad = 25;
objeto.posicion = "Delantero";

console.log(objeto);

var listado = [];

listado.push([arreglo[0],objeto]);
listado.push(["Argentina",{nombre:"Lio",edad:33,posicion:"Mediocampo"}]);
listado.push(["Chile",{nombre:"Vidal",edad:33,posicion:"Mediocampo"}]);

console.log(listado);
