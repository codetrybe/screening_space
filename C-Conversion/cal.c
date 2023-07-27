#include "cal.h"

int main(void)
{
	char mode_1[10];
	char mode_2[10];
	int decimal = 0;
	int check = 0;
	int binary = 0;

	prompt();

	printf("Conversion is from mode 1 to mode 2\n");

	printf("Format = \"binary\" or \"decimal\"\nEnter mode 1: ");

	scanf("%s", mode_1);
	printf("Mode 1 is %s\n", mode_1);

	if (strcmp(mode_1, "decimal") == 0)
	{
		printf("Enter decimal number: ");
		check = scanf("%i", &decimal);

		if (check == 1)
		{
			if (decimal > -1)
			{
				decimalToBinary(decimal);
			}
		}
		else
		{
			printf("Enter a valid digit > -1\n");
		}
	}

	if (strcmp(mode_1, "binary") == 0)
	{
		printf("Enter binary number: ");
		check = scanf("%i", &binary);

		if (check == 1)
		{
			if (decimal > -1)
			{
				decimalToBinary(decimal);
			}
		}
		else
		{
			printf("Enter a valid digit > -1\n");
		}
	}


	return (0);
}

