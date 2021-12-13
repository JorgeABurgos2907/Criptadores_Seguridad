function vigenere(texto_cripto,k,metodo){
    
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

    if(metodo == 1){

        ci = 0;
        texto_resuelto = '';
        ki = 0;

        for(i = 0; i < texto_cripto_arreglo.length; i++){
            for(j = 0; j < Abecedario.length;j++){
                if(texto_cripto_arreglo[i] == Abecedario[j]){
                    ci = j;
                    break;
                }
            }
            for(j = 0; j < Abecedario.length;j++){
                if(k[i] == Abecedario[j]){
                    ki = j;
                    break;
                }
            }
            
            mi = (ci - ki + 27)%27

            // console.log(mi)

            texto_resuelto = texto_resuelto + Abecedario[mi];
        }

        console.log("el texto descrifrado es ....")
        console.log(texto_resuelto);

    }else if (metodo == 2){

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
            
            ci = (mi + ki)%27

            // console.log(mi)

            texto_resuelto = texto_resuelto + Abecedario[ci];
        }

        console.log("el texto cifrado es ....")
        console.log(texto_resuelto);

    }

    
}

function vigenere_autoclave(texto_cripto,k,metodo){
    
    Abecedario = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ"
    Abecedario = Abecedario.split('');

    texto_cripto = texto_cripto.replaceAll(" ","")
    texto_cripto_arreglo = texto_cripto.split('');

    k = k.split('');
    temp = k.length;
    j = 0;

    if(metodo == 1){

        for(i = temp; i < texto_cripto_arreglo.length; i++){

            j = i - temp
            k[i] = texto_cripto_arreglo[j];
    
        }
    
        // console.log(texto_cripto_arreglo.length)
        // console.log(texto_cripto_arreglo)
        // console.log(k.length);
        // console.log(k)

        ci = 0;
        texto_resuelto = '';
        ki = 0;

        for(i = 0; i < texto_cripto_arreglo.length; i++){
            for(j = 0; j < Abecedario.length;j++){
                if(texto_cripto_arreglo[i] == Abecedario[j]){
                    ci = j;
                    break;
                }
            }
            for(j = 0; j < Abecedario.length;j++){
                if(k[i] == Abecedario[j]){
                    ki = j;
                    break;
                }
            }
            
            mi = (ci + ki)%27

            // console.log(mi)

            texto_resuelto = texto_resuelto + Abecedario[mi];
        }

        console.log("el texto crifrado es ....")
        console.log(texto_resuelto);

    }else if (metodo == 2){

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
            
            ci = (mi - ki + 27)%27

            // console.log(mi)

            texto_resuelto = texto_resuelto + Abecedario[ci];
            k.push(Abecedario[ci]);
            // console.log(k)
        }

        console.log("el texto descifrado es ....")
        console.log(texto_resuelto);

    }
    
}

// TALLER B

// texto_cripto = "GHVNW CDÑGT ZYCOV AXSPN RQLAM XRLLX XUKIV ZDYDT TNEWG IHQSU KJHOG YKPIC MVKER SFUDT TRPÑG SVQAV JTTYO UVIRY BYJIV LMLMT LTTÑR AVQPM JEYCE KVGBC ZJKBO CYÑJP ZQTAM TZSMP RCJCT HVNVP MVCTÑ YÑCRA HEDUE UHJMW ZP"
// k = "MURPHY"
// vigenere1 = vigenere(texto_cripto,k,1);

// texto_cripto1 = "UNEXPERTOESAQUELQUESABECADAVEZMASSOBREMENOSCOSASHASTAQUESABEABSOLUTAMENTETODOSOBRENADAESLAPERSONAQUEEVITALOSERRORESPEQUEÑOSMIENTRASSIGUESUAVANCEINEXORABLEHACIALAGRANFALACIA"
// k = "MURPHY"
// vigenere1 = vigenere(texto_cripto1,k,2);

// texto_cripto2 = "La Informatica Forense es una ciencia que mediante la aplicacion de una metodologia estructurada de investigacion se encarga de analizar diferentes medios de almacenamiento de datos informaticos con el fin de encontrar informacion que pudiera ser util en un proceso de investigacion o auditoria"
// texto_cripto2 = texto_cripto2.toUpperCase();
// k = "FORENSE"
// vigenere1 = vigenere_autoclave(texto_cripto2,k,1);

// texto_cripto = "POZQRHVWABUHOWARXUUEJHMQNUMIFWUASCIYGLIQHXPODIPXBGLCIEXLGUOIAQWSXBLAKBOHHEGAKTYKTUUFXCEVHSWMÑNXMHGAKEOKOEYEHQCNRQICERPIPMQEEWMXPVHUIWVPEÑTOUHQAWTEOXBDPLEGIHLQIOLASBUHDKÑOGMNTAORQIXHWZWVEEKBRIJMRKUTBIGERCRUUMEIYUCXZLWQMHJZZGQNBSVWOZWHWMÑNXMHGWGUFPIBGIU"
// k = "FORENSE"
// vigenere1 = vigenere_autoclave(texto_cripto,k,2);

// TALLER A

// texto_cripto = "SNXSX GRPPF RWTSP OFSKW AICPW TMCPB RRVNA ZEJGR EFPFN QREYX ETQVO ITUJB LASLQ HDEFR WXHDD AMMPN RREDM CWSNP NKUTB PÑOUG WODPD PPFHR YTMNQ SEMZI FFZGE RMOZG KASMU RTGDM IONDE ÑOURN RVYCP NP"
// k = "INFORMA"
// vigenere1 = vigenere(texto_cripto,k,1);

// texto_cripto2 = "Miro a mi alrededor veo que la tecnologia ha sobrepasado nuestra humanidad espero que algun dia nuestra humanidad sobrepase la tecnologia"
// texto_cripto2 = texto_cripto2.toUpperCase();
// k = "TECNOLOGIA"
// vigenere1 = vigenere_autoclave(texto_cripto2,k,1);

// texto_cripto3 = "FMTBOWWGSRPLVRODDEZIYHODIVXQDBJKSAAEUBPCSVISHDHBVVWJRSHXANHMVTUEZKPRBYXEDOYKQUWQHYEDZMNKCMNHMVTUSVVDECIVEÑSIFTQELHKSA"
// k = "TECNOLOGIA"
// vigenere1 = vigenere_autoclave(texto_cripto3,k,2);

// Parcial

texto_cripto = "PCLIK OHSGJ CXXDN VITTM ÑAUFM WCGAU WMMYJ UTBLT XDDGV CTXDS RLPFY UOUXZ XLXIG LMVJP OEXZE UDNCN WFCDD GÑUTÑ DQWX"
k = "ACTITUD"
vigenere1 = vigenere(texto_cripto,k,1)