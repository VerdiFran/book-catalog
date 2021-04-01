const letters = 'abcdefghijklmnopqrstuwxyz'

/**
 * Generator that return id for new books
 * @returns {Generator<string, void, *>}
 */
export function* bookIdGenerator() {
    let number = 1
    for (let letter of letters) {
        for (; ; number++) {
            yield `${letter}${number}`
        }
    }
}