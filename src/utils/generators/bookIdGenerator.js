const letters = 'abcdefghijklmnopqrstuwxyz'

/**
 * Generator that return id for new books. For example, "e3"
 * @returns {Generator<string, void, *>}
 */
export function* bookIdGenerator() {
    let number = 1

    for (let letter of letters) {
        for (; number < 10; number++) {
            yield `${letter}${number}`
        }
    }
}