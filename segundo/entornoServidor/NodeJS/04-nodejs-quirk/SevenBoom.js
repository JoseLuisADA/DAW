//MI FORMA
function sevenBoomLogic(sevenBoomArray){
    
    numBomba = sevenBoomArray.find((elementoArray) => String(elementoArray).includes("7"));
    
    if(numBomba === undefined){
        return "there is no 7 in the array";
    } else {
        return "Boom!"
    }
}


//FORMA DEL PROFESOR
const sevenBoom = arr => arr.join().includes('7') ? 'Boom' : 'There is no 7 in the array';