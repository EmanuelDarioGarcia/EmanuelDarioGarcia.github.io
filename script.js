//arreglo que contiene las respuestas correctas
let correctas = [3,2,2,1,2,2,2,3,3,1]; 
//arreglo donde se guardan las respuestas del usuario
let eleccion = [];
let cantidadCorrectas = 0;
//funcion que toma el numero de pregunta y el input seleccionado para esa pregunta
function respuesta(numPregunta, seleccionada){
    //Guardo Respuesta elegida
    eleccion[numPregunta] = seleccionada.value;
    //el siguiente codigo es  para poner en color blanco
    //el fondo de los inputs para cuando elige otra opcion
    //armo id para seleccionar la section correspondiente
    id= 'p'+ numPregunta;
    labels = document.getElementById(id).childNodes;
    labels[3].style.backroundColor = 'white';
    labels[5].style.backroundColor = 'white';
    labels[7].style.backroundColor = 'white';
    //doy color al label seleccionado
    seleccionada.parentNode.style.backroundColor = "#FAF7F0"
}
function corregir(){
    cantidadCorrectas = 0;
    for (i= 0 ; i < correctas.length;i++){
        if (correctas[i]==eleccion[i]){
            cantidadCorrectas++;
        }
    }
    document.getElementById('resultado').innerHTML = cantidadCorrectas
}