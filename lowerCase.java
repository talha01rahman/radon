import java.util.*;

public class lowerCase {
    
    public static Scanner scn = new Scanner(System.in);

    public static void main(String[] args) {
        char ch = scn.next().charAt(0);
        System.out.println("my Character is: " + ch);
        if(ch >= 'a' && ch <= 'z')System.out.println("Character is lower case");
        else if(ch >= 'A' && ch <= 'Z')System.out.println("Character is upper case");
        else
        System.out.println("Invalid Input");

    }
}