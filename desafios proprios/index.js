// Baixo temos uma Factory, que são fabricas de objetos
function createBook(title, pages, author) {
  const book = {
    bookTitle: title,
    bookPages: pages,
    bookAuthor: author,
    printBook: function () {
      console.log("Printing...");
    },
  };
  return book;
}
const bookOne = createBook("Livro1", 320, "Author1");
const bookTwo = createBook("Livro2", 450, "Author2");
const bookThree = createBook("Livro3", 200, "Author3");

//  adicionar uma propriedade ao meu objeto :
// exemplo abaixo: escrever o nome da tag objeto ponto a propriedade nova e o valor dela ( bookOne.bookColor = 'White')

bookOne.bookOne = "White and Gold";

console.log(bookOne);
console.log(bookTwo);

// Constructor é um conceito de factory, de codigo mais simples exmeplo abaixo :

function criaLivro(titulo, paginas, autor) {
  this.tituloLivro = titulo;
  this.paginasLivro = paginas;
  this.autorLivro = autor;
}

let livroDois = new criaLivro("titulo2", "paginas2", "autor2");

console.log(livroDois);
// adicionando uma propriedade e os valores em um objeto dentro de uma constructor"
livroDois.cor = "Azul e Preto";
console.log(livroDois);


