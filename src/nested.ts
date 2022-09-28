import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 * DONE
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    const publishedQ = questions.filter(
        (questions: Question): boolean => questions.published
    );
    return publishedQ;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    const notEmpty = questions.filter(
        (questions: Question): boolean =>
            !(questions.body === "") && !(questions.options.length === 0)
    );
    return notEmpty;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 * DONE
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    const findId = questions.find(
        (questions: Question): boolean => questions.id === id
    );
    if (findId != undefined) {
        return findId;
    } else {
        return null;
    }
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 * DONE
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    const removed = questions.filter(
        (questions: Question): boolean => !(questions.id === id)
    );
    return removed;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 * DONE
 */
export function getNames(questions: Question[]): string[] {
    const names = questions.map(
        (questions: Question): string => questions.name
    );
    return names;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 * DONE
 */
export function sumPoints(questions: Question[]): number {
    const allPoints = questions.reduce(
        (currentSum: number, questions: Question) =>
            currentSum + questions.points,
        0
    );
    return allPoints;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 * DONE
 */
export function sumPublishedPoints(questions: Question[]): number {
    const isPublish = questions.filter(
        (questions: Question): boolean => questions.published
    );
    const publishPoints = isPublish.reduce(
        (currentSum: number, isPublish: Question) =>
            currentSum + isPublish.points,
        0
    );
    return publishPoints;
}

/***
 * Consumes an array of questions, and produces a Comma-Separated Value (CSV) string representation.
 * A CSV is a type of file frequently used to share tabular data; we will use a single string
 * to represent the entire file. The first line of the file is the headers "id", "name", "options",
 * "points", and "published". The following line contains the value for each question, separated by
 * commas. For the `options` field, use the NUMBER of options.
 *
 * Here is an example of what this will look like (do not include the border).
 *`
id,name,options,points,published
1,Addition,0,1,true
2,Letters,0,1,false
5,Colors,3,1,true
9,Shapes,3,2,false
` *
 * Check the unit tests for more examples!
DONE
 */
export function toCSV(questions: Question[]): string {
    const questionCSV = questions
        .map(
            (questions: Question): string =>
                `${questions.id},${questions.name},${questions.options.length},${questions.points},${questions.published}`
        )
        .join("\n");
    const header = "id,name,options,points,published\n";
    const finalCSV = header + questionCSV;
    return finalCSV;
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 * DONE
 */
export function makeAnswers(questions: Question[]): Answer[] {
    const answer: Answer[] = questions.map(
        (questions: Question): Answer => ({
            questionId: questions.id,
            text: "",
            submitted: false,
            correct: false
        })
    );
    return answer;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 * DONE
 */
export function publishAll(questions: Question[]): Question[] {
    const allPublish = questions.map(
        (questions: Question): Question => ({ ...questions, published: true })
    );
    return allPublish;
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 * DONE
 */
export function sameType(questions: Question[]): boolean {
    if (questions.length === 0) {
        return true;
    }
    const x: QuestionType = questions[0].type;
    const checking = questions.every(
        (questions: Question): boolean => questions.type === x
    );
    return checking;
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 * DONE
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType
): Question[] {
    const newQuestions = [...questions];
    const blank = makeBlankQuestion(id, name, type);
    newQuestions.push(blank);
    return newQuestions;
}
//Didn't feel like figuring out import
//just wrote it again instead
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

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string
): Question[] {
    const newQuestion = [...questions];
    const indexOfId = newQuestion.findIndex(
        (questions: Question): boolean => questions.id === targetId
    );
    newQuestion[indexOfId].name = newName;
    return newQuestion;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `type` should now be the `newQuestionType`
 * AND if the `newQuestionType` is no longer "multiple_choice_question" than the `options`
 * must be set to an empty list.
 */
export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType
): Question[] {
    return [];
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 */
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string
): Question[] {
    return [];
}

/***
 * Consumes an array of questions, and produces a new array based on the original array.
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question. Use the `duplicateQuestion`
 * function you defined previously; the `newId` is the parameter to use for the duplicate's ID.
 * DONE
 */
export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number
): Question[] {
    const newQuestions = [...questions];
    const indexOfId = newQuestions.findIndex(
        (questions: Question): boolean => questions.id === targetId
    );
    const copy = duplicateQuestion(newId, questions[indexOfId]);
    newQuestions.splice(1 + indexOfId, 0, copy);
    return newQuestions;
}

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
