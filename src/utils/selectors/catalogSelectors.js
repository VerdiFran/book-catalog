export const getBooks = (state) => state.catalog.books.map(book => ({
    key: book.id,
    title: book.title,
    authors: book.authors,
    publishingYear: book.publishingYear,
    isbn: book.isbn
}))

export const getLoading = (state) => state.catalog.loading

export const getCurrentBookData = (state) => state.catalog.currentBookData

export const getCurrentBookIsSet = (state) => state.catalog.currentBookIsSet
