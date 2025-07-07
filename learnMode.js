// Retrieves the selectedAircraft from select.js using local storage to use here
// Source: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
const selectedAircraft = JSON.parse(localStorage.getItem('selectedAircraft')) || [];

// Includes all the aircraft's comprehensive data
// Source: https://www.freecodecamp.org/news/javascript-array-of-objects-tutorial-how-to-create-update-and-loop-through-objects-using-js-array-methods/
const allAircraft = {
  "Boeing 737": {
    name: "Boeing 737",
    image: "assets/images/aircraft1.png",
    facts: [
      "Manufacturer: Boeing Commercial Airplanes",
      "First Flight: April 9, 1967",
      "In Service Since: February 1968",
      "Variants: 737-100, 737-200, 737-300, 737-400, 737-500, 737-600, 737-700, 737-800, 737-900, 737 MAX series",
      "Specifications (737-800): Max Passengers: 189, MTOW: 79,000 kg (174,200 lbs), Max Range: ~5,765 km (~3,585 mi)",
      "Cruising Speed: Mach 0.785 (~839 km/h or ~521 mph)",
      "Max Speed: Mach 0.82 (~876 km/h or ~544 mph)",
      "Wingspan: 35.8 m (~117 ft)",
      "Length: 39.5 m (~129.6 ft)",
      "Tail Height: 12.5 m (~41.2 ft)",
      "Engines: 2× CFM International CFM56-7B",
      "Fuel Capacity: ~26,000 liters (6,875 US gal)",
      "Top Airlines: Southwest Airlines, Ryanair, American Airlines",
      "Fun Facts: Best-selling commercial jetliner in history; over 10,000 units delivered; 737 MAX introduced LEAP-1B engines and winglets; 737-800 is widely used for short to medium-haul flights; often called the 'workhorse of the skies'"
    ]
  },
  "Boeing 747": {
    name: "Boeing 747",
    image: "assets/images/aircraft2.png",
    facts: [
      "Nickname: Queen of the Skies",
      "Manufacturer: Boeing Commercial Airplanes",
      "First Flight: February 9, 1969",
      "In Service Since: January 22, 1970",
      "Variants: 747-100, 747-200, 747-300, 747-400, 747-8",
      "Specifications (747-400): Max Passengers: 660 (1-class), ~416 (typical 3-class), MTOW: ~875,000 lbs (~396,900 kg)",
      "Max Range: ~13,450 km (~8,360 mi)",
      "Cruising Speed: Mach 0.85 (~920 km/h or ~570 mph)",
      "Max Speed: Mach 0.92",
      "Wingspan: 64.4 m (~211 ft)",
      "Length: 70.7 m (~231.8 ft)",
      "Tail Height: 19.4 m (~63.8 ft)",
      "Engines: 4× General Electric CF6 or Pratt & Whitney PW4000",
      "Fuel Capacity: ~57,285 US gallons",
      "Top Airlines: Lufthansa, Korean Air, British Airways (now retired)",
      "Fun Facts: First wide-body aircraft ever built; featured an upper deck lounge; 747-8 is the longest passenger aircraft in the world; used by the U.S. President as Air Force One"
    ]
  },
  "Boeing 757": {
    name: "Boeing 757",
    image: "assets/images/aircraft3.png",
    facts: [
      "Manufacturer: Boeing Commercial Airplanes",
      "First Flight: February 19, 1982",
      "In Service Since: January 1, 1983",
      "Variants: 757-200, 757-300, 757F",
      "Specifications (757-200): Max Passengers: 239, MTOW: ~255,000 lbs (~115,700 kg), Max Range: ~7,222 km (~4,488 mi)",
      "Cruising Speed: Mach 0.8 (~850 km/h or ~528 mph)",
      "Max Speed: Mach 0.86",
      "Wingspan: 38.0 m (~125 ft)",
      "Length: 47.3 m (~155.3 ft)",
      "Tail Height: 13.6 m (~44.6 ft)",
      "Engines: 2× Rolls-Royce RB211 or Pratt & Whitney PW2000",
      "Fuel Capacity: ~11,276 US gallons",
      "Top Airlines: Delta Air Lines, United Airlines, FedEx (freighter version)",
      "Fun Facts: Popular for transcontinental and transatlantic flights; known for high-powered takeoffs and steep climbs; production retired in 2004"
    ]
  },
  "Boeing 767": {
    name: "Boeing 767",
    image: "assets/images/aircraft4.png",
    facts: [
      "Manufacturer: Boeing Commercial Airplanes",
      "First Flight: September 26, 1981",
      "In Service Since: September 8, 1982",
      "Variants: 767-200, 767-300, 767-400, 767F, KC-46 (military)",
      "Specifications (767-300ER): Max Passengers: ~375 (1-class), ~269 (2-class), MTOW: ~412,000 lbs (~186,880 kg)",
      "Max Range: ~11,070 km (~6,865 mi)",
      "Cruising Speed: Mach 0.8 (~851 km/h or ~530 mph)",
      "Wingspan: 47.6 m (~156.1 ft)",
      "Length: 54.9 m (~180.3 ft)",
      "Tail Height: 15.8 m (~52 ft)",
      "Engines: 2× General Electric CF6",
      "Fuel Capacity: ~24,140 US gallons",
      "Top Airlines: Delta Air Lines, UPS Airlines (freighter), FedEx Express",
      "Fun Facts: First wide-body with a two-person (glass) cockpit; used in both cargo and passenger markets; U.S. Air Force uses it as the KC-46 Pegasus tanker"
    ]
  },
  "Boeing 777": {
    name: "Boeing 777",
    image: "assets/images/aircraft5.png",
    facts: [
      "Nickname: Triple Seven",
      "Manufacturer: Boeing Commercial Airplanes",
      "First Flight: June 12, 1994",
      "In Service Since: June 7, 1995",
      "Variants: 777-200, 777-200ER, 777-300, 777-300ER, 777F, 777X",
      "Specifications (777-300ER): Max Passengers: 396, MTOW: ~775,000 lbs (~351,500 kg), Max Range: ~13,650 km (~8,481 mi)",
      "Cruising Speed: Mach 0.84 (~905 km/h or ~562 mph)",
      "Max Speed: Mach 0.89",
      "Wingspan: 64.8 m (~212.7 ft)",
      "Length: 73.9 m (~242.4 ft)",
      "Tail Height: 18.5 m (~60.8 ft)",
      "Engines: 2× GE90-115B",
      "Fuel Capacity: ~47,890 US gallons",
      "Top Airlines: Emirates, Qatar Airways, Singapore Airlines",
      "Fun Facts: First commercial aircraft to be 100% digitally designed; 777X features folding wingtips; twin-engine design with long-range ETOPS certifications"
    ]
  },
  "Boeing 787": {
    name: "Boeing 787",
    image: "assets/images/aircraft6.png",
    facts: [
      "Nickname: Dreamliner",
      "Manufacturer: Boeing Commercial Airplanes",
      "First Flight: December 15, 2009",
      "In Service Since: October 26, 2011",
      "Variants: 787-8, 787-9, 787-10",
      "Specifications (787-9): Max Passengers: 296 (typical 2-class), MTOW: ~560,000 lbs (~254,000 kg), Max Range: ~14,010 km (~8,700 mi)",
      "Cruising Speed: Mach 0.85 (~903 km/h or ~561 mph)",
      "Max Speed: Mach 0.90",
      "Wingspan: 60.1 m (~197 ft)",
      "Length: 63.0 m (~206.0 ft)",
      "Tail Height: 17.0 m (~55.8 ft)",
      "Engines: 2× Rolls-Royce Trent 1000 or GE GEnx",
      "Fuel Capacity: ~33,384 US gallons",
      "Top Airlines: All Nippon Airways (ANA), Qatar Airways, United Airlines",
      "Fun Facts: Constructed with composite materials; features larger windows and improved cabin pressure/humidity; uses ~20% less fuel than older aircraft"
    ]
  },
  "Airbus A320": {
    name: "Airbus A320",
    image: "assets/images/aircraft7.png",
    facts: [
      "Manufacturer: Airbus",
      "First Flight: February 22, 1987",
      "In Service Since: March 1988",
      "Variants: A318, A319, A320, A320neo, A321",
      "Specifications (A320neo): Max Passengers: ~194, MTOW: ~79,000 kg (~174,200 lbs), Max Range: ~6,300 km (~3,915 mi)",
      "Cruising Speed: Mach 0.78 (~828 km/h or ~514 mph)",
      "Wingspan: 35.8 m (~117.5 ft)",
      "Length: 37.6 m (~123.4 ft)",
      "Tail Height: 11.8 m (~38.7 ft)",
      "Engines: 2× CFM LEAP-1A or Pratt & Whitney PW1100G",
      "Fuel Capacity: ~26,730 liters (7,060 US gal)",
      "Top Airlines: American Airlines, IndiGo, China Eastern Airlines",
      "Fun Facts: First commercial aircraft with fully fly-by-wire controls; the A320 family is the world’s most flown series; A320neo offers up to 20% better fuel efficiency"
    ]
  },
  "Airbus A321": {
    name: "Airbus A321",
    image: "assets/images/aircraft8.png",
    facts: [
      "Manufacturer: Airbus",
      "First Flight: March 11, 1993",
      "In Service Since: 1994",
      "Variants: A321ceo, A321neo, A321XLR, A321LR",
      "Specifications (A321neo): Max Passengers: ~244, MTOW: ~97,000 kg (~213,800 lbs), Max Range: ~7,400 km (~4,598 mi)",
      "Cruising Speed: Mach 0.78",
      "Wingspan: 35.8 m (~117.5 ft)",
      "Length: 44.5 m (~146 ft)",
      "Tail Height: 11.8 m (~38.7 ft)",
      "Engines: 2× CFM LEAP-1A or PW1100G",
      "Fuel Capacity: ~32,940 liters (8,700 US gal)",
      "Top Airlines: American Airlines, Delta Air Lines, Turkish Airlines",
      "Fun Facts: A321XLR can perform transatlantic flights; it is the largest narrow-body in Airbus's lineup; shares type rating with the A320"
    ]
  },
  "Airbus A330": {
    name: "Airbus A330",
    image: "assets/images/aircraft9.png",
    facts: [
      "Nickname: Butter Machine",
      "Manufacturer: Airbus",
      "First Flight: November 2, 1992",
      "In Service Since: January 1994",
      "Variants: A330-200, A330-300, A330neo",
      "Specifications (A330-900neo): Max Passengers: ~287 (typical), ~440 (max), MTOW: ~251,000 kg (~553,400 lbs), Max Range: ~13,334 km (~8,287 mi)",
      "Cruising Speed: Mach 0.82",
      "Wingspan: 64 m (~210 ft)",
      "Length: 63.7 m (~209 ft)",
      "Tail Height: 17.4 m (~57.1 ft)",
      "Engines: 2× Rolls-Royce Trent 7000",
      "Fuel Capacity: ~139,090 liters (36,740 US gal)",
      "Top Airlines: Turkish Airlines, Qatar Airways, Delta Air Lines",
      "Fun Facts: Designed to complement the A340; the A330neo features new wings and efficient engines; very popular for medium- to long-haul flights"
    ]
  },
  "Airbus A340": {
    name: "Airbus A340",
    image: "assets/images/aircraft10.png",
    facts: [
      "Manufacturer: Airbus",
      "First Flight: October 25, 1991",
      "In Service Since: March 15, 1993",
      "Variants: A340-200, A340-300, A340-500, A340-600",
      "Specifications (A340-600): Max Passengers: ~380 (typical), ~475 (max), MTOW: ~380,000 kg (~837,800 lbs), Max Range: ~14,450 km (~8,980 mi)",
      "Cruising Speed: Mach 0.82",
      "Wingspan: 63.4 m (~208 ft)",
      "Length: 75.3 m (~247 ft)",
      "Tail Height: 17.3 m (~56.7 ft)",
      "Engines: 4× Rolls-Royce Trent 500",
      "Fuel Capacity: ~193,700 liters (51,100 US gal)",
      "Top Airlines: Lufthansa, South African Airways, Mahan Air",
      "Fun Facts: Features 4 engines with no ETOPS restrictions; was Airbus's first long-haul aircraft before the A350; the A340-600 was the longest aircraft before the 747-8"
    ]
  },
  "Airbus A350": {
    name: "Airbus A350",
    image: "assets/images/aircraft11.png",
    facts: [
      "Nickname: The long range leader",
      "Manufacturer: Airbus",
      "First Flight: June 14, 2013",
      "In Service Since: January 2015",
      "Variants: A350-900, A350-1000",
      "Specifications (A350-900): Max Passengers: ~350 (typical), ~440 (max), MTOW: ~280,000 kg (~617,300 lbs), Max Range: ~15,000 km (~9,321 mi)",
      "Cruising Speed: Mach 0.85",
      "Wingspan: 64.75 m (~212.5 ft)",
      "Length: 66.8 m (~219.1 ft)",
      "Tail Height: 17.05 m (~55.9 ft)",
      "Engines: 2× Rolls-Royce Trent XWB",
      "Fuel Capacity: ~141,000 liters (37,248 US gal)",
      "Top Airlines: Qatar Airways, Singapore Airlines, Cathay Pacific",
      "Fun Facts: Built with over 50% composite materials; directly competes with Boeing 787 and 777X; features a quieter, roomier cabin with advanced lighting"
    ]
  },
  "Airbus A380": {
    name: "Airbus A380",
    image: "assets/images/aircraft12.png",
    facts: [
      "Nickname: Superjumbo",
      "Manufacturer: Airbus",
      "First Flight: April 27, 2005",
      "In Service Since: October 25, 2007",
      "Variants: A380-800",
      "Specifications (A380-800): Max Passengers: 853 (all economy), ~555 (typical 3-class), MTOW: ~1,234,600 lbs (~560,000 kg), Max Range: ~15,200 km (~9,445 mi)",
      "Cruising Speed: Mach 0.85",
      "Wingspan: 79.75 m (~261.8 ft)",
      "Length: 72.7 m (~238.6 ft)",
      "Tail Height: 24.1 m (~79 ft)",
      "Engines: 4× Rolls-Royce Trent 900 or Engine Alliance GP7200",
      "Fuel Capacity: ~320,000 liters (84,535 US gal)",
      "Top Airlines: Emirates, Singapore Airlines, British Airways",
      "Fun Facts: Largest passenger aircraft in the world; features two full-length passenger decks; production ended in 2021 due to low demand"
    ]
  }
};

