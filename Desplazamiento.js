function desplazamiento_descifrador(texto_cripto){
    Abecedario = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ"
    Abecedario = Abecedario.split('');

    texto_cripto = texto_cripto.replaceAll(" ","")
    texto_cripto_arreglo = texto_cripto.split('');

    textos_posibles = [];

    for(k = 0; k<=26; k++){
        ci = 0;
        texto_resuelto = '';
        for(i = 0; i < texto_cripto_arreglo.length; i++){
            for(j = 0; j < Abecedario.length;j++){
                if(texto_cripto_arreglo[i] == Abecedario[j]){
                    ci = j;
                    break;
                }
            }
            mi = Math.abs((ci+27-k)%27);
            // console.log(mi)
        
            texto_resuelto = texto_resuelto + Abecedario[mi];
        }

        textos_posibles.push(texto_resuelto);

    }

    // console.log("el texto descrifrado es ....")
    // console.log(textos_posibles);
    return textos_posibles;
}


function desplazamiento_cifrador(texto_cripto, b){
    Abecedario = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ"
    Abecedario = Abecedario.split('');

    texto_cripto = texto_cripto.replaceAll(" ","")
    texto_cripto_arreglo = texto_cripto.split('');

    mi = 0;
    texto_resuelto = '';
    for(i = 0; i < texto_cripto_arreglo.length; i++){
        for(j = 0; j < Abecedario.length;j++){
            if(texto_cripto_arreglo[i] == Abecedario[j]){
                mi = j;
                break;
            }
        }
        ci = (mi+b)%27;
        // console.log(mi)
    
        texto_resuelto = texto_resuelto + Abecedario[ci];
    }

    // console.log("el texto descrifrado es ....")
    // console.log(textos_posibles);
    return texto_resuelto;
}


// texto_cripto1 = "ÑDVHJXULGDGLPIRUODWLFDRVHJXULGDGGHWHFPRÑRJLDVGHÑDLPIRUODFLRPHVHÑDUHDGHÑDLPIRUODWLFDTXHVHHPIRFDHPÑDSURWHFFLRPGHÑDLPIUDHVWUXFWXUD";
// posibles = desplazamiento_descifrador(texto_cripto1);
// console.log(posibles);

// texto_cripto2 = "QBCYI QIQLD ZFMUD DFCUQ TCYIQ BQYCG UIVUS SYFDT UJLMY TQJYDFBQGU IVUSS YFDTU JLZLM UDKLT KQWFI U"
// posibles = desplazamiento_descifrador(texto_cripto2);
// console.log(posibles);

// texto_cripto3 = "Los hombres jovenes quieren ser fieles y no lo consiguen los hombres viejos quieren ser infieles y no lo logran";
// texto_cripto3 = texto_cripto3.toUpperCase();
// cifrado = desplazamiento_cifrador(texto_cripto3,15);
// console.log(cifrado);

// texto_cripto31 = "ZDHVDAPGSHXDKSBSHFJWSGSBHSGTWSZSHNBDZDQDBHWUJSBZDHVDAPGSHKWSXDHFJWSGSBHSGWBTWSZSHNBDZDZDUGOB";
// posibles = desplazamiento_descifrador(texto_cripto31);
// console.log(posibles);

// texto_cripto4 = "ÑDVHJ XULGD GLPIR UODWL FDHVX PDGLV FLSÑL PDTXH VHHPF DUJDG HSURW HJHUÑ DLPWH JULGD GBÑDS ULYDF LGDGG HÑDLP IRUOD FLRPD ÑODFH PDGDH PXPVL VWHOD LPIRU ODWLF R";
// posibles = desplazamiento_descifrador(texto_cripto4);
// console.log(posibles);

// texto_cripto5 = "PYWAE AUAEO PWUAH PYMDO PWMWW MXMPY WAEOP WHTPU ANDTW WMWMW GLHTÑ FADSG RA";
// posibles = desplazamiento_descifrador(texto_cripto5);
// console.log(posibles);

texto_cripto6 = "La gente joven esta convencida de que posee la verdad Desgraciadamente cuando logran imponerla ya ni son jovenes ni es verdad";
texto_cripto6 = texto_cripto6.toUpperCase();
cifrado = desplazamiento_cifrador(texto_cripto6,15);
console.log(cifrado);

// prueba = "ZOUSBISXDKSBSHIOQDBKSBQWRORSFJSEDHSSZOKSGRORRSHUGOQWOROASBISQJOBRDZDUGOBWAEDBSGZONOBWHDBXDKSBSHBWSHKSGROR";
// posibles = desplazamiento_descifrador(prueba);
// console.log(posibles);