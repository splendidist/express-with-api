const booksWrapper = document.getElementById("booksWrapper");

async function getGames() {
  const response = await fetch("http://localhost:8080/books");
  const books = await response.json();

  books.forEach(function (book) {
    //make h2 and p elements
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    //assign content to be the book.title and book.author from array
    h2.textContent = book.title;
    p.textContent = `Written by ${book.author}`;
    //add elements to div
    booksWrapper.appendChild(h2);
    booksWrapper.appendChild(p);
  });
}

//run function
getGames();
