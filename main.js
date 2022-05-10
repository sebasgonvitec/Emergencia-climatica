const numKg = document.getElementById("num-kg");
const numKm = document.getElementById("num-km");
const numPeople = document.getElementById("num-people");
const resultRender = document.getElementById("results");

const vehicleData = [
  {
    name: "Auto",
    emission: 120.1,
    maxPeople: 5,
    maxCargo: 400,
    image:
      "https://seetech-corp.com/wp-content/uploads/2016/10/Car-PNG-File.png",
  },
  {
    name: "Autobús",
    emission: 1300,
    maxPeople: 40,
    maxCargo: 1280,
    image: "https://www.pngmart.com/files/6/Bus-Transparent-Images-PNG.png",
  },
  {
    name: "Van",
    emission: 180.5,
    maxPeople: 13,
    maxCargo: 750,
    image:
      "https://vans.mercedes-benz.com.mx/vans/es/sprinter/quick-access/body-types/sprinter-tourer/_jcr_content/parsysmeta/meta/image.mq6.png/1647914985000.png",
  },
  {
    name: "Trailer",
    emission: 1540,
    maxPeople: 2,
    maxCargo: 24000,
    image: "https://www.picng.com/upload/truck/png_truck_23632.png",
  },
  {
    name: "Avión",
    emission: 115.4,
    maxPeople: 150,
    maxCargo: 4800,
    image:
      "https://www.pngmart.com/files/13/Vector-Flying-Airplane-PNG-Free-Download.png",
  },
];

const valueChange = () => {
  const people = numPeople.value;
  const km = numKm.value;
  const kg = numKg.value;

  const suggestion = returnSuggestion(people, km, kg);
  console.log(suggestion);

  let addString = "";

  suggestion.forEach((vehicle) => {
    addString += `<div class="col-md-4 col-sm-12 flexer-col">
    <img src=${vehicle.image} alt="" width="100" />
    <h3>${vehicle.name}</h3>
    <p>Se ocupan <strong>${vehicle.total}</strong> flete(s)</p>
    <p>Su emision de CO2 total por el viaje es de <strong>${vehicle.totalEmissions}</strong> g CO2 / km</p>
  </div>`;
  });

  resultRender.innerHTML = addString;
};

const calculateEmission = (vehicles, km, em) => {
  const emissions = vehicles * km * em;
  return emissions;
};

const howMuchWeNeed = (maxPeople, maxCargo, people, cargo) => {
  totalVehiclesByCargo = Math.ceil(cargo / maxCargo);
  totalVehiclesByPeople = Math.ceil(people / maxPeople);

  return Math.max(totalVehiclesByCargo, totalVehiclesByPeople);
};

const returnSuggestion = (people, km, kg) => {
  let vehicles = [];

  vehicleData.forEach((vehicle) => {
    const totalVehicles = howMuchWeNeed(
      vehicle.maxPeople,
      vehicle.maxCargo,
      people,
      kg
    );

    if (totalVehicles > 0) {
      vehicles.push({
        name: vehicle.name,
        total: totalVehicles,
        totalEmissions: calculateEmission(totalVehicles, km, vehicle.emission),
        image: vehicle.image,
      });
    }
  });

  return vehicles;
};
