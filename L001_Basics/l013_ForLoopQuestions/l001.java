import java.util.*;

public class l001 {
    public static Scanner scn = new Scanner(System.in);
<<<<<<< HEAD
=======

>>>>>>> 1d2198da144558cb38f574fab572c9a246bd7903
    public static int power(int a, int b) {
        int ans = 1;
        for (int i = 1; i <= b; i++) {
            ans *= a;
        }

        return ans;
    }

<<<<<<< HEAD
    public static int fact(int n) {
        int ans = 1;
        while (n > 0) {
            ans *= n--;
        }

        return ans;

    }

    public static int ncr(int n, int r) {
        int a = fact(n);
        int b = fact(n - r);
        int c = fact(r);
    }


        public static int npr(int n,int r){
            int a = fact(n);
            int b = fact(n - r);
            int c = a/b;
            return c;
        }
=======
    public static int fact(int num) {
        int ans = 1;
        while (num > 0) {
            ans *= num--;
        }

        return ans;
    }

    public static int ncr(int n, int r) {
        int a = fact(n);
        int b = fact(n - r);
        int c = fact(r);

        return a / (b * c);

    }

    public static int npr(int n, int r) {
        int a = fact(n);
        int b = fact(n - r);

        return a / b;
>>>>>>> 1d2198da144558cb38f574fab572c9a246bd7903
    }


    

    public static void main(String[] args) {
<<<<<<< HEAD
          int n = scn.nextInt();
          int r = scn.nextInt();
          System.out.println(npr(n,r);) 
=======
        // int a = scn.nextInt();
        // int b = scn.nextInt();
        // int ans = power(a, b);
        // System.out.println("power(" + a + ", " + b + "): " + ans);

        // int n = scn.nextInt();
        // int r = scn.nextInt();
        // System.out.println("ncr: " + ncr(n, r));

        // n = scn.nextInt();
        // r = scn.nextInt();
        // System.out.println("npr: " + npr(n, r));

        int n = fact(7);
        System.out.println(n);
>>>>>>> 1d2198da144558cb38f574fab572c9a246bd7903
    }
