def main():
    player_name = "Explorer"
    score = 0
    lives = 3

    print("Player:", player_name)
    print("Score:", score)
    print("Lives:", lives)

    score = score + 10
    lives = lives - 1

    print("After one turn:")
    print("Score:", score)
    print("Lives:", lives)


if __name__ == "__main__":
    main()
