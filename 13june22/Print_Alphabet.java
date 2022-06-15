import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Print_Alphabet {
    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        char Alphabet = scn.next().charAt(0);
        
        for(int i=1; i<=Alphabet;i++){
            System.out.println(i);
        }
}
}

