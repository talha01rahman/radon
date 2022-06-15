import java.util.*;

public class PrimeNumOptimal {
    static Scanner scn = new Scanner(System.in);

public static void main(String[] arg){
    int n = scn.nextInt();
    boolean flag = true;
    for(int i=2; i*i<n;i++){
        
        if(n%2==0){
            flag = false;
             break;           }
        }
        
        if(flag){
            System.out.println(n+" is a  even ");
        }
        else{
            System.out.println(n+" is not a prime ");
        }
    }
}

