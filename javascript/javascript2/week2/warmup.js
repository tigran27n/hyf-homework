// 1.1 Doubling of number

let numbers = [1, 2, 3, 4];
let newNumbers = numbers
.filter(num => num % 2 !== 0)
.map(num => num * 2);

console.log("The doubled numbers are", newNumbers); // [2, 6]

// 1.2 Working with movies

const movies = [
    {"title": "'71","year": 2014,"rating": 7.2,"votes": 41702,"running_times": 5940 },{"title": "'A' gai wak","year": 1983,"rating": 7.4,"votes": 11942,"running_times": 6300},{"title": "'Breaker' Morant","year": 1980,"rating": 7.9,"votes": 10702,"running_times": 6420},{"title": "'Crocodile' Dundee II","year": 1988,"rating": 5.5,"votes": 47180,"running_times": 6480},{"title": "(500) Days of Summer","year": 2009,"rating": 7.7,"votes": 412368,"running_times": 5700},{"title": "*batteries not included","year": 1987,"rating": 6.6,"votes": 25636,"running_times": 6360},{"title": "...E tu vivrai nel terrore! L'aldilà","year": 1981,"rating": 6.9,"votes": 16484,"running_times": 5220},{"title": "...and justice for all.","year": 1979,"rating": 7.4,"votes": 25408,"running_times": 7140},{"title": "10","year": 1979,"rating": 6,"votes": 13152,"running_times": 7320},{"title": "10 Cloverfield Lane","year": 2016,"rating": 7.2,"votes": 216151,"running_times": 6240},{"title": "10 Items or Less","year": 2006,"rating": 6.7,"votes": 13342,"running_times": 4920},{"title": "10 Things I Hate About You","year": 1999,"rating": 7.2,"votes": 247070,"running_times": 5820},{"title": "10 Years","year": 2011,"rating": 6.1,"votes": 20790,"running_times": 6000},{"title": "10,000 BC","year": 2008,"rating": 5.1,"votes": 114750,"running_times": 6540},{"title": "100 Feet","year": 2008,"rating": 5.5,"votes": 10979,"running_times": 6240},{"title": "100 Girls","year": 2000,"rating": 5.9,"votes": 19232,"running_times": 5640},{"title": "101 Dalmatians","year": 1996,"rating": 5.7,"votes": 83245,"running_times": 6180},{"title": "102 Dalmatians","year": 2000,"rating": 4.9,"votes": 28927,"running_times": 6000},{"title": "11-11-11","year": 2011,"rating": 4,"votes": 11425,"running_times": 5400},{"title": "11:14","year": 2003,"rating": 7.2,"votes": 40149,"running_times": 5700},{"title": "12 Angry Men","year": 1957,"rating": 8.9,"votes": 518449,"running_times": 5760},{"title": "12 Rounds","year": 2009,"rating": 5.6,"votes": 24457,"running_times": 6480},{"title": "12 Years a Slave","year": 2013,"rating": 8.1,"votes": 513047,"running_times": 8040},{"title": "127 Hours","year": 2010,"rating": 7.6,"votes": 302809,"running_times": 5640},{"title": "13","year": 2010,"rating": 6.1,"votes": 36623,"running_times": 5460},{"title": "13 Going on 30","year": 2004,"rating": 6.1,"votes": 134434,"running_times": 5880},{"title": "13 Hours","year": 2016,"rating": 7.3,"votes": 85771,"running_times": 8640},{"title": "13 Sins","year": 2014,"rating": 6.3,"votes": 26738,"running_times": 5580},{"title": "13th","year": 2016,"rating": 8.2,"votes": 15188,"running_times": 6000},{"title": "1408","year": 2007,"rating": 6.8,"votes": 228738,"running_times": 6840},{"title": "1492: Conquest of Paradise","year": 1992,"rating": 6.5,"votes": 24439,"running_times": 9240},{"title": "15 Minutes","year": 2001,"rating": 6.1,"votes": 44647,"running_times": 7200},{"title": "16 Blocks","year": 2006,"rating": 6.6,"votes": 117443,"running_times": 6600},{"title": "17 Again","year": 2009,"rating": 6.4,"votes": 156663,"running_times": 6120},{"title": "1922","year": 2017,"rating": 6.4,"votes": 15416,"running_times": 6120},{"title": "1941","year": 1979,"rating": 5.9,"votes": 27172,"running_times": 8760},{"title": "2 Days in New York","year": 2012,"rating": 6,"votes": 12766,"running_times": 5760},{"title": "2 Days in Paris","year": 2007,"rating": 6.8,"votes": 28106,"running_times": 5760},{"title": "2 Days in the Valley","year": 1996,"rating": 6.5,"votes": 16528,"running_times": 6240},{"title": "2 Fast 2 Furious","year": 2003,"rating": 5.9,"votes": 213674,"running_times": 6420}
]

console.log(movies)

//1
const shortTitleMovies = movies.filter(movie => movie.title.length < 5); 
console.log(shortTitleMovies)

//2
const longTitleMovies = movies
  .filter(movie => movie.title.length > 15)
  .map(movie => movie.title);
  console.log(longTitleMovies)

  //3
  const moviesBetween1980And1989 = movies.filter(
    movie => movie.year >= 1980 && movie.year <= 1989
  );
  const count = moviesBetween1980And1989.length;
  console.log(moviesBetween1980And1989)

  
  //4
  const taggedMovies = movies.map(movie => {
    const { title, year, rating, votes, running_times } = movie;
    let tag;
    if (rating >= 7) {
      tag = "Good";
    } else if (rating >= 4) {
      tag = "Average";
    } else {
      tag = "Bad";
    }
    return { title, year, rating, votes, running_times, tag };
  });
  console.log(taggedMovies)


  //5
  const highRatedMovies = movies
  .filter(movie => movie.rating > 6)
  .map(movie => movie.rating);
  console.log(highRatedMovies)


  // 6 
  const keywords = ["Days", "2", "Fast"];

  const countKeywords = movies.filter(movie => {
    const titleLowerCase = movie.title.toLowerCase();
    return keywords.some(keyword => titleLowerCase.includes(keyword.toLowerCase()));
  }).length;
  console.log(keywords)

  
  //7
  const duplicatedWordMovies = movies.filter(movie => {
    const words = movie.title.split(" ");
    return words.some(word => words.indexOf(word) !== words.lastIndexOf(word));
  });
  console.log(duplicatedWordMovies)


  