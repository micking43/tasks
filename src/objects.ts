//import { typeImplementation } from "@testing-library/user-event/dist/type/typeImplementation";
//import { couldStartTrivia } from "typescript";
//These two imports are causing github not to build. I hope this doesn't break anything
import { Question, QuestionType } from "./interfaces/question";

/**
 * Create a new blank question with the given `id`, `name`, and `type. The `body` and
 * `expected` should be empty strings, the `options` should be an empty list, the `points`
 * should default to 1, and `published` should default to false.
 */
export function makeBlankQuestion(
    id: number,
    name: string,
    type: QuestionType
): Question {
    const newQuestion = {
        id: id,
        name: name,
        type: type,
        body: "",
        expected: "",
        options: [],
        points: 1,
        published: false
    };
    return newQuestion;
}

/**
 * Consumes a question and a potential `answer`, and returns whether or not
 * the `answer` is correct. You should check that the `answer` is equal to
 * the `expected`, ignoring capitalization and trimming any whitespace.
 *
 * HINT: Look up the `trim` and `toLowerCase` functions.
 * DONE
 */
export function isCorrect(question: Question, answer: string): boolean {
    const trimmedAnswer = answer.trim();
    const finalAnswer = trimmedAnswer.toLowerCase();
    const lowerExpected = question.expected.toLowerCase();
    if (finalAnswer === lowerExpected) {
        return true;
    } else {
        return false;
    }
}

/**
 * Consumes a question and a potential `answer`, and returns whether or not
 * the `answer` is valid (but not necessarily correct). For a `short_answer_question`,
 * any answer is valid. But for a `multiple_choice_question`, the `answer` must
 * be exactly one of the options.
 * DONE
 */
export function isValid(question: Question, answer: string): boolean {
    const final = question.options.some(
        (options: string): boolean => options === answer
    );
    if (question.type === "short_answer_question") {
        return true;
    }
    if (question.type === "multiple_choice_question") {
        if (final) {
            return true;
        }
    }
    return false;
}

/**
 * Consumes a question and produces a string representation combining the
 * `id` and first 10 characters of the `name`. The two strings should be
 * separated by ": ". So for example, the question with id 9 and the
 * name "My First Question" would become "9: My First Q".
 * DONE
 */
export function toShortForm(question: Question): string {
    const stringId = question.id.toString();
    const firstHalf = stringId.concat(": ");
    const firstTen = question.name.slice(0, 10);
    const stringFinal = firstHalf.concat(firstTen);
    return stringFinal;
}

/**
 * Consumes a question and returns a formatted string representation as follows:
 *  - The first line should be a hash sign, a space, and then the `name`
 *  - The second line should be the `body`
 *  - If the question is a `multiple_choice_question`, then the following lines
 *      need to show each option on its line, preceded by a dash and space.
 *
 * The example below might help, but don't include the border!
 * ----------Example-------------
 * |# Name                      |
 * |The body goes here!         |
 * |- Option 1                  |
 * |- Option 2                  |
 * |- Option 3                  |
 * ------------------------------
 * Check the unit tests for more examples of what this looks like!
 */
export function toMarkdown(question: Question): string {
    const optionsString = question.options.map(
        (options: string): string => "\n" + "- " + options
    );
    const optionsString2 = optionsString.join();
    const optionsString3 = optionsString2.replace(/,/g, "");
    const firstString = "# ";
    const nameString = firstString.concat(question.name);
    const bodyString = question.body;
    if (question.type === "multiple_choice_question") {
        const multiString = nameString.concat(
            "\n" + bodyString + optionsString3
        );
        return multiString;
    } else {
        const singleString = nameString.concat("\n" + bodyString);
        return singleString;
    }
}

/**
 * Return a new version of the given question, except the name should now be
 * `newName`.
 * DONE
 */
export function renameQuestion(question: Question, newName: string): Question {
    const newQuestion = { ...question, name: newName };
    return newQuestion;
}

/**
 * Return a new version of the given question, except the `published` field
 * should be inverted. If the question was not published, now it should be
 * published; if it was published, now it should be not published.
 * DONE
 */
export function publishQuestion(question: Question): Question {
    const notPublished = { ...question, published: false };
    const isPublished = { ...question, published: true };
    if (question.published === true) {
        return notPublished;
    } else {
        return isPublished;
    }
}

/**
 * Create a new question based on the old question, copying over its `body`, `type`,
 * `options`, `expected`, and `points` without changes. The `name` should be copied
 * over as "Copy of ORIGINAL NAME" (e.g., so "Question 1" would become "Copy of Question 1").
 * The `published` field should be reset to false.
 */
export function duplicateQuestion(id: number, oldQuestion: Question): Question {
    const partname = "Copy of ";
    const newname = partname.concat(oldQuestion.name);
    const newQuestion = {
        ...oldQuestion,
        id: id,
        name: newname,
        published: false
    };
    return newQuestion;
}

/**
 * Return a new version of the given question, with the `newOption` added to
 * the list of existing `options`. Remember that the new Question MUST have
 * its own separate copy of the `options` list, rather than the same reference
 * to the original question's list!
 * Check out the subsection about "Nested Fields" for more information.
 */
export function addOption(question: Question, newOption: string): Question {
    const newQuestion = {
        ...question,
        options: [...question.options, newOption]
    };
    return newQuestion;
}

/**
 * Consumes an id, name, and two questions, and produces a new question.
 * The new question will use the `body`, `type`, `options`, and `expected` of the
 * `contentQuestion`. The second question will provide the `points`.
 * The `published` status should be set to false.
 * Notice that the second Question is provided as just an object with a `points`
 * field; but the function call would be the same as if it were a `Question` type!
 */
export function mergeQuestion(
    id: number,
    name: string,
    contentQuestion: Question,
    { points }: { points: number }
): Question {
    const newQuestion = {
        ...contentQuestion,
        id: id,
        name: name,
        published: false,
        points: points
    };
    return newQuestion;
}
