#include <stdio.h>
#include <stdlib.h>

/**
 * main - main function
 * Return: on success
 */

int main(void)
{
	int num1, num2, result;
	char operator;

	printf("Simple Calculator\n");
	printf("=================\n");

	printf("Enter the first number: ");
	scanf("%d", &num1);

	printf("Enter the operator (+, -, *, /): ");
	scanf(" %c", &operator);

	printf("Enter the second number: ");
	scanf("%d", &num2);

	switch (operator)
	{
	case '+':
		result = num1 + num2;
		break;
	case '-':
		result = num1 - num2;
		break;
	case '*':
		result = num1 * num2;
		break;
	case '/':
		if (num2 != 0)
		{
			result = num1 / num2;
		}
		else
		{
			printf("Error: Cannot divide by zero\n");
			exit(1);
		}
		break;
	default:
		printf("Invalid operator\n");
		exit(1);
		break;
	}
	printf("Result: %d\n", result);

	return (0);
}
