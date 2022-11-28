// funcion que debuelve 0 pregunta capital o 1 pregunta de bandera
export function funcionTipoPregunta (max) { 
    return Math.floor(Math.random() * max);
};

// escoje la respuesta alatoriamente
export function funcionindexRespuesta (max) { 
    return Math.floor(Math.random() * max);
};


export default{
    funcionTipoPregunta,
    funcionindexRespuesta,
}