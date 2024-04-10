import express from "express";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());

const books = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publicationYear: 1960,
  },
  {
    title: "1984",
    author: "George Orwell",
    publicationYear: 1949,
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publicationYear: 1925,
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    publicationYear: 1813,
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    publicationYear: 1997,
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    publicationYear: 1951,
  },
  {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    publicationYear: 1954,
  },
  {
    title: "The Hunger Games",
    author: "Suzanne Collins",
    publicationYear: 2008,
  },
  {
    title: "The Chronicles of Narnia",
    author: "C.S. Lewis",
    publicationYear: 1950,
  },
  {
    title: "The Da Vinci Code",
    author: "Dan Brown",
    publicationYear: 2003,
  },
];

app.get("/", function (request, response) {
  response.json("You are looking at my root route. How roude.");
});

app.get("/books", function (request, response) {
  response.json(books);
});

app.listen(8080, function () {
  console.log("App is running on port 8080");
});
