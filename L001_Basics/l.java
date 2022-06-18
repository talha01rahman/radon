import java.util.*;

public class l {
    
 public static Scanner scn = new Scanner(System.in);    
    public static void pattern_01(int n) {
        int nst = n-1, nsp = 1;
        for (int r = 1; r <= n; r++) {
            for (int cst = 1; cst <= nst; cst++)
                System.out.print("* ");

            for (int csp = 1; csp <= nsp; csp++)
                System.out.print("  ");
            System.out.println();
            nsp++;
            nst--;
        }
    }

    public static void pattern_02(int n) {
        int nst = (2*n)-1, nsp = 0;
        for (int r = 1; r <= n; r++) {
            for (int csp = 1; csp <= nsp; csp++)
                System.out.print("  ");

            for (int cst = 1; cst <= nst; cst++)
                System.out.print(" * ");

            System.out.println();
            nsp++;
            nst=nst-2;
        }
    }

    //     1 1 1 1 1 1 1 
    //       1 1 1 1 1 
    //         1 1 1 
    //           1 
        public static void pattern_03(int n) {
            int nst = (2*n)-1, nsp = 0;
            for (int r = 1; r <= n; r++) {
                int count = 1;
                for (int csp = 1; csp <= nsp; csp++)
                    System.out.print("  ");
    
                for (int cst = 1; cst <= nst; cst++)
                    System.out.print(count+" ");
    
                System.out.println();
                nsp++;
                nst=nst-2;
            }
        }
        // * * * * * * * 
        //   * * * * * 
        //     * * * 
        //       *
        public static void pattern_04(int n) {
            int nst = (2*n)-1, nsp = 0;
            int count = 1;
            for (int r = 1; r <= n; r++) {
                
                for (int csp = 1; csp <= nsp; csp++)
                    System.out.print("  ");
    
                for (int cst = 1; cst <= nst; cst++)
                    System.out.print( "* ");
    
                System.out.println();
                nsp++;
                nst=nst-2;
             //   count++;
            }
        }
        
        
        //        *          n=1  nsp=4 nst=1
        //       * *         n=2  nsp=3 nst=2
        //     * * * *       n=3  nsp=2 nst=3
        //   * * * * * *     n=4  nsp=1 nst=5
        // * * * * * * * *   n=5  nsp=0 nst=6
        public static void pattern_05(int n) {
            int nst = 1, nsp = n-1;
            //int count = 1;
            for (int r = 1; r <= n; r++) {
                
                for (int csp = 1; csp <= nsp; csp++)
                    System.out.print(" ");
    
                for (int cst = 1; cst <= nst; cst++)
                    System.out.print("* ");
    
                System.out.println();
                nsp--;
                nst++;
             //   count++;
            }
        }
        
        // *             *     n=1 nst=1 nsp=6 nst=1  4 2*n-1 
        // * *         * *     n=2 nst=2 nsp=4 nst=2  3
        // * * *     * * *     n=3 nst=3 nsp=2 nst=3  2 
        // * * * * * * * *     n=4 nst=4 nsp=0 nst=4  1
        public static void pattern_06(int n) {
            int nst = 1, nsp = (2*n)-2;
            //int count = 1;
            for (int r = 1; r <= n; r++) {
                
                for (int cst = 1; cst <= nst; cst++)
                    System.out.print("* ");

                for (int csp = 1; csp <= nsp; csp++)
                    System.out.print("  ");
    
                for (int cst = 1; cst <= nst; cst++)
                    System.out.print("* ");
    
                System.out.println();
                nsp=nsp-2;
                nst++;
             //   count++;
            }
        }
  
        //        *   n=4 nsp=3 nst=1   nsp= n-1  
         //     * *   n=3 nsp=2 nst=2   nst= 1
         //   * * *   n=2 nsp=1 nst=3
         // * * * *   n=1 nsp=0 nst=4
        public static void pattern_07(int n) {
            int nst = 1, nsp = n-1;
            //int count = 1;
            for (int r = 1; r <= n; r++) {
                
                for (int csp = 1; csp <= nsp; csp++)
                    System.out.print("  ");
    
                for (int cst = 1; cst <= nst; cst++)
                    System.out.print("* ");
    
                System.out.println();
                nsp--;
                nst++;
             //   count++;
            }
        }












    public static void main(String[] args) {
       int n = scn.nextInt();
       pattern_01(n);
    }
}

// * * * * * * *
//   * * * * *
//     * * *
//       *

// n=4  nst=7  nsp=0
// n=3  nst=5  nsp=1
// n=2  nst=3  nsp=2
// n=1  nst=1  nsp=3
