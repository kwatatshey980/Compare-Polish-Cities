const cities = [
  {
    name: "Warsaw",
    population: "1.8M",
    area: "517 km²",
    images: ["images/warsaw-day.jpg"],
    cost: {
      student: "$500/month",
      visitor: "$120/day",
      resident: "$800/month"
    },
    attractions: ["Old Town", "Lazienki Park", "POLIN Museum"]
  },
  {
    name: "Krakow",
    population: "780K",
    area: "327 km²",
    images: ["images/krakow-day.jpg"],
    cost: {
      student: "$450/month",
      visitor: "$110/day",
      resident: "$750/month"
    },
    attractions: ["Wawel Castle", "Main Market Square", "St. Mary's Basilica"]
  },
  {
    name: "Gdansk",
    population: "470K",
    area: "262 km²",
    images: ["images/Gdansk-day.jpg"],
    cost: {
      student: "$400/month",
      visitor: "$100/day",
      resident: "$700/month"
    },
    attractions: ["Long Market", "Neptune's Fountain", "Westerplatte"]
  },
  {
    name: "Poznan",
    population: "530K",
    area: "262 km²",
    images: ["images/Poznan-day.jpg"],
    cost: {
      student: "$420/month",
      visitor: "$90/day",
      resident: "$680/month"
    },
    attractions: ["Old Market Square", "Citadel Park", "Imperial Castle"]
  },
  {
    name: "Wroclaw",
    population: "640K",
    area: "292 km²",
    images: ["images/Wroclaw-day.jpg"],
    cost: {
      student: "$430/month",
      visitor: "$95/day",
      resident: "$700/month"
    },
    attractions: ["Market Square", "Ostrów Tumski", "Centennial Hall"]
  },
  {
    name: "Lodz",
    population: "670K",
    area: "293 km²",
    images: ["images/Lodz-day.jpg"],
    cost: {
      student: "$410/month",
      visitor: "$85/day",
      resident: "$650/month"
    },
    attractions: ["Piotrkowska Street", "EC1", "Manufaktura"]
  },
  {
    name: "Szczecin",
    population: "400K",
    area: "301 km²",
    images: ["images/Szczecin-day.jpg"],
    cost: {
      student: "$390/month",
      visitor: "$80/day",
      resident: "$620/month"
    },
    attractions: ["Wały Chrobrego", "Pomeranian Dukes' Castle", "Kasprowicz Park"]
  },
  {
    name: "Lublin",
    population: "340K",
    area: "147 km²",
    images: ["images/Lublin-day.jpg"],
    cost: {
      student: "$380/month",
      visitor: "$75/day",
      resident: "$600/month"
    },
    attractions: ["Lublin Castle", "Old Town", "Open Air Village Museum"]
  },
  {
    name: "Katowice",
    population: "290K",
    area: "165 km²",
    images: ["images/Katowice-day.jpg"],
    cost: {
      student: "$400/month",
      visitor: "$90/day",
      resident: "$640/month"
    },
    attractions: ["Nikiszowiec", "Spodek", "Silesian Museum"]
  },
  {
    name: "Bydgoszcz",
    population: "350K",
    area: "175 km²",
    images: ["images/bydgoszcz-day.jpg"],
    cost: {
      student: "$370/month",
      visitor: "$70/day",
      resident: "$590/month"
    },
    attractions: ["Mill Island", "Granaries", "Exploseum"]
  },
  {
    name: "Bialystok",
    population: "297K",
    area: "103 km²",
    images: ["images/Bialystok-day.jpg"],
    cost: {
      student: "$360/month",
      visitor: "$65/day",
      resident: "$580/month"
    },
    attractions: ["Branicki Palace", "Planty Park", "Opera & Philharmonic"]
  },
  {
    name: "Rzeszow",
    population: "196K",
    area: "129 km²",
    images: ["images/Rzeszow-day.jpg"],
    cost: {
      student: "$350/month",
      visitor: "$60/day",
      resident: "$570/month"
    },
    attractions: ["Old Town", "Lubomirski Castle", "Underground Tourist Route"]
  },
  {
    name: "Torun",
    population: "202K",
    area: "115 km²",
    images: ["images/Torun-day.jpg"],
    cost: {
      student: "$360/month",
      visitor: "$70/day",
      resident: "$590/month"
    },
    attractions: ["Old Town", "Nicolaus Copernicus House", "Teutonic Castle"]
  },
  {
    name: "Kielce",
    population: "195K",
    area: "110 km²",
    images: ["images/Kielce-day.jpg"],
    cost: {
      student: "$340/month",
      visitor: "$60/day",
      resident: "$560/month"
    },
    attractions: ["Palace of Kraków Bishops", "Geopark", "Sienkiewicza Street"]
  },
  {
    name: "Zielona Gora",
    population: "140K",
    area: "278 km²",
    images: ["images/zielona-gora-day.jpg"],
    cost: {
      student: "$330/month",
      visitor: "$55/day",
      resident: "$550/month"
    },
    attractions: ["Palm House", "Wine Museum", "Focus Mall"]
  }
];

const searchInput = document.getElementById("citySearch");
const comparisonSection = document.getElementById("comparison");
const viewMode = document.getElementById("viewMode");

function renderCity(city) {
  return `
    <div class="city-card">
      <h2>${city.name}</h2>
      <img src="${city.images[0]}" alt="${city.name}">
      <p><strong>Population:</strong> ${city.population}</p>
      <p><strong>Area:</strong> ${city.area}</p>
      <p><strong>Cost of Living (${viewMode.value}):</strong> ${city.cost[viewMode.value]}</p>
      <h4>Top Attractions</h4>
      <ul>
        ${city.attractions.map(place => `<li>${place}</li>`).join('')}
      </ul>
    </div>
  `;
}

function updateDisplay() {
  const query = searchInput.value.toLowerCase();
  const matchedCities = cities.filter(city => city.name.toLowerCase().includes(query));
  comparisonSection.innerHTML = matchedCities.map(renderCity).join('');
}

searchInput.addEventListener("input", updateDisplay);
viewMode.addEventListener("change", updateDisplay);

// Israel kwatatshey mukanda
updateDisplay();
