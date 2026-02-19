def main():
    inventory = ["torch", "rope"]
    print("Start inventory:", inventory)

    inventory.append("key")
    inventory[1] = "magic rope"

    print("Updated inventory:")
    for item in inventory:
        print("-", item)

    rooms = ["start", "empty", "trap", "treasure", "exit"]
    position = 0

    print("Current room:", rooms[position])
    position = position + 1
    print("Moved to:", rooms[position])
    position = position + 1
    print("Moved to:", rooms[position])


if __name__ == "__main__":
    main()
