import java.util.Scanner;

public class Calculadora {
    
    public static void main(String[] args) {

        //VARIABLES DEL JUEGO

        int[][] numerosPartida = new int[3][3];
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

            //TURNO JUGADOR 1 Y COMPROBACIÓN DE LA JUGADA 
            totalCalculadora += turnoJugador1();

            //MOSTRAR EL TOTAL DE LA CALCULADORA Y COMPROBAR SI SE HA PASADO EL JUGADOR
            vidaJugador1 = comprobarTotalCalculadora(totalCalculadora);

            //TURNO JUGADOR 2 Y COMPROBACIÓN DE LA JUGADA
            
            totalCalculadora += turnoJugador2();

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

    public static boolean comprobarJugada(int numeroJugador, int[][] numerosPartida, int ejeY, int ejeX){
       
        boolean sigueLasReglas;

        if((numeroJugador > 9 || numeroJugador <= 0
            )){
            System.out.println("Ingrese un número acorde a las reglas");
             sigueLasReglas = false;
        } else {
            sigueLasReglas = true;
        }

        return sigueLasReglas;
    }

    public static int turnoJugador1(int[][] numerosPartida, int ejeY, int ejeX){
        boolean sigueLasReglas;
        int numeroJugador1;
        
        do{

            System.out.println("Turno Jugador 1:");
            numeroJugador1 = capturarNumJugador();

            sigueLasReglas = comprobarJugada(numeroJugador1, numerosPartida, ejeY, ejeX);

        }
        while(sigueLasReglas == false);

        añadirNumeroEnArray(numerosPartida, numeroJugador1, ejeY, ejeX);

        return numeroJugador1;
    }

    public static int turnoJugador2(int[][] numerosPartida, int ejeY, int ejeX){
        
        boolean sigueLasReglas;
        int numeroJugador2;
        
        do{

            System.out.println("Turno Jugador 2:");
            numeroJugador2 = capturarNumJugador();

            sigueLasReglas = comprobarJugada(numeroJugador2);

        }
        while(sigueLasReglas == false);

        añadirNumeroEnArray(numerosPartida, numeroJugador2, ejeY, ejeX);

        return numeroJugador2;
    }
    
    public static void anunciarGanador(boolean vidaJugador1, boolean vidaJugador2){
        if(vidaJugador1 == true){
            System.out.println("Ganador Jugador 1");
        } else if(vidaJugador2 == true){
            System.out.println("Ganador Jugador 2");
        }
    }

    public static void añadirNumeroEnArray(int[][] numerosPartida, int numeroJugador, int ejeY, int ejeX){
        numerosPartida[ejeY][ejeX] = numeroJugador;
    }
}
