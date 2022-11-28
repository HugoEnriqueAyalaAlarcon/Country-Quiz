import m from "./model.js"
//import v from "./view.js"


let i = 0;
let conta = 0 ;
let newPais = [];
let tipoPregunta = 0 ;
let respuestaCorrecta = 0;
let arrPaises =[];
let btn = document.querySelectorAll(".btn")
let pregunta = document.getElementById("pregunta")
let indexRespuesta = 0;
let aciertos = 0;
let numeroP = 0;
let div = document.getElementById("div")
/////control de botonos disable o anable
btn[4].disabled = true

//escojer cuadro paises y la respuesta coreccta
function escogePaises(){
    while(i < 4)
    {
        function pais(max) {
            return Math.floor(Math.random() * max);
        }
        newPais [i] = pais(249);
          i++
          respuestaCorrecta =  newPais [0]
    };
};

function paisesAlatorios (){
    //orden alateorio respuestas
    let arr =[newPais [0],newPais [1],newPais [2],newPais [3]];
    function getRamdom (limit) {
        return Math.floor(Math.random() *limit);
    };
    
    function sortRamdon (arr) {
    arrPaises = arr.sort(() => Math.random() - 0.5);
    return arrPaises;
    };
    sortRamdon(arr);
};

function impirmeEnBtn (pais , tipoPregunta){
    let tipoPreguntaTexto=pais.name.official;
    let bandera = pais.flag;
    if (indexRespuesta == conta){
        pregunta.innerHTML=`<p style="font-size: 100px;"> ${bandera}<p style="font-size: 2rem;"> which country does this flag belong to?</p></p>`
    };
    if (tipoPregunta==1){
        /////////////preguntar por capitales
        if (indexRespuesta == conta){
            pregunta.innerHTML=`capital of: ${pais.name.official}`;
        };
        tipoPreguntaTexto = pais.capital;
        if (tipoPreguntaTexto == "undefined"){
            tipoPreguntaTexto = pais.common;     
        };
    };
    btn [conta].innerHTML=`${conta + 1} = ${tipoPreguntaTexto}`;
    conta ++ ;
};

//////////cojer paises seun el arreglo "arrPaises" y llamar a
function getPaisesApi(arrPaises , i){
    const URL = "https://restcountries.com/v3.1/all"
    fetch (URL)
    .then(response => response.json())
    .then(data => pais (data[arrPaises [i]]));
   
    const pais = (data) => {
        impirmeEnBtn (data , tipoPregunta);
    } ; 
}

////// limpiar card e imprime resultado
function funcionResultado (){   
    div.innerHTML = `<img src="./img/undraw_winners_ao2o 2.svg" width="400px" class="align-self-center" alt="no_imagen">
    <h1 id="fontResult" class="text-center fw-bolder">Results</h1>
    <span class="fw-semibold align-self-center">Yout got <span id="resultsN" class="fs-1 fw-bold">${aciertos}</span> correct answers</span>
    <button id='reitentar' class="btn btnColor col-6 fw-semibold align-self-center"> try again</button>`
    funcionBtnRerultado( );
}
///////
function funcionBtn(indexBtn ,indexRespuesta  , conta){
    conta = 0;
    if(indexBtn == indexRespuesta){
        btn[indexBtn].style.backgroundColor = "green";
        aciertos++;
    }
    if(indexBtn != indexRespuesta){
        btn[indexRespuesta].style.backgroundColor = "green";
        btn[indexBtn].style.backgroundColor = "red";
    }
    btn[4].disabled = false;
    if (btn[4].disabled == false){
        while (conta < 4){
            btn[conta].disabled = true;
            conta++;
        }
    }
    return aciertos;
};


/////////////
funcionMain();
function funcionMain(){
    escogePaises();
    paisesAlatorios();
    tipoPregunta = m.funcionTipoPregunta (2);
    
    for (const i in arrPaises) {
       getPaisesApi(arrPaises , i);
    };
    i = 0;
    conta = 0;
    
    indexRespuesta = m.funcionindexRespuesta (4)
    
    ///botones
    btn[0].onclick= () =>{
        funcionBtn(0 , indexRespuesta);
    }
    btn[1].onclick= () =>{
        funcionBtn(1 , indexRespuesta);
    }
    btn[2].onclick= () =>{
        funcionBtn(2 , indexRespuesta);
    }
    btn[3].onclick= () =>{
        funcionBtn(3 , indexRespuesta);
    }
    btn[4].onclick= () =>{
        btn[4].disabled = true;
        console.log(aciertos);
        numeroP ++ ;
        numeroP < 10 ? funcionMain() :  funcionResultado ();
        for(let i = 0; i < 4 ; i++){
            btn[i].style.backgroundColor=`rgba(255 , 255 , 255)`
            btn[i].disabled = false;
        };
    };
}
function funcionBtnRerultado(){
    const btnReitentar = document.getElementById("reitentar")
    btnReitentar.onclick = () =>{
        i = 0;
        conta = 0;
        aciertos = 0;
        location.reload();
    }
}

 
  
  

