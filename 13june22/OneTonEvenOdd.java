import java.util.*;

public class OneTonEvenOdd {
    
    public static Scanner scn = new Scanner(System.in);

    public static void main(String[] args) {
        int n = scn.nextInt();
      
    for(int i =1; i<=n;i++){
        
        if(i%2!=0){
          System.out.println("Even : "+i);
        }
        else{
          System.out.println("Odd :"+i);
        }
    }
    
    }
}