import { places } from "../data/interest-area.mjs";

const container = document.querySelector("#card-container");

places.forEach((place) => {
    let card = document.createElement("div");
    let title = document.createElement("h2");
    let figure = document.createElement("figure");
    let image = document.createElement("img");
    let caption = document.createElement("figcaption");
    let address = document.createElement("address");
    let description = document.createElement("p");
    let button = document.createElement("button");

    title.textContent = place.name;

    figure.classList.add("discover-figure");
    image.setAttribute("src", place.imageSRC);
    image.setAttribute("alt", place.name);
    caption.textContent = `A view of ${place.name}.`;
    figure.appendChild(image);
    figure.appendChild(caption);

    address.textContent = place.address;

    description.textContent = place.description;

    button.textContent = "learn more";

    card.appendChild(title);
    card.appendChild(figure);
    card.appendChild(address);
    card.appendChild(description);
    card.appendChild(button);
    card.classList.add("discover-places");
    container.appendChild(card);
});



document.addEventListener("DOMContentLoaded", (event) => {
    const visitMessage = document.querySelector("#visit-message");
    const currentTime = new Date().getTime();
    const lastVisitKey = "lastVisit";
    const lastVisitTime = localStorage.getItem(lastVisitKey);

    if (lastVisitTime === null) {
        visitMessage.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const lastVisit = parseInt(lastVisitTime);
        const timeDifference = Math.abs(currentTime - lastVisit);
        const oneDayInMs = 1000 * 60 * 60 * 24;

        if (timeDifference < oneDayInMs) {
            visitMessage.textContent = "";
            visitMessage.textContent = "Back so soon! Awesome!";
        } else {
            const daysAgo = Math.floor(timeDifference / oneDayInMs);
            if (daysAgo === 1) {
                visitMessage.textContent = "";
                visitMessage.textContent = `You last visited ${daysAgo} day ago.`;
            } else {
                visitMessage.textContent = "";
                visitMessage.textContent = `You last visited ${daysAgo} days ago.`;
            }
        }
    }

    localStorage.setItem(lastVisitKey, currentTime.toString());

});