// aircraftContainer is to hold the specific aircraft information
const aircraftContainer = document.getElementById('aircraftContainer');
let currentIndex = 0;

/* In renderAircraft, we are checking which selected Aircraft has the user picked
   Then, we check if the data actually exists in selectedAircraft, and notify the
   user if that's not true. If there is data, then for both of the aircraft, the 
   program includes the image of the aircraft, the name of the aircraft, and each
   fact as a unordered list using .map. All of this data is found above in the
   const allAircraft. */
// Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
function renderAircraft(name) {
  const data = allAircraft[name];
  if (!data)
  {
    aircraftContainer.innerHTML = `<p>Aircraft not found.</p>`;
    return;
  }
  aircraftContainer.innerHTML = `
    <img src="${data.image}" alt="${data.name}">
    <h2>${data.name}</h2>
    <ul>
      ${data.facts.map(fact => `<li>${fact}</li>`).join('')}
    </ul>
  `;
}

/* The function updateNavigation() is useful for to navigate between the pages.
   Pages include Next (to go to the next aircraft), Previous (to go to the previous
   aircraft), and Quiz (to go to the Quiz). */
// Source: https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
function updateNavigation() {
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  prevBtn.style.display = currentIndex === 0 ? 'none' : 'inline-block';
  nextBtn.textContent = currentIndex === selectedAircraft.length - 1 ? 'Quiz' : 'Next';
}

