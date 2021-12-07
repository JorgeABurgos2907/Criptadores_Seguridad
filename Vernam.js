Abecedario = "0123456789ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz"
Abecedario = Abecedario.split('');

Abecedario_binario = ["000000", "000001", "000010", "000011", "000100", "000101", "000110", "000111", "001000", "001001", "001010", "001011", "001100", "001101", "001110", "001111", "010000", "010001", "010010", "010011", "010100", "010101", "010110", "010111", "011000", "011001", "011010", "011011", "011100", "011101", "011110", "011111", "100000", "100001", "100010", "100011", "100100", "100101", "100110", "100111", "101000", "101001", "101010", "101011", "101100", "101101", "101110", "101111", "110000", "110001", "110010", "110011", "110100", "110101", "110110", "110111", "111000", "111001", "111010", "111011", "111100", "111101", "111110", "111111"];

// console.log(Abecedario_binario.length)
// console.log(Abecedario.length)

texto = "Alemania";
texto = texto.split('');

clave = "1pQw3F2m";
clave = clave.split('');

texto_binario = [];

for(i=0;i<texto.length;i++){

    for(k=0;k<=Abecedario.length;k++){

        if(texto[i] == Abecedario[k]){
            texto_binario.push(Abecedario_binario[k])
        }
    }
}

clave_binario = [];

for(i=0;i<clave.length;i++){

    for(k=0;k<=Abecedario.length;k++){

        if(clave[i] == Abecedario[k]){
            clave_binario.push(Abecedario_binario[k])
        }
    }
}

// console.log(texto_binario)
// console.log(clave_binario)


binario_resul = '';
cripto = [];

for(i=0;i<texto_binario.length;i++){

    texto_posi = texto_binario[i];
    texto_posi = texto_posi.split('');

    clave_posi = clave_binario[i];
    clave_posi = clave_posi.split('');

    for(k=0;k<texto_posi.length;k++){
        if(texto_posi[k] == clave_posi[k]){
            binario_resul = binario_resul + "0"
        } else {
            binario_resul = binario_resul + "1"
        }
    }

    cripto.push(binario_resul);
    binario_resul = '';
}

// console.log(cripto);

mensaje = [];

for(i=0;i<cripto.length;i++){

    for(k=0;k<Abecedario.length;k++){

        if(cripto[i] == Abecedario_binario[k]){
            mensaje.push(Abecedario[k])
        }

    }

}

console.log(mensaje.join(''))