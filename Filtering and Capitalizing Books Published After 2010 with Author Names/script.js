const books = [
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        year: 1925
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        year: 2011
    },
    {
        title: "1984",
        author: "George Orwell",
        year: 1949
    },
    {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        year: 2012
    },
    {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        year: 1813
    }
];
const filteredBooks = books.filter((book) => book.year >= 2010);
const newBooks = filteredBooks.map((book) => {
    return {
        title: book.title,
        author: book.author.toUpperCase(),
        year: book.year
    };
});
console.log(newBooks);