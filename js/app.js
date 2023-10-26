const usedCars = [
  {
    year: 2018,
    make: "Toyota",
    model: "Camry",
    mileage: 30000,
    price: 18000,
    color: "Silver",
    gasMileage: "25 mpg city, 35 mpg highway",
  },
  {
    year: 2016,
    make: "Honda",
    model: "Civic",
    mileage: 45000,
    price: 14000,
    color: "White",
    gasMileage: "30 mpg city, 40 mpg highway",
  },
  {
    year: 2017,
    make: "Ford",
    model: "Fusion",
    mileage: 35000,
    price: 16000,
    color: "Black",
    gasMileage: "28 mpg city, 38 mpg highway",
  },
  {
    year: 2019,
    make: "Nissan",
    model: "Altima",
    mileage: 25000,
    price: 17000,
    color: "Blue",
    gasMileage: "27 mpg city, 36 mpg highway",
  },
  {
    year: 2015,
    make: "Chevrolet",
    model: "Malibu",
    mileage: 50000,
    price: 12000,
    color: "Red",
    gasMileage: "25 mpg city, 37 mpg highway",
  },
  {
    year: 2016,
    make: "Volkswagen",
    model: "Passat",
    mileage: 40000,
    price: 15000,
    color: "Gray",
    gasMileage: "29 mpg city, 40 mpg highway",
  },
  {
    year: 2020,
    make: "Hyundai",
    model: "Elantra",
    mileage: 22000,
    price: 16000,
    color: "Silver",
    gasMileage: "30 mpg city, 41 mpg highway",
  },
  {
    year: 2014,
    make: "Subaru",
    model: "Outback",
    mileage: 60000,
    price: 14000,
    color: "Green",
    gasMileage: "22 mpg city, 30 mpg highway",
  },
  {
    year: 2017,
    make: "Mazda",
    model: "CX-5",
    mileage: 32000,
    price: 19000,
    color: "Blue",
    gasMileage: "24 mpg city, 31 mpg highway",
  },
  {
    year: 2018,
    make: "Kia",
    model: "Sorento",
    mileage: 28000,
    price: 17000,
    color: "White",
    gasMileage: "22 mpg city, 29 mpg highway",
  },
  {
    year: 2015,
    make: "Dodge",
    model: "Challenger",
    mileage: 30000,
    price: 24000,
    color: "Black",
    gasMileage: "19 mpg city, 30 mpg highway",
  },
  {
    year: 2017,
    make: "Cadillac",
    model: "XT5",
    mileage: 28000,
    price: 32000,
    color: "Red",
    gasMileage: "19 mpg city, 27 mpg highway",
  },
  {
    year: 2018,
    make: "Jaguar",
    model: "F-PACE",
    mileage: 26000,
    price: 38000,
    color: "Blue",
    gasMileage: "18 mpg city, 23 mpg highway",
  },
  {
    year: 2019,
    make: "Tesla",
    model: "Model S",
    mileage: 18000,
    price: 55000,
    color: "Black",
    gasMileage: "Electric (370 miles per charge)",
  },
  {
    year: 2020,
    make: "Porsche",
    model: "Cayenne",
    mileage: 22000,
    price: 68000,
    color: "White",
    gasMileage: "20 mpg city, 26 mpg highway",
  },
  {
    year: 2017,
    make: "Lexus",
    model: "ES",
    mileage: 29000,
    price: 26000,
    color: "White",
    gasMileage: "21 mpg city, 30 mpg highway",
  },
  {
    year: 2016,
    make: "BMW",
    model: "5 Series",
    mileage: 32000,
    price: 27000,
    color: "Black",
    gasMileage: "23 mpg city, 34 mpg highway",
  },
  {
    year: 2021,
    make: "Audi",
    model: "A4",
    mileage: 15000,
    price: 32000,
    color: "Gray",
    gasMileage: "27 mpg city, 36 mpg highway",
  },
  {
    year: 2020,
    make: "Mercedes-Benz",
    model: "C-Class",
    mileage: 18000,
    price: 38000,
    color: "Silver",
    gasMileage: "25 mpg city, 35 mpg highway",
  },
  {
    year: 2022,
    make: "Volvo",
    model: "XC60",
    mileage: 12000,
    price: 42000,
    color: "Blue",
    gasMileage: "22 mpg city, 30 mpg highway",
  },
  {
    year: 2021,
    make: "Land Rover",
    model: "Range Rover Sport",
    mileage: 22000,
    price: 65000,
    color: "Black",
    gasMileage: "18 mpg city, 24 mpg highway",
  },
  {
    year: 2019,
    make: "Acura",
    model: "MDX",
    mileage: 28000,
    price: 29000,
    color: "Silver",
    gasMileage: "20 mpg city, 27 mpg highway",
  },
  {
    year: 2020,
    make: "Infiniti",
    model: "Q50",
    mileage: 22000,
    price: 33000,
    color: "Black",
    gasMileage: "23 mpg city, 30 mpg highway",
  },
  {
    year: 2018,
    make: "GMC",
    model: "Terrain",
    mileage: 32000,
    price: 23000,
    color: "Red",
    gasMileage: "21 mpg city, 28 mpg highway",
  },
  {
    year: 2022,
    make: "Jeep",
    model: "Wrangler",
    mileage: 15000,
    price: 35000,
    color: "Green",
    gasMileage: "17 mpg city, 25 mpg highway",
  },
  {
    year: 2021,
    make: "Mitsubishi",
    model: "Outlander",
    mileage: 18000,
    price: 26000,
    color: "Blue",
    gasMileage: "24 mpg city, 30 mpg highway",
  },
  {
    year: 2019,
    make: "RAM",
    model: "1500",
    mileage: 24000,
    price: 28000,
    color: "White",
    gasMileage: "20 mpg city, 25 mpg highway",
  },
  {
    year: 2020,
    make: "Chrysler",
    model: "300",
    mileage: 19000,
    price: 24000,
    color: "Black",
    gasMileage: "19 mpg city, 30 mpg highway",
  },
  {
    year: 2022,
    make: "Kia",
    model: "Telluride",
    mileage: 12000,
    price: 39000,
    color: "Gray",
    gasMileage: "20 mpg city, 26 mpg highway",
  },
  {
    year: 2018,
    make: "Jaguar",
    model: "XE",
    mileage: 22000,
    price: 35000,
    color: "Silver",
    gasMileage: "23 mpg city, 32 mpg highway",
  },
  {
    year: 2021,
    make: "Porsche",
    model: "911",
    mileage: 8000,
    price: 120000,
    color: "Red",
    gasMileage: "18 mpg city, 24 mpg highway",
  },
  {
    year: 2018,
    make: "Toyota",
    model: "Corolla",
    mileage: 33000,
    price: 16000,
    color: "Silver",
    gasMileage: "28 mpg city, 36 mpg highway",
  },
  {
    year: 2020,
    make: "Honda",
    model: "Accord",
    mileage: 24000,
    price: 22000,
    color: "White",
    gasMileage: "30 mpg city, 38 mpg highway",
  },
  {
    year: 2019,
    make: "Ford",
    model: "Mustang",
    mileage: 18000,
    price: 25000,
    color: "Black",
    gasMileage: "21 mpg city, 32 mpg highway",
  },
  {
    year: 2019,
    make: "Chevrolet",
    model: "Impala",
    mileage: 25000,
    price: 21000,
    color: "Red",
    gasMileage: "22 mpg city, 29 mpg highway",
  },
  {
    year: 2020,
    make: "Nissan",
    model: "Maxima",
    mileage: 15000,
    price: 26000,
    color: "Blue",
    gasMileage: "20 mpg city, 30 mpg highway",
  },
  {
    year: 2019,
    make: "Volkswagen",
    model: "Jetta",
    mileage: 20000,
    price: 17000,
    color: "Gray",
    gasMileage: "30 mpg city, 40 mpg highway",
  },
  {
    year: 2017,
    make: "Toyota",
    model: "RAV4",
    mileage: 35000,
    price: 22000,
    color: "Silver",
    gasMileage: "23 mpg city, 30 mpg highway",
  },
  {
    year: 2016,
    make: "Honda",
    model: "Fit",
    mileage: 32000,
    price: 14000,
    color: "White",
    gasMileage: "33 mpg city, 41 mpg highway",
  },
  {
    year: 2015,
    make: "Ford",
    model: "Escape",
    mileage: 55000,
    price: 15000,
    color: "Black",
    gasMileage: "22 mpg city, 31 mpg highway",
  },
  {
    year: 2019,
    make: "Nissan",
    model: "Murano",
    mileage: 18000,
    price: 28000,
    color: "Blue",
    gasMileage: "20 mpg city, 28 mpg highway",
  },
  {
    year: 2018,
    make: "Chevrolet",
    model: "Equinox",
    mileage: 24000,
    price: 20000,
    color: "Red",
    gasMileage: "26 mpg city, 32 mpg highway",
  },
  {
    year: 2017,
    make: "Volkswagen",
    model: "Tiguan",
    mileage: 30000,
    price: 19000,
    color: "Gray",
    gasMileage: "21 mpg city, 27 mpg highway",
  },
  {
    year: 2018,
    make: "Kia",
    model: "Sportage",
    mileage: 22000,
    price: 21000,
    color: "White",
    gasMileage: "23 mpg city, 30 mpg highway",
  },
  {
    year: 2019,
    make: "Hyundai",
    model: "Tucson",
    mileage: 15000,
    price: 22000,
    color: "Silver",
    gasMileage: "23 mpg city, 30 mpg highway",
  },
];

