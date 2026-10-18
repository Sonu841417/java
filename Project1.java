
import java.util.Scanner;
public class Project1 {
    static int sum(int a , int b){return a+b;}
    public static void main(String[]args){
        float num1 , num2;
        System.out.println("Enter first number");

        Scanner scan = new Scanner(System.in);
        num1 = scan.nextFloat();


        System.out.println("Enter second number");
        num2 = scan.nextFloat();
        System.out.print("Entered numbers are:");
        System.out.print(num1);
        System.out.print("and");
        System.out.print(num2);

        String message = "Enter 1 for addition,  2 for subtraction, 3 for multiplication and 4 for division";

        System.out.print(message);
        int value = scan.nextInt();

        switch(value){
            case 1:
                System.out.print("The result after addition of entered number is:");
                System.out.print(num1 + num2);
                break;

                case 2:
                    System.out.print("the result when second number is subtracted from first number is :");
                    System.out.print(num1 - num2);
                    break;

                  case 3:
                    System.out.print("The result after multiplication of entered number is:");
                    System.out.print(num1 * num2);
                    break;

                    case 4:
                        System.out.print("The result when first number is divided from second number is :" );
                        System.out.print(num1 / num2);
                        break;

                        default:
                            System.out.print("Invalid Input");
        }

    }
}
