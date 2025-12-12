export function makeBookCard(book) {
    let card = document.createElement("div")
    let title = document.createElement("h3");
    let coverImage = document.createElement("img");
    let genre = document.createElement("h4");
    let author = document.createElement("p");
    let description = document.createElement("p");
    let url = document.createElement("p");

    title.textContent = `Title: ${book.title}`;
    genre.textContent = `Genre: ${book.genre}`;

    coverImage.setAttribute("src", book.coverImage);
    coverImage.setAttribute("alt", `Cover for ${title}`);
    coverImage.setAttribute("loading", "lazy");
    coverImage.setAttribute("width", "auto");
    coverImage.setAttribute("height", "auto");

    author.textContent = `Author: ${book.author}`;
    description.textContent = `Description: ${book.description}`;

    card.appendChild(coverImage);
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(genre);
    card.appendChild(description);
    card.classList.add("book-card");
    cardContainer.appendChild(card);
}