/* Renders the currently selected aircraft based on currentIndex
   If an aircraft exists, it displays the data using renderAircraft()
   If not, it shows an error message and updates navigation controls */
// Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
function renderCurrentAircraft() {
  const aircraft = selectedAircraft[currentIndex];
  if (aircraft)
  {
    renderAircraft(aircraft);
  }
  else
  {
    aircraftContainer.innerHTML = `<p>Aircraft not found.</p>`;
  }
  updateNavigation();
}

/* This section of the code is useful for navigation as if the previous button is
   clicked, then it checks if the index is greater than 0, meaning the current displayed
   aircraft is the second one, so then once clicked it will display the first aircraft. */
document.getElementById('prevBtn').addEventListener('click', () => {
  if (currentIndex > 0)
  {
    currentIndex--;
    renderCurrentAircraft();
  }
});

/* This section of the code is useful for navigation as if the next button is clicked,
   then the next aircraft shows, and if the next aircraft doesn't exist (so index is 2),
   then the user will be taken to the Quiz. */
document.getElementById('nextBtn').addEventListener('click', () => {
  if (currentIndex < selectedAircraft.length - 1)
  {
    currentIndex++;
    renderCurrentAircraft();
  }
  else
  {
    window.location.href = 'quizMode.html';
  }
});

/* If the user selected exactly 2 aircraft, then the function is
   called to show the aircraft */
if (selectedAircraft.length === 2)
{
  renderCurrentAircraft();
}
/* If the user didn't select 2 aircraft, then it will tell the user
   to select two aircraft. */
else
{
  aircraftContainer.innerHTML = `<p>No aircraft selected. Please go back and choose two.</p>`;
}
