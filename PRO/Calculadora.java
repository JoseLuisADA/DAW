import java.util.Scanner;

public class Calculadora {
    
    public static void main(String[] args) {

        //VARIABLES DEL JUEGO

       int numeroJugador1 = 0;
       int numeroJugador2 = 0;

       int ejeY = 0;
       int ejeX = 0;

        int[][] numerosPartida = new int[3][3];

        boolean vidaJugador1 = true;
        boolean vidaJugador2 = true;
        
        int totalCalculadora = 0;

        //INICIO DEL JUEGO

        System.out.println(
            "-----------------------------\n" + 
            "TOTAL CALCULADORA:\n" +
            "-----------------------------\n" +  
            totalCalculadora +
            "\n-----------------------------");
        
        do{

            //ALGORITMO EJE Y, EJE X

            if(ejeX == 4){
                ejeX = 0;
                ejeY++;
            }

            //TURNO JUGADOR 1 Y COMPROBACIÓN DE LA JUGADA 
            
            numeroJugador1 = turnoJugador1(numerosPartida, numeroJugador2, ejeY, ejeX);
            ejeX++;

            totalCalculadora += numeroJugador1;

            //MOSTRAR EL TOTAL DE LA CALCULADORA Y COMPROBAR SI SE HA PASADO EL JUGADOR
            vidaJugador1 = comprobarTotalCalculadora(totalCalculadora);

            

            //TURNO JUGADOR 2 Y COMPROBACIÓN DE LA JUGADA

            numeroJugador2 = turnoJugador2(numerosPartida, numeroJugador1, ejeY, ejeX);
            ejeX++;

            totalCalculadora += numeroJugador2;

            //MOSTRAR EL TOTAL DE LA CALCULADORA Y COMPROBAR SI SE HA PASADO EL JUGADOR
            vidaJugador2 = comprobarTotalCalculadora(totalCalculadora);

        } while(vidaJugador1 == true && vidaJugador2 == true);
        
        //ANUNCIAR GANADOR
        anunciarGanador(vidaJugador1, vidaJugador2);

    }

    //ÓRGANOS DEL JUEGO xD

    public static int capturarNumJugador(){
        Scanner consola = new Scanner(System.in);
        int numeroJugador = consola.nextInt();
        return numeroJugador;
    }

    public static boolean comprobarTotalCalculadora(int total){  

        System.out.println(
        "-----------------------------\n" + 
        "TOTAL CALCULADORA:\n" +
        "-----------------------------\n" +  
        total +
        "\n-----------------------------");
        
        if(total >= 31){
            return false;
        } else {
            return true;
        }  
    }

    public static boolean comprobarJugada(int numeroJugador, int numeroOtroJugador, int[][] numerosPartida, int ejeY, int ejeX){
        
        //DE BASE CONFIAMOS EN QUE SIGUE LAS REGLAS Y LE DOY TRUE
        boolean sigueLasReglas = true;

        //COMPROBACIÓN DE SI EL NÚMERO ESTA COMPRENDIDO ENTRE EL 1 Y EL 9
        if((numeroJugador > 9 || numeroJugador <= 0)){

            sigueLasReglas = false;

        } else {
            sigueLasReglas = true;
        }

        //COMPROBACIÓN DE SI EL NÚMERO YA HA SIDO USADO
        for(int ejeY2 = 0; ejeY2 < numerosPartida.length; ejeY2++){
            for(int ejeX2 = 0; ejeX2 < numerosPartida.length; ejeX2++){
            
                if(numerosPartida[ejeY2][ejeX2] == numeroJugador && numeroJugador != 0){
                    sigueLasReglas = false;
                }
            }
        }

        //COMPROBACIÓN DE SI EL NÚMERO ELEGIDO ES DE SU MISMA FILA O COLUMNA

        if(numeroOtroJugador == 1){
            if(numeroJugador == 8 || numeroJugador == 9 || numeroJugador == 5 || numeroJugador == 6){
                sigueLasReglas = false;
            }
        } else if(numeroOtroJugador == 2){
            if(numeroJugador == 4 || numeroJugador == 7 || numeroJugador == 6 || numeroJugador == 9){
                sigueLasReglas = false;
            }
        } else if(numeroOtroJugador == 3){
            if(numeroJugador == 7 || numeroJugador == 8 || numeroJugador == 4 || numeroJugador == 5){
                sigueLasReglas = false;
            }
        } else if(numeroOtroJugador == 4){
            if(numeroJugador == 8 || numeroJugador == 9 || numeroJugador == 2 || numeroJugador == 3 ){
                sigueLasReglas = false;
            }
        } else if(numeroOtroJugador == 5){
            if(numeroJugador == 1 || numeroJugador == 3 || numeroJugador == 7 || numeroJugador == 9){
                sigueLasReglas = false;
            }
        } else if(numeroOtroJugador == 6){
            if(numeroJugador == 1 || numeroJugador == 2 || numeroJugador == 7 || numeroJugador == 8){
                sigueLasReglas = false;
            }
        } else if(numeroOtroJugador == 7){
            if(numeroJugador == 2 || numeroJugador == 3 || numeroJugador == 5 || numeroJugador == 6){
                sigueLasReglas = false;
            }
        } else if(numeroOtroJugador == 8){
            if(numeroJugador == 1 || numeroJugador == 4 || numeroJugador == 3 || numeroJugador == 6){
                sigueLasReglas = false;
            }
        } else if(numeroOtroJugador == 9){
            if(numeroJugador == 1 || numeroJugador == 2 || numeroJugador == 4 || numeroJugador == 5){
                sigueLasReglas = false;
            }
        }

        if(sigueLasReglas == false){
            System.out.println("Ingrese un número acorde a las reglas");
        }

        return sigueLasReglas;
    }

    public static int turnoJugador1(int[][] numerosPartida, int numeroOtroJugador, int ejeY, int ejeX){
        
        boolean sigueLasReglas;
        int numeroJugador1;
        
        do{

            System.out.println("Turno Jugador 1:");
            numeroJugador1 = capturarNumJugador();

            sigueLasReglas = comprobarJugada(numeroJugador1, numeroOtroJugador, numerosPartida, ejeY, ejeX);

        }
        while(sigueLasReglas == false);

        numerosPartida[ejeY][ejeX] = numeroJugador1;

        return numeroJugador1;
    }

    public static int turnoJugador2(int[][] numerosPartida, int numeroOtroJugador, int ejeY, int ejeX){
        
        boolean sigueLasReglas;
        int numeroJugador2;
        
        do{

            System.out.println("Turno Jugador 2:");
            numeroJugador2 = capturarNumJugador();

            sigueLasReglas = comprobarJugada(numeroJugador2, numeroOtroJugador, numerosPartida, ejeY, ejeX);

        }
        while(sigueLasReglas == false);

        numerosPartida[ejeY][ejeX] = numeroJugador2;

        return numeroJugador2;
    }
    
    public static void anunciarGanador(boolean vidaJugador1, boolean vidaJugador2){
        if(vidaJugador1 == true){
            System.out.println("Ganador Jugador 1");
        } else if(vidaJugador2 == true){
            System.out.println("Ganador Jugador 2");
        }
    }

}
