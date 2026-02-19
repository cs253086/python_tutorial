def main():
    player_name = input("Name: ")
    move = input("Move (left/right/forward): ")

    if move == "left":
        print(player_name, "found treasure! +10 score")
    elif move == "right":
        print(player_name, "met a trap! -1 life")
    elif move == "forward":
        print(player_name, "found nothing. Keep going.")
    else:
        print("Invalid move. Try left, right, or forward.")


if __name__ == "__main__":
    main()
