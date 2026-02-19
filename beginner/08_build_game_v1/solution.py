def show_title():
    print("================================")
    print("      TREASURE HUNT v1")
    print("================================")


def handle_room(room, score, lives):
    if room == "start":
        print("You are at the start.")
    elif room == "empty":
        print("Empty room. Nothing happens.")
    elif room == "trap":
        print("Trap! You lose 1 life.")
        lives = lives - 1
    elif room == "treasure":
        print("Treasure found! +20 score.")
        score = score + 20
    elif room == "exit":
        print("You found the exit!")
    else:
        print("Unknown room.")

    return score, lives


def show_status(name, score, lives, room):
    print()
    print("Player:", name)
    print("Room:", room)
    print("Score:", score)
    print("Lives:", lives)
    print()


def main():
    show_title()

    player_name = input("Enter your explorer name: ")
    score = 0
    lives = 3
    rooms = ["start", "empty", "trap", "treasure", "exit"]
    position = 0

    while lives > 0 and position < len(rooms):
        current_room = rooms[position]
        show_status(player_name, score, lives, current_room)

        score, lives = handle_room(current_room, score, lives)

        if current_room == "exit":
            print("You win!")
            break

        if lives <= 0:
            print("No lives left. Game over.")
            break

        action = input("Type 'next' to move, or 'quit' to stop: ")
        if action == "next":
            position = position + 1
        elif action == "quit":
            print("You ended the game.")
            break
        else:
            print("Invalid action. Staying in current room.")

    print()
    print("Final score:", score)
    print("Thanks for playing!")


if __name__ == "__main__":
    main()
