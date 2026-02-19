def get_valid_action():
    while True:
        action = input("Type next or quit: ").strip().lower()
        if action in ["next", "quit"]:
            return action
        print("Please type only: next or quit")


def main():
    print("Welcome to Treasure Hunt!")
    score = 0

    for turn in range(1, 4):
        print()
        print("Turn", turn)
        action = get_valid_action()

        if action == "quit":
            print("You left the game early.")
            break

        score = score + 5
        print("Great move! Score:", score)

    print()
    print("Final score:", score)


if __name__ == "__main__":
    main()
