/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 * DONE
 */
export function bookEndList(numbers: number[]): number[] {
    const firstAndLast = [];
    if (numbers.length === 0) {
        return [];
    }
    firstAndLast.push(numbers[0], numbers[numbers.length - 1]);
    return firstAndLast;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 * DONE
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((numbers: number): number => numbers * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 * DONE
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const digits = numbers.map((str) => {
        // if (isNaN(str)) {
        //     return 0;
        // } else {
        //     return Number(str);
        // }
        const x = Number(str);
        if (isNaN(x)) {
            return 0;
        } else {
            return x;
        }
    });
    return digits;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
//DONE
export const removeDollars = (amounts: string[]): number[] => {
    const digits = amounts.map((str) => {
        const newstr = str.replace("$", "");
        const x = Number(newstr);
        if (isNaN(x)) {
            return 0;
        } else {
            return x;
        }
    });
    return digits;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const shouting = messages
        .filter((messages: string): boolean => messages.endsWith("?"))
        .map((messages: string) =>
            messages.endsWith("!") ? messages.toUpperCase() : messages
        );

    return shouting;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 * DONE
 */
export function countShortWords(words: string[]): number {
    const shortWords = words.filter(
        (words: string): boolean => words.length < 4
    );
    const x = shortWords.length;
    return x;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length === 0) {
        return true;
    } else {
        const rgb = colors.every(
            (colors: string): boolean =>
                colors.includes("red") ||
                colors.includes("green") ||
                colors.includes("blue")
        );
        return rgb;
    }
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 * DONE
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        return "0=0";
    } else {
        const sum = addends.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0
        );
        const addition = addends.join("+");
        const newSum = sum.toString();
        const equals = newSum.concat("=");
        const equation = equals.concat(addition);
        return equation;
    }
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    if (values.every((values: number): boolean => values >= 0)) {
        const sum = values.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0
        );
        const final = [...values, sum];
        return final;
    } else {
        const firstNegative = values.findIndex(
            (values: number): boolean => values < 0
        );
        const values2 = [...values];
        const values3 = values2.slice(0, firstNegative);
        const sumOf = values3.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0
        );
        const valuesFinal = [...values];
        valuesFinal.splice(firstNegative + 1, 0, sumOf);
        return valuesFinal;
    }
}
