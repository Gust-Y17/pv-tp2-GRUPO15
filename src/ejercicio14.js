let numero=[2,3,8,5];
const duplicar=(arreglo) =>{
    let result=[];
    for(let i=0; i<numero.length; i++){
        result.push(numero[i]*2)
    }
    return result;
}

console.log("los numeros duplicados son: "+ duplicar(numero));