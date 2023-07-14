# Simple Calculator

This is a simple calculator program implemented in C. It allows you to perform basic arithmetic operations such as addition, subtraction, multiplication, and division.

## Compilation

To compile the calculator program, follow these steps:

1. Make sure you have a C compiler installed on your system, such as GCC.
2. Open a terminal or command prompt.
3. Navigate to the directory where you have saved the calculator program source code file (`calculator.c`).
4. Run the following command to compile the program:

```
   gcc -o calculator calculator.c
```
This command will compile the source code and generate an executable file named calculator.


## Usage

1. Run the program. ./calculator
2. The program will display a prompt asking you to enter the first number.
3. Enter the desired number and press enter.
4. The program will then prompt you to enter the operator. Valid operators are `+` (addition), `-` (subtraction), `*` (multiplication), and `/` (division).
5. Enter the operator and press enter.
6. Next, the program will ask you to enter the second number.
7. Enter the second number and press enter.
8. The program will calculate the result based on the entered numbers and operator.
9. Finally, the program will display the result.

**Note:** If you attempt to divide by zero, an error message will be shown, and the program will exit.

## Example

```
Simple Calculator
=================
Enter the first number: 10
Enter the operator (+, -, *, /): *
Enter the second number: 5
Result: 50
```


## Error Handling

- If you enter an invalid operator, the program will display an error message and exit.
- If you attempt to divide by zero, the program will display an error message and exit.

Feel free to use this simple calculator for basic arithmetic calculations.
