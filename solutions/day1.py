def main():
    val = 50
    password = 0
    with open('../inputs/input1.txt') as text:
        for line in text:

            letter = ''.join([char for char in line if char.isalpha()])
            num = ''.join([char for char in line if char.isdigit()])
            num.strip()
            letter.strip()
            num = int(num)
            letter = str(letter.upper())
            # input(f"{val}")
            for _ in range(num):
                if letter == 'L': val = (val - 1) % 100
                elif letter == 'R': val = (val + 1) % 100
                if val == 0: password += 1 # Part 2 only; comment for part 1
            # Part 1 only; comment for part 2
            # if val == 0: password += 1
    print(password)

if __name__ == '__main__':
    main()