function resetFilters() {
  document.getElementById("minYear").value = "";
  document.getElementById("maxYear").value = "";
  document.getElementById("make").value = "all";
  document.getElementById("maxMileage").value = "";
  document.getElementById("minPrice").value = "";
  document.getElementById("maxPrice").value = "";
  document.getElementById("color").value = "all";

  filteredCars = [...usedCars];
  displayCars(filteredCars);
}

function applyFilters() {
  const minYear = document.getElementById("minYear").value;
  const maxYear = document.getElementById("maxYear").value;
  const make = document.getElementById("make").value;
  const maxMileage = document.getElementById("maxMileage").value;
  const minPrice = document.getElementById("minPrice").value;
  const maxPrice = document.getElementById("maxPrice").value;
  const color = document.getElementById("color").value;

  const filteredCars = usedCars.filter((car) => {
    return (
      (minYear ? car.year >= minYear : true) &&
      (maxYear ? car.year <= maxYear : true) &&
      (make !== "all" ? car.make === make : true) &&
      (maxMileage ? car.mileage <= maxMileage : true) &&
      (minPrice ? car.price >= minPrice : true) &&
      (maxPrice ? car.price <= maxPrice : true) &&
      (color !== "all" ? car.color === color : true)
    );
  });

  displayCars(filteredCars);
}

