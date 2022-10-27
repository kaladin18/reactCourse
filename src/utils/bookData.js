import { books } from '../Api/bookApi'

export const getBookData = () => {
    const bookData = books
    return bookData
}

export const filterBookByCategory = (data, category) => {
    return data.filter((book) => book.category.includes(category))
}

export const filterBookByState = (data, state) => {
    return data.filter((book) => book.condition === state)
}
export const filterBooks = (data, filter) => {
    if (!filter) {
        return data
    }
    return data.filter((book) => book.category.includes(filter) || book.condition === filter)
}
export const findBookByField = (data, field, value) => {
    return data.find((book) => book[field] === value)
}
export const searchBookByName = (data, name) => {
    return data.filter((book) => {
        const toLowerCase = name.toLowerCase()
        return book.category.toLowerCase().includes(toLowerCase)
    })
}
