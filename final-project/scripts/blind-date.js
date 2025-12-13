const arrayISBN = [9780593647028, 9780547351919, 9781416980452, 9781250767097, 9780375843174, 9780375890802, 9781599558042];
const randomIndex = Math.floor(Math.random() * arrayISBN.length);
const randomISBN = arrayISBN[randomIndex];

const apiKey = "AIzaSyC6XWHN57KiojJpbFx9bLtwXbgUPs0qKkA";
const myURL = `https://www.googleapis.com/books/v1/volumes?q=isbn:${randomISBN}&key=${apiKey}`;

async function apiFetch() {
    try {
        const response = await fetch(myURL);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayBlindDate(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

const blindDateContainer = document.querySelector("#blind-book");
const openButton = document.querySelector("#open-button");
const closeButton = document.querySelector("#close-button");
const modal = document.querySelector("#book-modal");
const description = document.querySelector("#description");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const genre = document.querySelector("#genre");

function displayBlindDate(data) {
    description.textContent = data.items[0].volumeInfo.description;
    title.textContent = `Title: ${data.items[0].volumeInfo.title}`;
    author.textContent = `Author: ${data.items[0].volumeInfo.authors[0]}`;
    genre.textContent = `Genre: ${data.items[0].volumeInfo.categories[0]}`;
}

function openModal(modal) {
    modal.showModal();
}

function closeModal(modal) {
    modal.close();
}

openButton.addEventListener('click', () => {
    openModal(modal);
});

closeButton.addEventListener('click', () => {
    closeModal(modal);
});