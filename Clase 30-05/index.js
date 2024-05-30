//const arreglo=["uno","dos","tres"];

function unir(){
    let arreglo=["uno","dos","tres"];
    let text=arreglo.join("/");
    console.log(text);
};



function multiplicadordearreglo(numero){
    let arreglo2=[2,4,6,8,9];
    let respuesta=[];
    for (const numerito of arreglo2) {
        respuesta.push(numerito*numero);
    }
    console.log("["+respuesta.toString()+"]");
};