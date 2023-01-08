

function createBook(title, pages, author) {
  const book = {
    bookTitle: title,
    bookPages: pages,
    bookAuthor: author,
    printBook: function () {
      console.log("Printing...");
    },
  };
  return book
}
const bookOne = createBook('Livro1', 320 , 'Author1')
const bookTwo = createBook('Livro2', 450, 'Author2')
const bookThree = createBook('Livro3', 200, 'Author3')

console.log(bookTwo)