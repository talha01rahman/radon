import java.util.*;

public class isPrime {
    static Scanner scn = new Scanner(System.in);

public static void main(String[] arg){
    int n = scn.nextInt();
    boolean flag = true;
    for(int i=2; i<n;i++){
        if(n%i==0){
            flag = false;
             break;           }
        }
        
        if(flag){
            System.out.println(n+" is a  prime ");
        }
        else{
            System.out.println(n+" is not a prime ");
        }
    }
}

