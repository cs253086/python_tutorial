# Lesson 00: Install Python on Ubuntu

Welcome to your first Python mission.

In this lesson, you will:
- install Python on Ubuntu
- check that Python works
- run your first Python program

This lesson is for complete beginners. Go slowly and celebrate each step.

---

## 1) Open Terminal

Terminal is where we type commands.

On Ubuntu, press:
- `Ctrl + Alt + T`

You should see a window with text and a blinking cursor.

---

## 2) Update package list

Type this command, then press Enter:

```bash
sudo apt update
```

What it does:
- asks Ubuntu for the latest list of software versions

You may be asked for your password. This is normal.

---

## 3) Install Python

Type:

```bash
sudo apt install -y python3 python3-pip
```

What it installs:
- `python3`: Python language
- `python3-pip`: tool to install Python libraries later

---

## 4) Check Python version

Type:

```bash
python3 --version
```

Expected output looks like:

```text
Python 3.x.x
```

If you see a version, great job. Python is installed.

---

## 5) Run Python in interactive mode (REPL)

Type:

```bash
python3
```

You should see something like:

```text
>>>
```

Now type:

```python
print("Hello from Python!")
```

Press Enter. You should see the message printed.

To exit, type:

```python
exit()
```

---

## 6) Run your first Python file

Create a folder for your tutorial work:

```bash
mkdir -p ~/kids_python_tutorial/beginner/00_install_python_ubuntu
cd ~/kids_python_tutorial/beginner/00_install_python_ubuntu
```

Create a file named `hello.py` with this code:

```python
print("Hello, I am learning Python!")
print("My first mission is complete.")
```

Run it:

```bash
python3 hello.py
```

If you see two printed lines, your first Python file works.

---

## Common problems and fixes

### Problem: `python3: command not found`
Run install again:

```bash
sudo apt update
sudo apt install -y python3
```

### Problem: `Permission denied`
Do not run your Python file with `sudo`.
Use:

```bash
python3 hello.py
```

### Problem: typo in command
Read the error, correct spelling, and run again.
Errors are normal for programmers.

---

## New words

- **Terminal**: Text window for commands
- **Command**: Instruction typed in terminal
- **Python**: Programming language
- **REPL**: Interactive Python mode
- **Script**: Python file (like `hello.py`)

---

## Mission complete when...

- [ ] `python3 --version` works
- [ ] You opened Python REPL and used `print(...)`
- [ ] You ran `python3 hello.py`

Great start. Next lesson: printing and strings.