function displayCars(cars) {
  const carListings = document.getElementById("carListings");
  carListings.innerHTML = "";

  if (cars.length === 0) {
    const noCarsMessage = document.createElement("p");
    noCarsMessage.className = "noCarsMessage";
    noCarsMessage.textContent =
      "No cars match your criteria. Please try again.";
    carListings.appendChild(noCarsMessage);
    return;
  }

  cars.forEach((car, index) => {
    const carCard = document.createElement("div");
    carCard.className = "carCard";
    carCard.innerHTML = `
        <h3 class="carTitle">${car.year} ${car.make} ${car.model}</h3>
        <p class="carDetails">Mileage: ${car.mileage}</p>
        <p class="carDetails">Price: $${car.price}</p>
        <p class="carDetails">Color: ${car.color}</p>
        <p class="carDetails">Gas Mileage: ${car.gasMileage}</p>
        <button class="carButton" onclick="openModal(${index})">View Details</button>
    `;
    carListings.appendChild(carCard);
  });
}

function openModal(index) {
  const car = usedCars[index];
  const modal = document.createElement("div");
  modal.className = "modal";
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close" onclick="closeModal()">&times;</span>
      <h3 class="carTitle">${car.year} ${car.make} ${car.model}</h3>
      <p class="carDetails">Mileage: ${car.mileage}</p>
      <p class="carDetails">Price: $${car.price}</p>
      <p class="carDetails">Color: ${car.color}</p>
      <p class="carDetails">Gas Mileage: ${car.gasMileage}</p>
    </div>
  `;
  document.body.appendChild(modal);
  window.onclick = function (event) {
    if (event.target === modal) {
      closeModal();
    }
  };
}

function closeModal() {
  const modal = document.querySelector(".modal");
  if (modal) {
    modal.remove();
  }
}

// Display all cars on initial load
displayCars(usedCars);
