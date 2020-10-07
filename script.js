function contar(){

var tini = document.getElementById('tini')
var tfim = document.getElementById('tfim')
var tpula = document.getElementById('tpula')
var res = document.getElementById('res')
var ini = Number(tini.value)
var fim = Number(tfim.value)
var pula = Number(tpula.value)
res.innerHTML = ''
if ((tini.value) == ''|| (tfim.value) ==''){
res.innerHTML = ' <b>IMPOSSÍVEL CONTAR</b>'
}
else if (tpula.value == '' || pula == 0){
    alert('Não é possível contar de 0 em 0!')
}
else if (pula < 0){
    res.innerHTML = ' <b>IMPOSSÍVEL CONTAR</b>'
}
else{

    if(ini<=fim){
    do{res.innerHTML += ` ${ini} \u{27A1} `
    ini=ini+pula
    }while(ini<fim)
    }
    else if(ini>=fim){ 
     do{   res.innerHTML += ` ${ini} \u{27A1}`
        ini=ini-pula
     }while (ini>=fim)    
    }
 
    res.innerHTML += ' \u{1F3C1} '
}
}