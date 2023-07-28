#include "cal.h"

void prompt(void)
{
	printf("Welcome to my Number base converter calculator\n");
	sleep(1);
	printf("Number base conver 1.0\nLoading...............");
	sleep(3);
	printf("Succesfully Booted and Up!\nRunning ");
	sleep(2);
	printf("Please note, the converters available ");
	sleep(1);
	printf("for version 1.0 is ");
	sleep(1);
	printf("binary, octal and decimal\n");
	sleep(1);
	printf("\n");
}

void decimalToBinary(int decimal)
{
	int store = decimal;
	int binary[32];
	int i = 0;
	int j = 0;

	while (decimal > 0)
	{
		binary[i] = decimal % 2;
		decimal = decimal / 2;
		i++;
	}
	printf("%d to Binary: ", store);
	if (i == 0)
	{
		printf("0");
	}
	else
	{
		printf("%d to binary is ", store);
		for (j = (i - 1); j >= 0; j--)
		{
			printf("%d", binary[j]);
		}
	}
	printf("\n");
}

unsigned long int binaryToDecimal(const char *binary)
{
	unsigned long int result = 0;
	int i = 0;

		if (binary == NULL)
		return (0);

	for (i = 0; binary[i] != '\0'; binary++)
	{
		if ((binary[i] < 0) || (binary[i] > 1))
			return (0);

		result = 2 * result + (binary[i] - '0');

	}

	return (result);
}
