import * as Yup from 'yup'

/**
 * Validate ISBN of book in 10-digit and 13-digit formats
 * @function
 * @param {string} value ISBN
 * @returns {boolean}
 */
export function checkIsbn(value) {
    if (!value) return false

    const digits = value.match(/\d/g)
    const controlDigit = +digits[digits.length - 1]

    if (/^97([89])/.test(value) && digits.length === 13) {
        const controlSum = digits.slice(0, 12).reduce((sum, digit, index) =>
            (index + 1) % 2 !== 0 ? sum + +digit : sum + +digit * 3, 0)

        const mod = 10 - controlSum % 10
        const calcControlDigit = mod !== 10 ? mod : 0

        return controlDigit === calcControlDigit
    } else if (digits.length === 10) {
        const controlSum = digits.slice(0, 9).reduce((sum, digit, index) =>
            sum + digit * (10 - index), 0)

        const calcControlDigit = 11 - controlSum % 11

        return controlDigit === calcControlDigit
    } else return false
}

Yup.addMethod(Yup.string, 'isValidIsbn', function (ref, message) {
    return this.matches(/(97[89])?([\s-])?\d{1,5}\2?\d{1,7}\2?\d{1,6}\2?\d/i, 'Неправильный ISBN.')
        .test({
            name: 'checkIsbn',
            exclusive: false,
            message: message || 'Неправильный ISBN.',
            params: {reference: ref ? ref.path : undefined},
            test: function (value) {
                return checkIsbn(value)
            }
        })
})