//MI FORMA

function oddishOrEvenish(num) {
	
    let digitos = String(num).split('').map((digito) => {
        return Number(digito);
    });
    
    let numeroDigitosSumados = digitos.reduce((acc, elementoArray) => acc + elementoArray)
    
    if(numeroDigitosSumados % 2 === 0){
        return "Evenish"
    } else{
        return "Oddish"
    }
}

//FORMA PROFESOR

const oddishOrEvenish2 = num => String(num).split('').reduce((acc, item) => acc + parseInt(item), 0) % 2 === 0 ? 'Oddish': 'Evenish';


