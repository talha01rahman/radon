import java.util.*;

public class isPrime {
    static Scanner scn = new Scanner(System.in);

public static void main(String[] arg){
    int n = scn.nextInt();
    int count = 0;
    for(int i=2; i<n;i++){
        if(n%i!=0){
            count=count+1;
            if(count>2){
                System.out.println(n+" % "+i+" not prime ");
            }
        }
        
        else{
            System.out.println(n+" % "+i+"  prime ");
        }
    }
}
}
