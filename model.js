export function nombre (miNombre){
    console.log('minombre en model = ' , miNombre)
    return miNombre;
};

// funcion que debuelve 0 pregunta capital o 1 pregunta de bandera
function ramdomNumero (max) { 
    return Math.floor(Math.random() * max);
};

/*obtener los datos de los paises*/
async function getPaisesApi(URL , arrPaises , dataPaises){

    fetch (URL)
    .then(response => response.json())
    .then(data =>{
        for (const i in arrPaises) {
            dataPaises [i]= (data[arrPaises [i]]);
        };
        return dataPaises;
    });
} ; 

export default{
    nombre,
    ramdomNumero,
    getPaisesApi,
}
