function isSimilar(arrX, arrY) {

    // Verificar si ambos argumentos son instancias de Map
    if (arrX instanceof Map && arrY instanceof Map) {
        if (arrX.size !== arrY.size) {
            return false;
        }
        for (let [key, value] of arrX) {
            if (!arrY.has(key) || !isSimilar(value, arrY.get(key))) {
                return false;
            }
        }
        return true;
    }
  
    // Verificar si ambos argumentos son instancias de Array
    if (Array.isArray(arrX) && Array.isArray(arrY)) {
        if (arrX.length !== arrY.length) {
            return false;
        }
        for (let i = 0; i < arrX.length; i++) {
            if (!isSimilar(arrX[i], arrY[i])) {
                return false;
            }
        }
        return true;
    }
  
    // Verificar si ambos argumentos son objetos
    if (typeof arrX === 'object' && arrX !== null && typeof arrY === 'object' && arrY !== null) {
        const keys1 = Object.keys(arrX);
        const keys2 = Object.keys(arrY);
  
        if (keys1.length !== keys2.length) {
            return false;
        }
  
        for (let key of keys1) {
            if (!keys2.includes(key) || !isSimilar(arrX[key], arrY[key])) {
                return false;
            }
        }
        return true;
    }
  
    // Para todos los otros casos, hacer una comparación simple
    return arrX === arrY;
}
