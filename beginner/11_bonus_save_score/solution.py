import os


def load_high_score(path):
    if not os.path.exists(path):
        return 0

    with open(path, "r", encoding="utf-8") as file:
        content = file.read().strip()
    if content == "":
        return 0
    return int(content)


def save_high_score(path, score):
    with open(path, "w", encoding="utf-8") as file:
        file.write(str(score))


def main():
    score_file = "high_score.txt"
    current_score = int(input("Current score: "))
    high_score = load_high_score(score_file)

    if current_score > high_score:
        save_high_score(score_file, current_score)
        print("New high score saved:", current_score)
    else:
        print("High score stays:", high_score)


if __name__ == "__main__":
    main()
