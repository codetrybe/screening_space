#include "cal.h"

int main(void)
{
	char mode_1[10];
	char mode_2[10];
	prompt();

	printf("Conversion is from mode 1 to mode 2\n");

	printf("Format = "binary" or "decimal"\nEnter mode 1: ");

	scanf("%s", mode_1);
	printf("Mode 1 is %s\n", mode_1);


	return (0);
}

