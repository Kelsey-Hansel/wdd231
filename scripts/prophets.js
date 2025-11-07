const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';

const cards = document.querySelector('#cards');

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        let card = document.createElement("section");
        let fullName = document.createElement("h2");
        let portrait = document.createElement("img");

        fullName.textContent = prophet.name + " " + prophet.lastname;

        portrait.setAttribute("src", prophet.imageurl);
        portrait.setAttribute("alt", `Photo of ${fullName} the prophet`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "auto");
        portrait.setAttribute("height", 200);

        let dateOfBirth = document.createElement("p");
        let birthPlace = document.createElement("p");

        dateOfBirth.textContent = `Date of Birth: ${prophet.birthdate}`;
        birthPlace.textContent = `Place of Birth: ${prophet.birthplace}`;

        card.appendChild(fullName);
        card.appendChild(dateOfBirth);
        card.appendChild(birthPlace);
        card.appendChild(portrait);
        cards.appendChild(card);
    });

    
}

async function getProphetData()
{
    const response = await fetch(url);
    const data = await response.json();
    displayProphets(data.prophets);
}

getProphetData();