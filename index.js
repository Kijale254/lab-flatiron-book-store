const bookStore = {
    name: 'Flatbooks Technical Books',
    books: [
        {
            id:1,
            title: 'Eloquent JavaScript: A Modern Introduction to Programming',
            author: 'Marjin Haverbeke',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
            
        },
        {
            id:2,
            title: 'JavaScript & JQuery: Interactive Front-End Web Development',
            author: 'Jon Duckett',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/31SRWF+LkKL._SX398_BO1,204,203,200_.jpg'
        },
        {
            id:3,
            title: 'JavaScript: The Good Parts',
            author: 'Douglas Crockford',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
        },
        {
            id:4,
            title: 'JavaScript: The Definitive Guide',
            author: 'David Flanagan',
            imageUrl: "https://images-na.ssl-images-amazon.com/images/I/51wijnc-Y8L._SX379_BO1,204,203,200_.jpg"
            
        },
        {
            id:5,
            title: 'You Don’t Know JS',
            author: 'Kyle Simpson',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41T5H8u7fUL._SX331_BO1,204,203,200_.jpg'
        },
        {
            id:6,
            title: 'Cracking the Coding Interview',
            author: 'Gayle Laakmann McDowell',
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41oYsXjLvZL._SY344_BO1,204,203,200_.jpg'
            
        }
    ]
}

// Write your code here!


 // Title element using its id
const bookStoreTitle = document.getElementById("header");

// bookstore's name
bookStoreTitle.textContent = bookStore.name;

// where all books will be displayed
const bookList = document.getElementById("book-list");

// Looping through each book in the bookStore object
bookStore.books.forEach(function(book) {

    // a list item to hold one book
    const bookContainer = document.createElement("li");

    // heading for the book's title
    const bookTitle = document.createElement("h3");

    //  book's title inside the heading
    bookTitle.textContent = book.title;

    // paragraph for the author's name
    const bookAuthor = document.createElement("p");

    // Put the book's author inside the paragraph
    bookAuthor.textContent = book.author;

    // image element for the book cover
    const bookImage = document.createElement("img");

    // image source to the book's image URL
    bookImage.src = book.imageUrl;

    // Adding the title, author, and image to the book container
    bookContainer.append(bookTitle, bookAuthor, bookImage);

    // Adding the completed book container to the webpage's book list
    bookList.append(bookContainer);

});



