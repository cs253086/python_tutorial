def main():
    print("=== TREASURE HUNT ===")
    player_name = input("What is your name? ")
    print("Hello,", player_name)

    move = input("Choose your first move (left/right): ")
    print(player_name, "moves", move)

    lives = int(input("How many lives do you want? "))
    print("Starting lives:", lives)


if __name__ == "__main__":
    main()
