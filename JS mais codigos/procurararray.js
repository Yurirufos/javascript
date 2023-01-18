
//  localizar intens dentro de uma array de referência usando .find e criando uma function para localizar 
const movies = [
 {id: 1, movieName: 'Dejavu'},
 {id: 2, movieName: 'Back to the Future'},
 {id: 3, movieName: 'The Matrix'}
]


console.log(movies.find(function (movie) {
 return movie.movieName == 'The Matrix'
}))

// forma mais simplificada de criar uma function com o return chamada de ARROW FUNCTION ( => ) ex:

console.log(movies.find(movie => movie.movieName == 'Back to the Future'))


