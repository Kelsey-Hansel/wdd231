const openNP = document.querySelector("#open-np");
const openBronze = document.querySelector("#open-bronze");
const openSilver = document.querySelector("#open-silver");
const openGold = document.querySelector("#open-gold");
const npModal = document.querySelector("#np-modal");
const bronzeModal = document.querySelector("#bronze-modal");
const silverModal = document.querySelector("#silver-modal");
const goldModal = document.querySelector("#gold-modal");
const closeNP = document.querySelector("#close-np");
const closeBronze = document.querySelector("#close-bronze");
const closeSilver = document.querySelector("#close-silver");
const closeGold = document.querySelector("#close-gold");

function openModal(modal) {
    modal.showModal();
}

function closeModal(modal) {
    modal.close();
}

openNP.addEventListener('click', () => {
    openModal(npModal);
});

openBronze.addEventListener('click', () => {
    openModal(bronzeModal);
});

openSilver.addEventListener('click', () => {
    openModal(silverModal);
});

openGold.addEventListener('click', () => {
    openModal(goldModal);
});

closeNP.addEventListener('click', () => {
    closeModal(npModal);
});

closeBronze.addEventListener('click', () => {
    closeModal(bronzeModal);
});

closeSilver.addEventListener('click', () => {
    closeModal(silverModal);
});

closeGold.addEventListener('click', () => {
    closeModal(goldModal);
});

