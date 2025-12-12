async function getData() {
    const response = await fetch("./data/readers.json");
    const data = await response.json();
    displaySpotlight(data.readers);
}

getData();

const displaySpotlight = (readers) => {
    const cardContainer = document.querySelector("#reader-spotlight");
    
    const randomIndex = Math.floor(Math.random() * readers.length);
    const reader = readers[randomIndex];
    
    let card = document.createElement("div");
    let title = document.createElement("h3");
    let coverImage = document.createElement("img");
    let genre = document.createElement("p");
    genre.classList.add("genre");
    let author = document.createElement("p");
    author.classList.add("author");
    
    title.textContent = `Favorite Book: ${reader.title}`;
    genre.textContent = `Favorite Genre: ${reader.genre}`;
    
    coverImage.setAttribute("src", reader.coverImage);
    coverImage.setAttribute("alt", `Cover for ${title}`);
    coverImage.setAttribute("loading", "lazy");
    coverImage.setAttribute("width", "auto");
    coverImage.setAttribute("height", "auto");
    
    author.textContent = `Favorite Author: ${reader.author}`;
    
    card.appendChild(coverImage);
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(genre);
    card.classList.add("reader-card");
    cardContainer.appendChild(card);
}