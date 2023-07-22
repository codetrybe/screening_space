#!/usr/bin/python3

""" DOC """
from random import randint


def validate_input(value):
    """DOC"""
    if type(value) is not int:
        print("Invalid input. please enter an integer")
        return -1

    if value < 0 or value > 4:
        print("Invalid choice. select option 1 - 4")
        return -1
    else:
        return 1


def assign_difficulty(num):
    """ DOC """
    attempts = 0
    rand_num = 0

    if num == 1:
        attempts = 10
        rand_num = randint(1, 50)
        return (attempts, rand_num)

    rand_num = randint(1, 100)
    if num == 2:
        attempts = 6
    elif num == 3:
        attempts = 4
    elif num == 4:
        attempts = 2

    return (attempts, rand_num)


def guess_number():
    """ DOC """
    difficulty_prompt = "select difficulty level:\n 1. Easy\t 2. Normal\t 3. Hard\t 4. Advance\t 5. Quit\n"
    print("feeling lucky?")
    print("great! lets play a game of luck.")

    while True:
        difficulty_level = int(input(difficulty_prompt))
        if difficulty_level == 5:
            return
        x = validate_input(difficulty_level)
        if x == -1:
            continue

        attempts, rand_num = assign_difficulty(difficulty_level)
        while attempts > 0:
            print(f"You have {attempts} attempts")
            guess = int(input("Guess the lucky number:\n"))
            if difficulty_level == 1 and guess not in range(1, 50):
                print("Invalid input. select number 1 - 50 for 'Easy level'")
                continue
            if difficulty_level > 1 and guess not in range(1, 100):
                print("Invalid input. select number 1 - 100")
                continue

            if guess > rand_num:
                print("Your guess is too high")
                attempts -= 1
                continue

            elif guess < rand_num:
                print("Your guess is too low")
                attempts -= 1
                continue

            elif guess == rand_num:
                print("Kudos! You won!!!")
                return

        print("You are out of guesses. Better luck next time!")
        response = int(input("Want to try again?\n 1. Retry\t 2. Quit\n "))
        x = validate_input(response)

        if response == 1:
            continue
        elif response == 2:
            exit()


guess_number()
