//MI FORMA
const MOVES = ["Shimmy", "Shake", "Pirouette", "Slide", "Box Step", "Headspin", "Dosado", "Pop", "Lock", "Arabesque"];


function danceConvert(pin) {

    if(!isNaN(pin) && !String(pin).includes("+") && !String(pin).includes(".") && !String(pin).includes("-") && String(pin).length > 3){

        return String(pin).split('').map((digito, index) => (parseInt(digito) + index)).map(digito => MOVES[digito%10]);
    } else {

        return "Invalid input.";
    }
}






    