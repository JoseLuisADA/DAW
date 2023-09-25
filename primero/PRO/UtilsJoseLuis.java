public class UtilsJoseLuis {
  
    public static String[][] ordenarArray(String[][] nombreArrayDeArrays, int atributoQueOrdena) {

        String[] ArrayDesplazado = new String[nombreArrayDeArrays[0].length];
        String[][] nombreArrayDeArraysOrdenado = new String[nombreArrayDeArrays.length][nombreArrayDeArrays[0].length];

        for (int ejeY = 0; ejeY < nombreArrayDeArrays.length; ejeY++) {
            for (int ejeX = 0; ejeX < nombreArrayDeArrays[0].length; ejeX++) {
                nombreArrayDeArraysOrdenado[ejeY][ejeX] = nombreArrayDeArrays[ejeY][ejeX];
            }
        }

        for (int vecesRecorridas = 0; vecesRecorridas < nombreArrayDeArrays.length; vecesRecorridas++) {
            for (int ejeY = vecesRecorridas; ejeY < nombreArrayDeArrays.length; ejeY++) {

                if (ejeY < nombreArrayDeArrays.length) {
                    if (Integer.parseInt(nombreArrayDeArraysOrdenado[vecesRecorridas][atributoQueOrdena]) < Integer
                            .parseInt(nombreArrayDeArraysOrdenado[ejeY][atributoQueOrdena])
                            && nombreArrayDeArraysOrdenado[vecesRecorridas] != nombreArrayDeArraysOrdenado[ejeY]) {

                        ArrayDesplazado = nombreArrayDeArraysOrdenado[vecesRecorridas];
                        nombreArrayDeArraysOrdenado[vecesRecorridas] = nombreArrayDeArraysOrdenado[ejeY];
                        nombreArrayDeArraysOrdenado[ejeY] = ArrayDesplazado;
                    }
                }
            }
        }
        return nombreArrayDeArraysOrdenado;
    }
}
