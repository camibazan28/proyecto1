
//si la nota se encuentra entre 90 a 100= a
// si la nota se encuentra entre 80 89 = b
//si la nota se encuentra entre 70 a 79= c
// si la nota se encuentra entre 60 69 = d
//si la nota es inferior a 60=f

let nota = 70;
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

