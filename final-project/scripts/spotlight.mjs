import { makeBookCard } from "./book-card.mjs";

const cardContainer = document.querySelector("#spotlight-container");

async function getData() {
    const response = await fetch("./data/spotlight.json");
    const data = await response.json();
    const books = data.books;
    books.forEach(makeBookCard(book));
}