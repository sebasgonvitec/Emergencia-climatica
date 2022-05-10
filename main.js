const numKg = document.getElementById("num-kg");
const numKm = document.getElementById("num-km");
const numPeople = document.getElementById("num-people");
const resultRender = document.getElementById("results");

const peopleChange = () => {
  resultRender.innerHTML = `<p>${numPeople.value} people will need to drive ${numKm.value} km with ${numKg.value} kg</p>`;
};

const kmChange = () => {
  resultRender.innerHTML = `<p>${numPeople.value} people will need to drive ${numKm.value} km with ${numKg.value} kg</p>`;
};

const kgChange = () => {
  resultRender.innerHTML = `<p>${numPeople.value} people will need to drive ${numKm.value} km with ${numKg.value} kg</p>`;
};

const calculateEmission = (people, km, em) => {
    const emissions = people * km * em;
    return emissions;
}




