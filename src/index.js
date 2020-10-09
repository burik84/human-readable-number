module.exports = function toReadable(number) {
    const arrString = {
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
    };
    if (number === 0) {
        return "zero";
    } else {
        let arrToString = [];
        const arrNumber = number
            .toString()
            .split("")
            .map((num) => parseInt(num));
        if (arrNumber.length == 1) {
            for (let num in arrString) {
                if (num == number) arrToString.push(arrString[num]);
            }
        } else if (arrNumber.length == 2) {
            if (arrNumber[0] == 1) {
                for (let num in arrString) {
                    if (num == number) arrToString.push(arrString[num]);
                }
            } else if (arrNumber[1] == 0) {
                for (let num in arrString) {
                    if (num == number) arrToString.push(arrString[num]);
                }
            } else {
                for (let num in arrString) {
                    if (num == arrNumber[0] * 10)
                        arrToString.push(arrString[num]);
                    if (num == arrNumber[1]) arrToString.push(arrString[num]);
                }
            }
        } else if (arrNumber.length == 3) {
            arrToString.push("hundred");
            for (let num in arrString) {
                if (num == arrNumber[0]) arrToString.push(arrString[num]);
            }
            if (arrNumber[1] == 0) {
                for (let num in arrString) {
                    // if(num==arrNumber[0]) arrToString.push(arrString[num])
                    if (num == arrNumber[2])
                        arrToString.unshift(arrString[num]);
                }
            } else if (arrNumber[1] == 1) {
                const decimal = 10 + arrNumber[2];
                for (let num in arrString) {
                    if (num == decimal) arrToString.unshift(arrString[num]);
                }
            } else if (arrNumber[2] == 0) {
                const decimal = 10 * arrNumber[1];
                for (let num in arrString) {
                    if (num == decimal) arrToString.unshift(arrString[num]);
                }
            } else {
                for (let num in arrString) {
                    if (num == arrNumber[1] * 10)
                        arrToString.unshift(arrString[num]);
                }
                for (let num in arrString) {
                    if (num == arrNumber[2])
                        arrToString.unshift(arrString[num]);
                }
            }
        }
        const result = arrToString.reverse().join(" ");
        return result;
    }
};
