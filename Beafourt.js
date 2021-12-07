function Beaufort(texto_cripto,k){
    
    Abecedario = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ"
    Abecedario = Abecedario.split('');

    texto_cripto = texto_cripto.replaceAll(" ","")
    texto_cripto_arreglo = texto_cripto.split('');

    k = k.split('');
    temp = k;
    j = 0;

    for(i=0; i<texto_cripto_arreglo.length; i++){

        if(j<temp.length){
            k[i] = temp[j];
            j = j + 1;
        }else{
            j = 0;
            k[i] = temp[j];
            j = j + 1;
        }
    }

    // console.log(texto_cripto_arreglo.length)
    // console.log(texto_cripto_arreglo)
    // console.log(k.length);
    // console.log(k)

    mi = 0;
    texto_resuelto = '';
    ki = 0;

    for(i = 0; i < texto_cripto_arreglo.length; i++){
        for(j = 0; j < Abecedario.length;j++){
            if(texto_cripto_arreglo[i] == Abecedario[j]){
                mi = j;
                break;
            }
        }
        for(j = 0; j < Abecedario.length;j++){
            if(k[i] == Abecedario[j]){
                ki = j;
                break;
            }
        }
        
        ci = (ki - mi + 27)%27

        // console.log(mi)

        texto_resuelto = texto_resuelto + Abecedario[ci];
    }

    console.log("el texto cifrado es ....")
    console.log(texto_resuelto);

    
}

// TALLER A

// texto_cripto = "TSPDX TCPHM UZPUR SQNLG HOIMI DRUAA PGBÑZ EPPQL OUBLT DSIKP BIUZV YKOMI KEXEQ AADEE CYPDÑ TIKHT IOGAR IFCDQ VAÑTS KTWGO JQREC LEBEJ EEPBF RZICD YBSDV MPCZQ ZPOWG AQMIN CLFIL EOTEI QQTWE NCQLA TEUAD DÑDEZ MSDSA MLSKZ"
// k = "ESTUDIO"
// bea1 = Beaufort(texto_cripto,k)

// texto_cripto3 = "LAERGONOMIAESUNADISCIPLINAQUESEOCUPADEESTUDIARLAFORMAENQUEINTERACTUAELCUERPOHUMANOCONLOSARTEFACTOSYELEMENTOSQUELORODEANBUSCANDOQUEESAINTERACCIONSEALOMENOSAGRESIVAYTRAUMATICAPOSIBLE"
// k = "ESTUDIO"
// bea1 = Beaufort(texto_cripto3,k)


// TALLER B


// texto_cripto2 = "FAOOL VDSPI MJXHS ECAVW AOXNX OSVAU USXEM JWAIW OAMJS RUJÑG SVMYW WXIQN XOYGI YNWZA YSMXO IUAMÑ SRUJF PEPYS MHYNH JYMGX OMVWG ITJDH YQOKM WGGAA WJSQV J"
// k = "PASION"
// bea2 = Beaufort(texto_cripto2,k)

