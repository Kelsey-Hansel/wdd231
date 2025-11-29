const params = new URLSearchParams(window.location.search);
const firstName = params.get("first-name");
const lastName = params.get("last-name");
const orgTitle = params.get("org-title");
const email = params.get("email");
const mobileNumber = params.get("mobile-number");
const orgName = params.get("org-name");
const membershipLevel = params.get("membership-level");
const description = params.get("description");
const container = document.querySelector("#thankyou-container");

let card = document.createElement("div");
let fullName = document.createElement("p");
let title = document.createElement("p");
let emailText = document.createElement("p");
let phone = document.createElement("p");
let organization = document.createElement("p");
let level = document.createElement("p");
let descriptionText = document.createElement("p");


fullName.textContent =`Full Name: ${firstName} ${lastName}`;
title.textContent = `Organization Title: ${orgTitle}`;
emailText.textContent = `Email: ${email}`;
phone.textContent = `Phone: ${mobileNumber}`;
organization.textContent = `Organization: ${orgName}`;
level.textContent = `Membership Level: ${membershipLevel}`;
descriptionText.textContent = `Description: ${description}`;

card.appendChild(fullName);
card.appendChild(title);
card.appendChild(emailText);
card.appendChild(phone);
card.appendChild(organization);
card.appendChild(level);
card.appendChild(descriptionText);
card.classList.add("results");
container.appendChild(card);

const myForm = document.querySelector("#member-join-form");
const timestamp = document.querySelector("#timestamp");
myForm.addEventListener("submit", function (event) {
    const now = new Date();
    const timestampValue = now.tpISOString();
    timestamp.value = timestampValue;
});