const myKey = "3f5d9dea5eed0dae3f1bc8bd76676da9";
const latitude = "37.67754017887087";
const longitude = "-97.38449912116752";

const myTemp = document.querySelector("#temp");
const myCondition = document.querySelector("#condition");
const myHighTemp = document.querySelector("#high");
const myLowTemp = document.querySelector("#low");
const myHumidity = document.querySelector("#humidity");
const myIcon = document.querySelector("#weather-icon");
const todayTemp = document.querySelector("#today");
const tomorrowTemp = document.querySelector("#tomorrow");
const twoDayTemp = document.querySelector("#two-days");

const myURL = `//api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${myKey}&units=imperial`;
const threeDayURL = `//api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${myKey}&units=imperial`;

async function apiFetch() {
    try {
        const response = await fetch(myURL);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

async function apiFetch2() {
    try {
        const response2 = await fetch(threeDayURL);
        if (response2.ok) {
            const data2 = await response2.json();
            console.log(data2);
            displayForecast(data2);
        } else {
            throw Error(await response2.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayForecast(data) {
    todayTemp.innerHTML = `Today: ${data.list[0].main.temp}&deg;`;
    tomorrowTemp.innerHTML = `Tomorrow: ${data.list[1].main.temp}&deg;`;
    twoDayTemp.innerHTML = `Day After Tomorrow: ${data.list[2].main.temp}&deg;`;
}

function displayResults(data) {
    myTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    let desc = data.weather[0].description;
    myIcon.setAttribute('SRC', iconsrc);
    myIcon.setAttribute('alt', desc);
    myCondition.textContent = `${desc}`;
    myHighTemp.innerHTML = `High: ${data.main.temp_max}&deg;`;
    myLowTemp.innerHTML = `Low: ${data.main.temp_min}&deg;`;
    myHumidity.textContent = `Humidity: ${data.main.humidity}%`;
}

apiFetch();
apiFetch2();

const cardContainer = document.getElementById("spotlight");

function getRandomMembers(members) {
    const filteredMembers = members.filter(member => member.membershipLevel === 2 || member.membershipLevel === 3);
    const shuffledMembers = shuffleArray(filteredMembers);
    const selectedMembers = shuffledMembers.slice(0, 3);

    cardContainer.innerHTML = "";

    selectedMembers.forEach((member) => {
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
    });
}

function shuffleArray(members) {
    const copyOfArray = members;
    for (let i = copyOfArray.length - 1; i > 0; i--) {
        const l = Math.floor(Math.random() * (i + 1));
        [copyOfArray[i], copyOfArray[l]] = [copyOfArray[l], copyOfArray[i]];
    }
    return copyOfArray;
}

async function getData() {
    const response3 = await fetch("./data/members.json");
    const data3 = await response3.json();
    getRandomMembers(data3.members);
}

getData();