
//CREAR UNA FUNCION QUE ME PERMITA DETERMINAR
// LA CALIFICACION DE 3 ALUMNOS
//UNO CON NOTA DE 100, OTRO CON NOTA 80
// Y EL ULTIMO CON NOTA DE 59

function calcularNota (nota){


let notaLetra = '';

if(nota>= 90) {
    notaLetra='A';
} else if (nota >= 80 ) {
    notaLetra= 'B';
} else if (nota >= 70 ) {
    notaLetra= 'C';
} else if (nota >= 60 ) {
    notaLetra= 'D';
} else {
    notaLetra= 'F';
}
console.log( nota +' es igual a ' + notaLetra);
}


calcularNota(100);
calcularNota(800);
calcularNota(59);

