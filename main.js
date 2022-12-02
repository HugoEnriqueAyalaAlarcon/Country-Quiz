import v from "./view.js";
import m from "./model.js";
const URL = "https://restcountries.com/v3.1/all"
let tipoPregunta;
let arrPaises = [];
let repuestaCorrecta;
let i = 0;
let dataPaises = []; ///guardamos los paises en el areglo
let numeroP = 0;
let aciertos = 0;
let btn  =document.querySelectorAll("button") 



/////control de botonos disable o anable
btn[4].disabled = true


funcionMain();
function funcionMain(){
    
tipoPregunta = m.ramdomNumero(2); // me da un numero 0 o 1

while(i < 4){ // rellena arrPaises[i] no numero aleatorios
    arrPaises[i] = m.ramdomNumero(249);
    i++;
};
i = 0;

//orden aleatorio de respuestas
repuestaCorrecta = m.ramdomNumero(4); //escojemos una resspuesta corecta 

m.getPaisesApi(URL , arrPaises , dataPaises);

setTimeout (() =>{
    console.log(dataPaises);
    v.impirmeEnBtn(dataPaises , tipoPregunta , repuestaCorrecta , btn , 0);
},300);

///botones
btn[0].onclick= () =>{
    v.funcionBtn(0 , repuestaCorrecta , btn , 0);
    if (repuestaCorrecta == 0){
        aciertos++;
    };
}
btn[1].onclick= () =>{
    v.funcionBtn(1 , repuestaCorrecta , btn , 0);
    if (repuestaCorrecta == 1){
        aciertos++;
    };
}
btn[2].onclick= () =>{
    v.funcionBtn(2 , repuestaCorrecta , btn , 0);
    if (repuestaCorrecta == 2){
        aciertos++;
    };
}
btn[3].onclick= () =>{
    v.funcionBtn(3 , repuestaCorrecta , btn , 0);
    if (repuestaCorrecta == 3){
        aciertos++;
    };
}
btn[4].onclick= () =>{
    btn[4].disabled = true;
    numeroP ++ ;
    if (numeroP < 10 ){
        funcionMain();
    } else{
        v.funcionResultado (aciertos);
        funcionBtnRerultado();
    }
    for(let i = 0; i < 4 ; i++){
        btn[i].style.backgroundColor=`rgba(255 , 255 , 255)`
        btn[i].disabled = false;
    };
};
};

function funcionBtnRerultado(){
    const btnReitentar = document.getElementById("reitentar")
    btnReitentar.onclick = () =>{
        location.reload();
    };
};

