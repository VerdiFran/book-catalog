const letters = 'abcdefghijklmnopqrstuwxyz'

/**
 * Generator that return id for new users. For example, "ac14"
 * @returns {Generator<string, void, *>}
 */
export function* userIdGenerator() {
    let number1 = 1
    let number2 = 1

    for (let letter1 of letters) {
        for (let letter2 of letters) {
            for (; number1 < 10; number1++) {
                for (; number2 < 10; number2++) {
                    yield `${letter1}${letter2}${number1}${number2}`
                }
            }
        }
    }
}