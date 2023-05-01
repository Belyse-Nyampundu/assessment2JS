
// const books = [
// { title: 'The Catcher in the Rye', author: 'J.D. Salinger', publicationYear: 1951,
// isAvailable: true },
// { title: 'Great Expectations', author: 'Charles Dickens', publicationYear: 1861,
// isAvailable: false },
// { title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', publicationYear:
// 1866, isAvailable: true },
// { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publicationYear: 1925,
// isAvailable: false },
// { title: 'The Odyssey', author: 'Homer', publicationYear: -800, isAvailable: true },
// ];

// 1. Create a function called getAvailableBooks that returns an array of all available
// books.

const books = [
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger', publicationYear: 1951,
    isAvailable: true },
    { title: 'Great Expectations', author: 'Charles Dickens', publicationYear: 1861,
    isAvailable: false },
    { title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', publicationYear:
    1866, isAvailable: true },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publicationYear: 1925,
    isAvailable: false },
    { title: 'The Odyssey', author: 'Homer', publicationYear: -800, isAvailable: true },
    ];
    
    function getAvailableBooks() {
      return books.filter(book => book.isAvailable);
    }
    
    console.log(getAvailableBooks());
     
    
   

// 2. Create a function getBooksByAuthor that takes an author's name as an argument and
// returns an array of all books by that author.

    function getBooksByAuthor(authorName) {
       
       return books.filter(book => book.author === authorName)
          emptyArray.authorName
       

    }
    
    console.log(getBooksByAuthor("F.Scott Fitzgerald"));
    console.log(getBooksByAuthor("Homer"));
    console.log(getBooksByAuthor(" Fyodor Dostoevsky"));
    console.log(getBooksByAuthor("'Charles Dickens'"))
   

//  3. Create a function addNewBook that takes a book object as an argument and adds it
// to the library, ensuring that the new book has all required properties (title, author,
// publicationYear, and isAvailable).
function addNewBook(book) {
    
    if (!book.title || !book.author || !book.publicationYear || !book.isAvailable) {
      console.log("Error: Book is missing a required property.");
      return;
    }
  
    books.push(book);
  
    
    console.log("book ${this.title} by ${this.author} addded to library")
  }

//  4. Create a function checkoutBook that takes a book title as an argument and changes
//  the book's isAvailable property to false. If the book is not found in the library, the
//  function should return a message indicating that the book is not available.
function checkoutBook(){
    if(books.title === books){
        return("the book is available")
    }else{
        return("the book not found")
    }
}
console.log(checkoutBook(title))

// Create a function returnBook that takes a book title as an argument and changes the
// book's isAvailable property to true. If the book is not found in the library, the function
// should return a message indicating that the book does not belong to the library.
function returnBook(book){
if(books.title === books){
    return("it's available")
}else{
    return ("not available")
}
}
console.log(returnBook("${this.isAvailable}"))