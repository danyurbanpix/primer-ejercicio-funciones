function anterior (numero){
    return numero - 1;
}
function triple (numero2){
    return numero2*3;
}
function anteriorDelTriple (numero3){
    let elTriple= triple(numero3);
    let unoMenos=anterior(elTriple); 
    return unoMenos;
}
console.log(anteriorDelTriple(3));