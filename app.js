/* Imports */

/* Get DOM Elements */
const climateSelect = document.getElementById('climate-select');
const architectureSelect = document.getElementById('architecture-select');
const nameInput = document.getElementById('name-input');
const sloganInput = document.getElementById('slogan-input');
const addsloganButton = document.getElementById('add-slogan-button');
const sloganP = document.getElementById('slogan-p');
const climateImage = document.getElementById('climate-image');
const architectureImage = document.getElementById('architecture-image');
const cityInput = document.getElementById('Gotham-City');
/* State */
let city = {
    name: 'Gotham City',
    climate: 'polar',
    architecture: 'futuristic',
    slogan: [],
};

/* Events */
nameInput.addEventListener('input', () => {
    city.name = nameInput.value;
    displayCity();
});
climateSelect.addEventListener('change', () => {
    city.climate = climateSelect.value;
    displayCity();
});
architectureSelect.addEventListener('change', () => {
    city.architecture = architectureSelect.value;
    displayCity();
});

// // sloganInput.addEventListener('change', () => {
// //     city.slogan = sloganInput.value;
// //     displayCity();
// });
addsloganButton.addEventListener('click', () => {
    const slogan = sloganInput.value;
    city.slogan.push(slogan);
    displaySloganP();
});

/* Display Functions */
function displayCity() {
    climateImage.src = '/assets/' + city.climate + '-climate.jpg';
    architectureImage.src = '/assets/' + city.architecture + '-architecture.jpg';
    cityInput.textContent = city.name;
}
function displaySloganP() {
    sloganP.innerHTML = '';

    for (const slogan of city.slogan) {
        const p = document.createElement('p');
        p.textContent = slogan;
        sloganP.append(p);
    }
}
function displayInput() {
    cityInput.value = city.name;
}
// (don't forget to call any display functions you want to run on page load!)
displayCity();
displaySloganP();
displayInput();
