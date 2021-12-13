function obtenerInverso(a, b) {
    const suma = b;
    a = +a;
    b = +b;
    if (a !== a || b !== b) {
        return [NaN, NaN, NaN];
    }

    if (a === Infinity || a === -Infinity || b === Infinity || b === -Infinity) {
        return [Infinity, Infinity, Infinity];
    }
    // Checks if a or b are decimals
    if ((a % 1 !== 0) || (b % 1 !== 0)) {
        return false;
    }
    var signX = (a < 0) ? -1 : 1,
        signY = (b < 0) ? -1 : 1,
        x = 0,
        y = 1,
        u = 1,
        v = 0,
        q, r, m, n;
    a = Math.abs(a);
    b = Math.abs(b);

    while (a !== 0) {
        q = Math.floor(b / a);
        r = b % a;
        m = x - u * q;
        n = y - v * q;
        b = a;
        a = r;
        x = u;
        y = v;
        u = m;
        v = n;
    }

    let retorno = signX * x;
    if(retorno < 0){
        retorno = retorno + suma;
    }

    return retorno;
}


function sustitucion(texto_cripto,opc,metodo){
    Abecedario = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ"
    Abecedario = Abecedario.split('');

    texto_cripto = texto_cripto.replaceAll(" ","")
    texto_cripto_arreglo = texto_cripto.split('');

    repeticiones = [];
    for (i = 0; i <= 26; i++) {
        contador = 0;
        for(j = 0; j <= texto_cripto_arreglo.length-1; j++){
            if(Abecedario[i] == texto_cripto_arreglo[j]){
                contador = contador + 1;
            }
        }
        repeticiones.push(contador);
     }
    
     console.log(repeticiones)
    
    var mayor = 0;
    var mayorPosicion = 0;
    var segundo = 0;
    var segundoPosicion = 0;
     
    for(i = 0; i < repeticiones.length; i++){
        if (repeticiones[i] > mayor)
        {
            mayorPosicion = i
            mayor = repeticiones[i];
        }
    }
    
    for(i = 0; i < repeticiones.length; i++){
        if (repeticiones[i] < repeticiones[mayorPosicion]  && repeticiones[i] > segundo)
        {
            segundoPosicion = i
            segundo = repeticiones[i];
        }
    }
    
    console.log("La letra que mas se repite es...");
    console.log(Abecedario[mayorPosicion]);
    console.log("con una cantidad de veces de..");
    console.log(mayor);
    
    
    console.log("La segunda letra que mas se repite es...");
    console.log(Abecedario[segundoPosicion]);
    console.log("con una cantidad de veces de..");
    console.log(segundo);

    if(opc == 1){
        b = mayorPosicion%27;
        console.log('el valor de b es...')
        console.log(b)
        a = Math.abs(((segundoPosicion-b)*obtenerInverso(4,27))%27);
        console.log('el valor de a es ...')
        console.log(a)
    } else if (opc == 2){
        b = segundoPosicion%27;
        console.log('el valor de b es...')
        console.log(b)
        a = Math.abs(((mayorPosicion-b)*obtenerInverso(4,27))%27);
        console.log('el valor de a es ...')
        console.log(a)
    }

    if(metodo == 1){
        // a = 16;
        // b = 2;
        ci = 0;
        texto_resuelto = '';
        
        for(i = 0; i < texto_cripto_arreglo.length; i++){
            for(j = 0; j < Abecedario.length;j++){
                if(texto_cripto_arreglo[i] == Abecedario[j]){
                    ci = j;
                    break;
                }
            }
            mi = Math.abs(((ci-b+27)*obtenerInverso(a,27))%27);
            // console.log(mi)
        
            texto_resuelto = texto_resuelto + Abecedario[mi];
        }
        texto_resuelto = b.toString()+ " " + texto_resuelto;
        console.log("el texto descrifrado es ....")
        console.log(texto_resuelto);

    } else if(metodo == 2){
        
        textos_resueltos = [];

        for(b=0;b<27;b++){
            ci = 0;
            texto_resuelto = '';
            for(i = 0; i < texto_cripto_arreglo.length; i++){
                for(j = 0; j < Abecedario.length;j++){
                    if(texto_cripto_arreglo[i] == Abecedario[j]){
                        ci = j;
                        break;
                    }
                }
                mi = Math.abs(((ci-b+27)*obtenerInverso(a,27))%27);
                // console.log(mi)
            
                texto_resuelto = texto_resuelto + Abecedario[mi];
            }
            texto_resuelto = b.toString()+ " " + texto_resuelto;
            textos_resueltos.push(texto_resuelto);
        }
        console.log("los posibles textos cifrados son ....")
        console.log(textos_resueltos);
    }
    else if(metodo == 3) {
        mi = 0;
        a = 16;
        b = 2;
        texto_encriptado = '';
        
        for(i = 0; i < texto_cripto_arreglo.length; i++){
            for(j = 0; j < Abecedario.length;j++){
                if(texto_cripto_arreglo[i] == Abecedario[j]){
                    mi = j;
                    break;
                }
            }
            ci = Math.abs(((a*mi)+b)%27);
            // console.log(mi)
        
            texto_encriptado = texto_encriptado + Abecedario[ci];
        }
        texto_resuelto = a.toString()+ ' ' + b.toString()+ " " + texto_encriptado;
        console.log("el texto descrifrado es ....")
        console.log(texto_resuelto);
    }
    
    return texto_resuelto;
}

