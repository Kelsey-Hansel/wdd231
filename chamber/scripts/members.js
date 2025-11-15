const cardContainer = document.getElementById("card-container");

const displayBusinesses = (members) => {
    members.forEach((member) => {
        let card = document.createElement("div");
        let name = document.createElement("h3");
        let image = document.createElement("img");
        let tagLine = document.createElement("h4");
        let email = document.createElement("p");
        let phone = document.createElement("p");
        let url = document.createElement("p");

        name.textContent = member.name;
        tagLine.textContent = member.tagline;

        image.setAttribute("src", member.image);
        image.setAttribute("alt", `Photo for ${name}`);
        image.setAttribute("loading", "lazy");
        image.setAttribute("width", "auto");
        image.setAttribute("height", 200);

        email.textContent = `Email: ${member.email}`;
        phone.textContent = `Phone: ${member.phoneNumber}`;
        url.textContent = `URL: ${member.websiteURL}`;

        card.appendChild(name);
        card.appendChild(tagLine);
        card.appendChild(image);
        card.appendChild(email);
        card.appendChild(phone);
        card.appendChild(url);
        card.classList.add("member-card");
        cardContainer.appendChild(card);
        cardContainer.classList.add("member-grid");
        cardContainer.classList.remove("member-list");
    });
}

function displayList(members)
{
    members.forEach((member) => {
        let card = document.createElement("div");
        let name = document.createElement("h3");
        let tagLine = document.createElement("h4");
        let email = document.createElement("p");
        let phone = document.createElement("p");
        let url = document.createElement("p");

        name.textContent = member.name;
        tagLine.textContent = member.tagline;

        email.textContent = `Email: ${member.email}`;
        phone.textContent = `Phone: ${member.phoneNumber}`;
        url.textContent = `URL: ${member.websiteURL}`;

        card.appendChild(name);
        card.appendChild(tagLine);
        card.appendChild(email);
        card.appendChild(phone);
        card.appendChild(url);
        card.classList.add("listing")
        cardContainer.appendChild(card);
        cardContainer.classList.add("member-list");
        cardContainer.classList.remove("member-grid");
    });
}

let dataInfo;

async function getData() {
    const response = await fetch("./data/members.json");
    const data = await response.json();
    displayBusinesses(data.members);
    dataInfo = data.members;
}

const gridButton = document.getElementById("grid-layout");
const listButton = document.getElementById("list-layout");

gridButton.addEventListener("click", () => {
    cardContainer.innerHTML = "";
    displayBusinesses(dataInfo);
})

listButton.addEventListener("click", () => {
    cardContainer.innerHTML = "";
    displayList(dataInfo);
})

getData();