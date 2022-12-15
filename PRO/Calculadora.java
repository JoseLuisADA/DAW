import java.util.Scanner;

public class Calculadora {
    
    public static void main(String[] args) {

        //VARIABLES DEL JUEGO

        int[][] numerosDisponibles = {
            {7,8,9},
            {6,5,4},
            {3,2,1}
        };

        int[][] numerosUsadosPartida = new int[3][3];


       int numeroJugador1 = 0;
       int numeroJugador2 = 0;

       int ejeY = 0;
       int ejeX = 0;


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

            //MECANISMO EJE Y, EJE X

            if(ejeX == 3){
                ejeX = 0;
                ejeY++;
            }

            //TURNO JUGADOR 1 Y COMPROBACIÓN DE LA JUGADA 
            
            numeroJugador1 = turnoJugador1(numerosUsadosPartida, numeroJugador2, ejeY, ejeX);
            ejeX++;

            totalCalculadora += numeroJugador1;

            //MOSTRAR EL TOTAL DE LA CALCULADORA Y COMPROBAR SI SE HA PASADO EL JUGADOR
            vidaJugador1 = comprobarTotalCalculadora(totalCalculadora);
            
            if(vidaJugador1 == false){
                break;
            }

            //MECANISMO EJE Y, EJE X

            if(ejeX == 3){
                ejeX = 0;
                ejeY++;
            }

            //TURNO JUGADOR 2 Y COMPROBACIÓN DE LA JUGADA

            numeroJugador2 = turnoJugador2(numerosUsadosPartida, numeroJugador1, ejeY, ejeX);
            ejeX++;

            totalCalculadora += numeroJugador2;

            //MOSTRAR EL TOTAL DE LA CALCULADORA Y COMPROBAR SI SE HA PASADO EL JUGADOR
            vidaJugador2 = comprobarTotalCalculadora(totalCalculadora);

            if(vidaJugador2 == false){
                break;
            }

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

    public static boolean comprobarJugada(int numeroJugador, int numeroOtroJugador, int[][] numerosUsadosPartida, int ejeY, int ejeX){
        
        //DE BASE CONFIAMOS EN QUE SIGUE LAS REGLAS Y LE DOY TRUE xD
        boolean sigueLasReglas = true;

        //COMPROBACIÓN DE SI EL NÚMERO ESTA COMPRENDIDO ENTRE EL 1 Y EL 9
        if((numeroJugador > 9 || numeroJugador <= 0)){

            sigueLasReglas = false;

        } else {
            sigueLasReglas = true;
        }

        //COMPROBACIÓN DE SI EL NÚMERO YA HA SIDO USADO
        for(int ejeY2 = 0; ejeY2 < numerosUsadosPartida.length; ejeY2++){
            for(int ejeX2 = 0; ejeX2 < numerosUsadosPartida.length; ejeX2++){
            
                if(numerosUsadosPartida[ejeY2][ejeX2] == numeroJugador && numeroJugador != 0){
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

    public static int turnoJugador1(int[][] numerosUsadosPartida, int numeroOtroJugador, int ejeY, int ejeX){
        
        boolean sigueLasReglas;
        int numeroJugador1;
        
        do{

            System.out.println("Turno Jugador 1:");
            numeroJugador1 = capturarNumJugador();

            sigueLasReglas = comprobarJugada(numeroJugador1, numeroOtroJugador, numerosUsadosPartida, ejeY, ejeX);

        }
        while(sigueLasReglas == false);

        numerosUsadosPartida[ejeY][ejeX] = numeroJugador1;

        return numeroJugador1;
    }

    public static int turnoJugador2(int[][] numerosUsadosPartida, int numeroOtroJugador, int ejeY, int ejeX){
        
        boolean sigueLasReglas;
        int numeroJugador2;
        
        do{

            System.out.println("Turno Jugador 2:");
            numeroJugador2 = capturarNumJugador();

            sigueLasReglas = comprobarJugada(numeroJugador2, numeroOtroJugador, numerosUsadosPartida, ejeY, ejeX);

        }
        while(sigueLasReglas == false);

        numerosUsadosPartida[ejeY][ejeX] = numeroJugador2;

        return numeroJugador2;
    }
    
    public static void anunciarGanador(boolean vidaJugador1, boolean vidaJugador2){
        if(vidaJugador1 == true){
            System.out.println("FIN DEL JUEGO:\n Ganador Jugador 1");
        } else if(vidaJugador2 == true){
            System.out.println("FIN DEL JUEGO:\n Ganador Jugador 2");
        }
    }

}