function nuevo_abecedario(b,a){
    Abecedario = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ"
    Abecedario = Abecedario.split('');

    nuevo_abecedario = '';
    for(j = 0; j < Abecedario.length;j++){
        mi = Math.abs(((j-b+27)*obtenerInverso(a,27))%27);
        nuevo_abecedario = nuevo_abecedario + Abecedario[mi]
    }
    
    console.log("abecedario")
    console.log(Abecedario.join(''))
    console.log("nuevo abecedario")
    console.log(nuevo_abecedario)

    return nuevo_abecedario;
}

// texto_cripto = "JFWFG DSWHM HWOCA FRPQG DGWSC AGWGO KGOHK GOGWW FYCOO HZGÑF WZGKG OGWBF MFDKF SCOSC OKFWB CPQGD HGOKG GBFBI FCQOF AHDKC WHFNF OKFDK HSFPQ GZGBG HKGDQ GVCDF ÑGOCD CKFBX GYSWG GWBCP QGOQO SFNQG";
// susti1 = sustitucion(texto_cripto,1,1);

// texto_cripto = "JFWFG DSWHM HWOCA FRPQG DGWSC AGWGO KGOHK GOGWW FYCOO HZGÑF WZGKG OGWBF MFDKF SCOSC OKFWB CPQGD HGOKG GBFBI FCQOF AHDKC WHFNF OKFDK HSFPQ GZGBG HKGDQ GVCDF ÑGOCD CKFBX GYSWG GWBCP QGOQO SFNQG";
// susti1 = sustitucion(texto_cripto,2,1);
// nuevo_abc = nuevo_abecedario(5,7);

// texto_cripto2 = "RFBQH CWBÑF ZBQÑU IHBQV UVAUQ BBSAF LQIRU IÑUVB WÑUIS VUIVU SJUÑU ABÑUR IÑUSC USWBR UVCCV RFQCV RIFRB VWCSW BJIVB WBABQ SIVUL FBYJI GIAUL IVULF BYBJW CJCQU SGUSU AC"
// susti2 = sustitucion(texto_cripto2,1,2);
// nuevo_abc2 = nuevo_abecedario(8,5);

// texto_cripto3 = "PARAESCRIBIRNOHAYQUESERCOHERENTENITENERRAZONNIDEJARDETENERLABASTACONCONTARLOQUESIENTEELALMAOUNAHISTORIAFANTASTICAQUEDELEITESUEÑOSAJENOSOTALVEZCREERLOQUENUNCAFUE";
// susti3 = sustitucion(texto_cripto3,1,3);

// texto_cripto31 = "XENEJUTNÑMÑNAPGEOFKJUJNTPGJNJACJAÑCJAJNNEWPAAÑBJVENBJCJAJNLEMEUCETPATPACENLPFKJUÑJACJJLELSEPKAEGÑUCPNÑEQEACEUCÑTEFKJBJLJÑCJUKJIPUEVJAPUPCELRJWTNJJNLPFKJAKATEQKJ";
// susti4 = sustitucion(texto_cripto31,2,1);
// nuevo_abc2 = nuevo_abecedario(4,8);

// PARCIAL

texto_cripto5 = "ÑUCYC HCUYM RÑJHC MIYTC MTVUB ZTFCH VZUHZ FZMPJ ZBYSC TMÑYV PVNCW ZDMTJ VZUMJ WMPJV JYMFC ZOMTC YVDZP CVUBT CMJYT ÑHYÑT CMUPC TMWTZ ÑYMTJ XHZUY TCBÑM QZJ"
susti2 = sustitucion(texto_cripto5,1,1);
nuevo_abc2 = nuevo_abecedario(2,16);