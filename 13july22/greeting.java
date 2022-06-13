//import java.util.Scanner;
import java.util.*;

public class greeting {
    public static Scanner scn = new Scanner(System.in);

    public static void main(String[] args){
        int time = scn.nextInt();
        if(time >= 0 && time < 12)
        System.out.println("good morning");
        else if(time >=12 && time <=16)
        System.out.println("good afternoon");
        else if(time >16 && time <=20)
        System.out.println("good evening");
        else if(time > 20 && time <= 24)
            System.out.println("good night");
        else{
            System.out.println("Invalid time format input");
        }
    }
}
