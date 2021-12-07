let matrix = [
    [],
    [],
    [],
    [],
    []
];

// console.table(matrix);

Abecedario = "ABCDEFGHIKLMNOPQRSTUVWXYZ"
Abecedario = Abecedario.split('');

clave = "BEATLES"
clave = clave.split('');

Abecedario_clave= clave.concat(Abecedario);
dataArr = new Set(Abecedario_clave);
Abecedario_clave = [...dataArr];
// console.log(Abecedario_clave);

primeraPosi = 0;
segundaPosi = 0;

for(i=0;i<Abecedario_clave.length;i++){

    matrix[primeraPosi][segundaPosi] = Abecedario_clave[i]
    segundaPosi = segundaPosi + 1;
    if(segundaPosi>4){
        segundaPosi = 0;
        primeraPosi = primeraPosi + 1;
    }

}

console.table(matrix)

mensaje = "WITH A LITTLE HELP FROM MY FRIENDS";