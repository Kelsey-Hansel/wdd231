const params = new URLSearchParams(window.location.search);
const firstName = params.get("first-name");
const lastName = params.get("last-name");
const favGenre = params.get("fav-genre");
const email = params.get("email");
const favAuthor = params.get("fav-author");
const container = document.querySelector("#thankyou-container");

let card = document.createElement("div");
let fullName = document.createElement("p");
let emailText = document.createElement("p");
let genre = document.createElement("p");
let author = document.createElement("p");
let thankYou = document.createElement("p");


fullName.textContent =`Full Name: ${firstName} ${lastName}`;
emailText.textContent = `Email: ${email}`;
genre.textContent = `Favorite Genre: ${favGenre}`;
author.textContent = `Favorite Author: ${favAuthor}`;
thankYou.textContent = "Thank you for signing up to our newsletter!";

card.appendChild(fullName);
card.appendChild(emailText);
card.appendChild(genre);
card.appendChild(author);
card.appendChild(thankYou);
card.classList.add("results");
container.appendChild(card);