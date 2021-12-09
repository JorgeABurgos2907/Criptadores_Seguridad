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
mensaje = mensaje.replaceAll("J","I")
mensaje = mensaje.replaceAll(" ","")
mensaje = mensaje.split('');

cadaDos = 0;
mensaDos = [];
resul = '';

for(i=0;i<mensaje.length;i++){

    resul = resul + mensaje[i]
    cadaDos = cadaDos + 1;

    if(mensaje[i]==mensaje[i+1]){

        if(cadaDos == 1){
            resul = resul + 'X'
            cadaDos = cadaDos + 1;
        }
        
    }

    if(cadaDos == 2){
        mensaDos.push(resul);
        cadaDos = 0;
        resul = '';
    }

    if(i == (mensaje.length-1) && cadaDos == 1 ){
        resul = resul + 'X'
        mensaDos.push(resul);
    }

}

console.log(mensaDos)
//cripto

texto_cripto = [];

for(i=0;i<mensaDos.length;i++){
    texto_posi = mensaDos[i];
    texto_posi = texto_posi.split('');

    i_pri = 0;
    j_pri = 0;

    i_segu = 0;
    j_segu = 0;

    m = 0;
    n = 0;

    resul = '';

    for(j=0;j<Abecedario_clave.length;j++){

        if(texto_posi[0] == Abecedario_clave[j]){
            i_pri = m;
            j_pri = n;
        }

        m = m + 1;
        if(m == 5){
            n = n + 1;
            m = 0
        }

    }

    m = 0;
    n = 0;

    for(j=0;j<Abecedario_clave.length;j++){


        if(texto_posi[1] == Abecedario_clave[j]){
            i_segu = m;
            j_segu = n;
        }

        m = m + 1;
        if(m == 5){
            n = n + 1;
            m = 0
        }
    }

    posi_uno = 0;
    posi_dos = 0;

    if(i_pri == i_segu){
        posi_uno = j_pri + 1;
        posi_dos = j_segu + 1;

        if(posi_uno>=5){
            posi_uno = 0;
        }
        if(posi_dos>=5){
            posi_dos = 0;
        }

        resul = matrix[posi_uno][i_pri] + matrix[posi_dos][i_segu]

    } else if(j_pri == j_segu){

        posi_uno = i_pri + 1;
        posi_dos = i_segu + 1;
        if(posi_uno>=5){
            posi_uno = 0;
        }
        if(posi_dos>=5){
            posi_dos = 0;
        }

        resul = matrix[j_pri][posi_uno] + matrix[j_segu][posi_dos]
    
    } else {

        resul = matrix[j_pri][i_segu] + matrix[j_segu][i_pri]

    }

    texto_cripto.push(resul);
    
}

console.log(texto_cripto)
