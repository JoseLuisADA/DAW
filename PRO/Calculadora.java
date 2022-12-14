import java.util.Scanner;

public class Calculadora {
    
    public static void main(String[] args) {

        //VARIABLES DEL JUEGO

        Scanner consola = new Scanner(System.in);
        
        boolean vidaJugador1 = true;
        boolean vidaJugador2 = true;
        
        int numeroJugador1;
        int numeroJugador2;

        int total = 0;

        //INICIO DEL JUEGO

        System.out.println(total);
        
        do{

            //TURNO JUGADOR 1 Y COMPROBACIÓN DE LA JUGADA
            total += turnoJugador1();
            
            System.out.println(total);

            if(total >= 31){
                vidaJugador1 = false;
                break;
            }

            //TURNO JUGADOR 2 Y COMPROBACIÓN DE LA JUGADA
            total += turnoJugador2();

            if(total >= 31){
                vidaJugador2 = false;
                break;
            }

        } while(vidaJugador1 == true && vidaJugador2 == true);
        
        //COMPROBACIÓN GANADOR

        if(vidaJugador1 == true){
            System.out.println("Ganador Jugador 1");
        } else if(vidaJugador2 == true){
            System.out.println("Ganador Jugador 2");
        }
        

    }

    public static int comprobarJugada(int numeroJugador){
        
        if(numeroJugador > 9 || numeroJugador <= 0){
            System.out.println("Ingrese un número acorde a las reglas");
            numeroJugador = 0;
            turnoJugador1();
        }

        return numeroJugador;
    }

    public static int turnoJugador1(){
        
        Scanner consola = new Scanner(System.in);
        
        System.out.println("Turno Jugador 1:");
        int numeroJugador1 = consola.nextInt();
        
        comprobarJugada(numeroJugador1);

        return numeroJugador1;
       
    }

    public static int turnoJugador2(){
        
        Scanner consola = new Scanner(System.in);

        System.out.println("Turno Jugador 2:");
        int numeroJugador2 = consola.nextInt();
        
        comprobarJugada(numeroJugador2);

        return numeroJugador2;
    }

    

}
