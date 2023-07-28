#!/usr/bin/python3

from random import randint

DIFFICULTY_PROMPT = "Select difficulty level:\n1. Easy\t2. Normal\t3. Hard\t4. Advance\t5. Quit\n"


def get_input(prompt):
    """Prompt user for integer input."""
    while True:
        try:
            value = int(input(prompt))
            return value
        except ValueError:
            print("Invalid input. Please enter a valid integer.")
            print()


def validate_input(value):
    """Check if value is within a valid range."""
    if value < 1 or value > 5:
        print("Invalid input. Please enter a number between 1 and 5.")
        print()
        return False
    return True


def assign_difficulty(num):
    """Assign difficulty level for guess_number()."""
    attempts = 0
    rand_num = 0

    if num == 1:
        attempts = 10
        rand_num = randint(1, 50)
    else:
        rand_num = randint(1, 100)
        attempts = 10 - num * 2

    return (attempts, rand_num)


def guess_number():
    """Number guessing game"""
    print("Feeling lucky?")
    print("Great! Let's play a game of luck.")
    print()

    while True:
        difficulty_level = get_input(DIFFICULTY_PROMPT)

        if difficulty_level == 5:
            print("Thanks for playing!")
            return

        if not validate_input(difficulty_level):
            continue

        attempts, rand_num = assign_difficulty(difficulty_level)

        while attempts > 0:
            print(f"You have {attempts} attempts")
            guess = get_input("Guess the lucky number:\n")

            if (difficulty_level == 1 and guess not in range(1, 51)) or \
               (difficulty_level > 1 and guess not in range(1, 101)):
                print("Invalid input. Please select a valid number.")
                print()
                continue

            if guess > rand_num:
                print("Your guess is too high")
                print()
            elif guess < rand_num:
                print("Your guess is too low")
                print()
            else:
                print("Kudos! You win!!!")
                print()
                return

            attempts -= 1

        print("You are out of guesses. Better luck next time!")
        print()
        response = get_input("Want to try again?\n1. Retry\t2. Quit\n")

        if not validate_input(response):
            continue

        if response == 2:
            print("Thanks for playing!")
            return


guess_number()
