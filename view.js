export async function impirmeEnBtn (dataPaises , tipoPregunta, repuestaCorrecta , btn , conta){
   let bandera = dataPaises[repuestaCorrecta].flag;
    console.log(bandera)

    //si tipo de pregunta es 0 impreime bandera
    if (tipoPregunta == 0){ 
        pregunta.innerHTML=`<p style="font-size: 200%;"> ${bandera}<p style="font-size: 2rem;"> which country does this flag belong to?</p></p>`
    };
    if (tipoPregunta==1){
        /////////////preguntar por capitales
        pregunta.innerHTML=`capital of: ${dataPaises[repuestaCorrecta].name.official}`;
    };
    while (conta < 4 ){
        if(  dataPaises[conta].capital!=""){
            btn [conta].innerHTML=`${conta + 1} = ${ dataPaises[conta].capital}`;
        }else{
            btn [conta].innerHTML=`${conta + 1} = ${ dataPaises[conta].common}`;
        }  
        conta ++ ;
    };
};

/////// modulo view pinta de color verde y/o rojo

export function funcionBtn(indexBtn , repuestaCorrecta , btn , conta){
    conta = 0;
    if(indexBtn == repuestaCorrecta){
        btn[indexBtn].style.backgroundColor = "green";
    }
    if(indexBtn != repuestaCorrecta){
        btn[repuestaCorrecta].style.backgroundColor = "green";
        btn[indexBtn].style.backgroundColor = "red";
    }
    btn[4].disabled = false;
    if (btn[4].disabled == false){
        while (conta < 4){
            btn[conta].disabled = true;
            conta++;
        }
    };
};

export function funcionResultado (aciertos){   
    div.innerHTML = `<img src="./img/undraw_winners_ao2o 2.svg" width="25%" class="align-self-center" alt="no_imagen">
    <h1 id="fontResult" class="text-center fw-bolder">Results</h1>
    <span class="fw-semibold align-self-center">Yout got <span id="resultsN" class="fs-1 fw-bold">${aciertos}</span> correct answers</span>
    <button id='reitentar' class="btn btnColor col-6 fw-semibold align-self-center"> try again</button>`
}

export default{
    impirmeEnBtn,
    funcionBtn,
    funcionResultado,
};