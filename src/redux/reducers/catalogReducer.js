
const initialState = {
    books: [
        {
            title: 'JavaScript. Шаблоны',
            authors: ['Стоян Стефанов'],
            publishingYear: 2011,
            isbn: '978-5-93286-208-7'
        },
        {
            title: 'JavaScript. Подробное руководство. 6-е издание',
            authors: ['Дэвид Флэнаган'],
            publishingYear: 2012,
            isbn: '978-5-93286-215-5'
        },
        {
            title: 'Чистый код: создание, анализ и рефакторинг',
            authors: ['Роберт Мартин'],
            publishingYear: 2013,
            isbn: '978-5-496-00487-9'
        }
    ]
}

const catalogReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default catalogReducer
