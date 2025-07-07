// Load saved fuel value from localStorage
// Default to 100 if no valid value is found
// Source: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
let storedFuel = Number(localStorage.getItem("fuelScore"));
if (isNaN(storedFuel))
{
  storedFuel = 100;
}

// Retrieve selected aircraft from localStorage
// Source: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
const selectedAircraft = JSON.parse(localStorage.getItem('selectedAircraft')) || [];

// All the aircraft data as an array
// Source: https://www.freecodecamp.org/news/javascript-array-of-objects-tutorial-how-to-create-update-and-loop-through-objects-using-js-array-methods/

const allAircraftArray = [
  {
    name: "Boeing 737",
    image: "assets/images/aircraft1.png",
    facts: [
      "Manufacturer: Boeing",
      "First Flight: April 9, 1967",
      "In Service Since: February 1968",
      "Variants: 737-100, 737-200, 737-300, 737-400, 737-500, 737-600, 737-700, 737-800, 737-900, 737 MAX series",
      "Max Passengers: 189",
      "MTOW: 79,000 kg (174,200 lbs)",
      "Max Range: ~5,765 km (~3,585 mi)",
      "Cruising Speed: Mach 0.785 (~839 km/h or ~521 mph)",
      "Max Speed: Mach 0.82 (~876 km/h or ~544 mph)",
      "Wingspan: 35.8 m (~117 ft)",
      "Length: 39.5 m (~129.6 ft)",
      "Tail Height: 12.5 m (~41.2 ft)",
      "Engines: 2× CFM International CFM56-7B",
      "Fuel Capacity: ~26,000 liters (6,875 US gal)",
      "Top Airlines: Southwest Airlines, Ryanair, American Airlines",
      "Fun Facts: Best-selling commercial jetliner in history; over 10,000 units delivered; 737 MAX introduced LEAP-1B engines and winglets; widely used for short to medium-haul flights; often called the 'workhorse of the skies'"
    ]
  },
  {
    name: "Boeing 747",
    image: "assets/images/aircraft2.png",
    facts: [
      "Nickname: Queen of the Skies",
      "Manufacturer: Boeing",
      "First Flight: February 9, 1969",
      "In Service Since: January 22, 1970",
      "Variants: 747-100, 747-200, 747-300, 747-400, 747-8",
      "Max Passengers: 660 (1-class), ~416 (typical 3-class)",
      "MTOW: ~875,000 lbs (~396,900 kg)",
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
  {
    name: "Boeing 757",
    image: "assets/images/aircraft3.png",
    facts: [
      "Manufacturer: Boeing",
      "First Flight: February 19, 1982",
      "In Service Since: January 1, 1983",
      "Variants: 757-200, 757-300, 757F",
      "Max Passengers: 239",
      "MTOW: ~255,000 lbs (~115,700 kg)",
      "Max Range: ~7,222 km (~4,488 mi)",
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
  {
    name: "Boeing 767",
    image: "assets/images/aircraft4.png",
    facts: [
      "Manufacturer: Boeing",
      "First Flight: September 26, 1981",
      "In Service Since: September 8, 1982",
      "Variants: 767-200, 767-300, 767-400, 767F, KC-46 (military)",
      "Max Passengers: ~375 (1-class), ~269 (2-class)",
      "MTOW: ~412,000 lbs (~186,880 kg)",
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
  {
    name: "Boeing 777",
    image: "assets/images/aircraft5.png",
    facts: [
      "Nickname: Triple Seven",
      "Manufacturer: Boeing",
      "First Flight: June 12, 1994",
      "In Service Since: June 7, 1995",
      "Variants: 777-200, 777-200ER, 777-300, 777-300ER, 777F, 777X",
      "Max Passengers: 396",
      "MTOW: ~775,000 lbs (~351,500 kg)",
      "Max Range: ~13,650 km (~8,481 mi)",
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
  {
    name: "Boeing 787",
    image: "assets/images/aircraft6.png",
    facts: [
      "Nickname: Dreamliner",
      "Manufacturer: Boeing",
      "First Flight: December 15, 2009",
      "In Service Since: October 26, 2011",
      "Variants: 787-8, 787-9, 787-10",
      "Max Passengers: 296 (typical 2-class)",
      "MTOW: ~560,000 lbs (~254,000 kg)",
      "Max Range: ~14,010 km (~8,700 mi)",
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
  {
    name: "Airbus A320",
    image: "assets/images/aircraft7.png",
    facts: [
      "Manufacturer: Airbus",
      "First Flight: February 22, 1987",
      "In Service Since: March 1988",
      "Variants: A318, A319, A320, A320neo, A321",
      "Max Passengers: ~194",
      "MTOW: ~79,000 kg (~174,200 lbs)",
      "Max Range: ~6,300 km (~3,915 mi)",
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
  {
    name: "Airbus A321",
    image: "assets/images/aircraft8.png",
    facts: [
      "Manufacturer: Airbus",
      "First Flight: March 11, 1993",
      "In Service Since: 1994",
      "Variants: A321ceo, A321neo, A321XLR, A321LR",
      "Max Passengers: ~244",
      "MTOW: ~97,000 kg (~213,800 lbs)",
      "Max Range: ~7,400 km (~4,598 mi)",
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
  {
    name: "Airbus A330",
    image: "assets/images/aircraft9.png",
    facts: [
      "Nickname: Butter Machine",
      "Manufacturer: Airbus",
      "First Flight: November 2, 1992",
      "In Service Since: January 1994",
      "Variants: A330-200, A330-300, A330neo",
      "Max Passengers: ~287 (typical), ~440 (max)",
      "MTOW: ~251,000 kg (~553,400 lbs)",
      "Max Range: ~13,334 km (~8,287 mi)",
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
  {
    name: "Airbus A340",
    image: "assets/images/aircraft10.png",
    facts: [
      "Manufacturer: Airbus",
      "First Flight: October 25, 1991",
      "In Service Since: March 15, 1993",
      "Variants: A340-200, A340-300, A340-500, A340-600",
      "Max Passengers: ~380 (typical), ~475 (max)",
      "MTOW: ~380,000 kg (~837,800 lbs)",
      "Max Range: ~14,450 km (~8,980 mi)",
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
  {
    name: "Airbus A350",
    image: "assets/images/aircraft11.png",
    facts: [
      "Nickname: The long range leader",
      "Manufacturer: Airbus",
      "First Flight: June 14, 2013",
      "In Service Since: January 2015",
      "Variants: A350-900, A350-1000",
      "Max Passengers: ~350 (typical), ~440 (max)",
      "MTOW: ~280,000 kg (~617,300 lbs)",
      "Max Range: ~15,000 km (~9,321 mi)",
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
  {
    name: "Airbus A380",
    image: "assets/images/aircraft12.png",
    facts: [
      "Nickname: Superjumbo",
      "Manufacturer: Airbus",
      "First Flight: April 27, 2005",
      "In Service Since: October 25, 2007",
      "Variants: A380-800",
      "Max Passengers: 853 (all economy), ~555 (typical 3-class)",
      "MTOW: ~1,234,600 lbs (~560,000 kg)",
      "Max Range: ~15,200 km (~9,445 mi)",
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
];

let isQuizActive = false;
let quizTimerId = null;

// Finds and returns the aircraft object from allAircraftArray that matches the given name
// Returns undefined if no match is found
// Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
function getAircraftByName(name) {
  return allAircraftArray.find(ac => ac.name === name);
}

// Picks a random aircraft name from the selectedAircraft array and returns its full aircraft object
// Returns null if no aircraft is selected
// Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomSelectedAircraft() {
  if (!selectedAircraft.length) {
    return null;
  }

  const name = selectedAircraft[Math.floor(Math.random() * selectedAircraft.length)];
  return getAircraftByName(name);
}

// Cleans up a property name by removing any text after a '(' character
// Trims extra whitespace and returns the normalized string
// Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim
function normalizeProp(prop) {
  const index = prop.indexOf('(');

  if (index !== -1) {
    prop = prop.substring(0, index);
  }

  return prop.trim();
}

// Generates 3 incorrect options (distractors) for a quiz question by finding matching facts from other aircraft
// Filters out the correct answer and ensures at least 3 distractors by adding "N/A" if needed
// Randomizes the distractor order and returns exactly 3 options
// Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

function getDistractors(prop, correctAnswer, currentName) {
  let candidates = [];
  
  if (prop.toLowerCase() === "manufacturer")
  {
    candidates = ["Boeing", "Airbus", "Cessna", "Lockheed Martin"];
  }
  else
  {
    allAircraftArray.forEach(ac => {
      if (ac.name === currentName)
      {
        return;
      }
      ac.facts.forEach(fact => {
        const parts = fact.split(':');
        if (parts.length < 2)
        {
          return;
        }
        
        const key = normalizeProp(parts[0]).toLowerCase();
        
        if (key === normalizeProp(prop).toLowerCase())
        {
          candidates.push(parts.slice(1).join(':').trim());
        }
      });
    });
  }

  candidates = [...new Set(candidates)].filter(val => val !== correctAnswer);
  while (candidates.length < 3)
  {
    candidates.push("N/A");
  }
  candidates.sort(() => Math.random() - 0.5);
  return candidates.slice(0, 3);
}

// Creates a multiple-choice quiz question using a random fact from a selected aircraft
// Generates distractors, shuffles options, and determines the correct answer's index
// Returns an object with question text, image, options array, and correct index
function generateQuizQuestion() {
  const aircraftObj = getRandomSelectedAircraft();
  if (!aircraftObj) 
  {
    return null;
  }

  const fact = aircraftObj.facts[Math.floor(Math.random() * aircraftObj.facts.length)];
  const parts = fact.split(':');
  if (parts.length < 2) 
  {
    return null;
  }

  const prop = parts[0].trim();
  const correctAnswer = parts.slice(1).join(':').trim();
  const questionText = `What is the ${prop} of ${aircraftObj.name}?`;
  
  let options = [correctAnswer, ...getDistractors(prop, correctAnswer, aircraftObj.name)];
  options.sort(() => Math.random() - 0.5);
  const correctIndex = options.indexOf(correctAnswer);
 
  return { question: questionText, image: aircraftObj.image, options, correctIndex };
}

// Sets up the canvas and context for drawing the flight simulation
// Initializes aircraft position, velocity, and fuel from localStorage
// Defines destination point and key tracking for aircraft movement
// Source: https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const aircraft = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  width: 40,
  height: 40,
  vx: 0,
  vy: 0,
  fuel: storedFuel
};

const startX = aircraft.x;
const startY = aircraft.y;
let moved = false;

const keys = {};

const kmDistance = Math.random() * (1000 - 500) + 500;
const pixelDistance = kmDistance * 5;
const randomAngle = Math.random() * Math.PI * 2;
const destination = {
  x: aircraft.x + pixelDistance * Math.cos(randomAngle),
  y: aircraft.y + pixelDistance * Math.sin(randomAngle)
};

// Updates the Heads-Up Display (HUD) with current fuel, airspeed, direction, and distance to destination
// Calculates direction using atan2 and adjusts angle to a 0–360° range
// Computes distance using the Pythagorean theorem and displays all values in the UI
// Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/atan2
function updateHUD() {
  document.getElementById("fuel-display").innerText = aircraft.fuel.toFixed(0) + "%";
  const airspeed = Math.sqrt(aircraft.vx ** 2 + aircraft.vy ** 2);
  document.getElementById("airspeed-display").innerText = Math.round(airspeed * 10);

  const dx = destination.x - aircraft.x;
  const dy = destination.y - aircraft.y;

  let bearing = Math.atan2(-dy, dx) * 180 / Math.PI;
  if (bearing < 0)
  {
    bearing += 360;
  }
  
  const sectors = [
    { name: 'E',  from: 337.5, to: 360 },
    { name: 'E',  from:   0,   to: 22.5 },
    { name: 'NE', from: 22.5,  to: 67.5 },
    { name: 'N',  from: 67.5,  to: 112.5 },
    { name: 'NW', from: 112.5, to: 157.5 },
    { name: 'W',  from: 157.5, to: 202.5 },
    { name: 'SW', from: 202.5, to: 247.5 },
    { name: 'S',  from: 247.5, to: 292.5 },
    { name: 'SE', from: 292.5, to: 337.5 }
  ];

  let directionName = 'E';
  for (const s of sectors)
  {
    if (bearing >= s.from && bearing < s.to)
    {
      directionName = s.name;
      break;
    }
  }
  document.getElementById("direction-display").innerText = directionName;

  const distance = Math.sqrt(dx * dx + dy * dy);
  document.getElementById("distance-display").innerText = Math.round(distance) + " km";
}

// Updates aircraft position and velocity based on WASD key input and applies friction for realistic movement
// Calculates speed to determine dynamic fuel consumption rate
// Prevents fuel from going negative and updates aircraft's x and y coordinates
// Source: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key
function update() {
  const acceleration = 0.2;
  const friction = 0.98;

  // Apply acceleration based on new directional logic
  // W + D -> NE, W + A -> NW, S + A -> SW, S + D -> SE
  // W + S -> no movement, cancels out
  // Single keys: W->N, S->S, A->W, D->E
  let up = keys["w"];
  let down = keys["s"];
  let left = keys["a"];
  let right = keys["d"];

  // Cancel out if both W and S pressed
  if (up && down) {
    // No vertical acceleration
  }
  else if (up && right)
  {
    // NE
    aircraft.vx += acceleration * Math.SQRT1_2;
    aircraft.vy -= acceleration * Math.SQRT1_2;
  }
  else if (up && left)
  {
    // NW
    aircraft.vx -= acceleration * Math.SQRT1_2;
    aircraft.vy -= acceleration * Math.SQRT1_2;
  }
  else if (down && left) 
  {
    // SW
    aircraft.vx -= acceleration * Math.SQRT1_2;
    aircraft.vy += acceleration * Math.SQRT1_2;
  } 
  else if (down && right)
  {
    // SE
    aircraft.vx += acceleration * Math.SQRT1_2;
    aircraft.vy += acceleration * Math.SQRT1_2;
  } 
  else if (up)
  {
    // N
    aircraft.vy -= acceleration;
  }
  else if (down)
  {
    // S
    aircraft.vy += acceleration;
  } 
  else if (left) 
  {
    // W
    aircraft.vx -= acceleration;
  } 
  else if (right) 
  {
    // E
    aircraft.vx += acceleration;
  }

  // Apply friction to slow down the aircraft smoothly
  aircraft.vx *= friction;
  aircraft.vy *= friction;

  // Update the aircraft's position
  aircraft.x += aircraft.vx;
  aircraft.y += aircraft.vy;

  // Track if the user has moved from the starting point
  if (!moved && (aircraft.x !== startX || aircraft.y !== startY))
  {
    moved = true;
  }

  // Calculate speed magnitude for fuel consumption
  const speedMagnitude = Math.sqrt(aircraft.vx ** 2 + aircraft.vy ** 2);
  const consumptionRate = speedMagnitude * 0.01;
  aircraft.fuel -= consumptionRate;

  // Ensure fuel doesn't go below zero
  if (aircraft.fuel < 0)
  {
    aircraft.fuel = 0;
    localStorage.setItem("fuelScore", aircraft.fuel); // Persist the fuel value
  }
}

// Renders the aircraft and destination (after 15s) with camera centered on the aircraft
// Rotates the aircraft sprite to match its velocity direction
// Uses canvas transformations and path drawing for smooth visual representation
// Source: https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const cameraX = aircraft.x - canvas.width / 2;
  const cameraY = aircraft.y - canvas.height / 2;

  if (elapsedTime > 15000)
  {
    const destScreenX = destination.x - cameraX;
    const destScreenY = destination.y - cameraY;
    ctx.save();
    ctx.beginPath();
    ctx.arc(destScreenX, destScreenY, 10, 0, Math.PI * 2);
    ctx.fillStyle = "#00FF00";
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#ffffff";
    ctx.stroke();
    ctx.restore();
  }

  // Calculate the tilt effect based on aircraft's speed
  const tilt = Math.min(Math.abs(aircraft.vx), Math.abs(aircraft.vy)) * 0.1; // Tilt based on speed

  // Apply translation and rotation
  ctx.save();
  ctx.translate(canvas.width / 2, canvas.height / 2);
  const angle = Math.atan2(aircraft.vy, aircraft.vx);
  ctx.rotate(angle + Math.PI / 2 + tilt); // Add tilt to rotation

  // Draw the aircraft
  ctx.beginPath();
  ctx.moveTo(0, -aircraft.height / 2);
  ctx.lineTo(-aircraft.width / 2, aircraft.height / 2);
  ctx.lineTo(aircraft.width / 2, aircraft.height / 2);
  ctx.closePath();
  ctx.fillStyle = "#FFCC00";
  ctx.fill();
  ctx.restore();

  // Draw info box next to the aircraft showing direction and distance
const infoBoxX = canvas.width / 2 + 50;
const infoBoxY = canvas.height / 2 - 20;

ctx.save();
ctx.fillStyle = "white";
ctx.fillRect(infoBoxX, infoBoxY, 160, 50);

ctx.fillStyle = "black";
ctx.font = "14px Inter, sans-serif";
ctx.fillText("Direction: " + document.getElementById("direction-display").innerText, infoBoxX + 10, infoBoxY + 20);
ctx.fillText("Distance: " + document.getElementById("distance-display").innerText, infoBoxX + 10, infoBoxY + 40);
ctx.restore();
}

let animationFrameId = null;
let elapsedTime = 0;

// Main game loop that updates aircraft motion, draws visuals, and refreshes the HUD
// Halts movement during a quiz and stops the game when fuel runs out, showing an emergency message
// Recursively calls itself using requestAnimationFrame for smooth animation
function gameLoop() {
  if (!isQuizActive)
  {
    update();
    elapsedTime += 16;
  } 
  else
  {
    aircraft.vx = 0;
    aircraft.vy = 0;
  }

  draw();
  updateHUD();

  // Compute and display scaled distance (5 pixels = 1 km)
  const dx = destination.x - aircraft.x;
  const dy = destination.y - aircraft.y;
  const rawDistance = Math.sqrt(dx * dx + dy * dy);
  const currentDistance = rawDistance / 5;
  document.getElementById('distance-display').innerText = currentDistance.toFixed(1) + ' km';

  // Win condition handler - update to 0.5 km instead of 10 km
  if (currentDistance < 0.5 && aircraft.fuel > 0)
  {
    winGame();
    return;
  }

  // emergency on fuel depletion
  if (aircraft.fuel <= 0)
  {
    const emergencyDiv = document.getElementById("emergency-message");
    emergencyDiv.style.display = "block";
    clearTimeout(quizTimeoutId);

    // Always re-add Return Home button
    let homeBtn = document.getElementById("homeBtn");
    if (!homeBtn)
    {
      homeBtn = document.createElement("button");
      homeBtn.id = "homeBtn";
      homeBtn.textContent = "Return Home";
      Object.assign(homeBtn.style, {
        display: "block",
        margin: "20px auto",
        padding: "10px 20px",
        fontSize: "1.2rem",
        backgroundColor: "#007aff",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer"
      });
      homeBtn.addEventListener("click", () => {
        window.location.href = "index.html";
      });
      emergencyDiv.appendChild(homeBtn);
    }
    return;
  }

  animationFrameId = requestAnimationFrame(gameLoop);
}

const quizPopup = document.getElementById("quizPopup");
const quizQuestionDiv = document.getElementById("quizQuestion");
const quizOptionsDiv = document.getElementById("quizOptions");

// Triggers a quiz popup with a random question and options from the selected aircraft
// Handles user interaction by awarding or penalizing fuel based on the selected answer
// Disables buttons after a selection or timeout and shows correct answer if wrong was picked
// Automatically closes the quiz popup after a delay and schedules the next quiz
// Includes a timeout penalty if the user doesn't answer in 5 seconds
// Source: https://developer.mozilla.org/en-US/docs/Web/Events/Creating_and_triggering_events
function triggerQuiz() {
  if (controlsPopup.style.display === 'flex')
  {
    scheduleQuizEvent();
    return;
  }

  // Don't show quiz questions until the player has moved
  if (!moved)
  {
    scheduleQuizEvent();
    return;
  }

  if (isQuizActive)
  {
    return;
  }

  isQuizActive = true;

  const quiz = generateQuizQuestion();
  if (!quiz)
  {
    isQuizActive = false;
    scheduleQuizEvent();
    return;
  }

  quizQuestionDiv.textContent = quiz.question;
  quizOptionsDiv.innerHTML = "";

  quiz.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.addEventListener("click", function() {
      if (quizTimerId !== null)
      {
        clearTimeout(quizTimerId);
        quizTimerId = null;
      }

      const btns = quizOptionsDiv.querySelectorAll("button");
      btns.forEach(b => b.disabled = true);

      if (index === quiz.correctIndex)
      {
        btn.style.backgroundColor = "#28a745";
        aircraft.fuel += 10;
      } 
      else 
      {
        btn.style.backgroundColor = "#dc3545";
        aircraft.fuel -= 5;
        Array.from(quizOptionsDiv.children)[quiz.correctIndex].style.backgroundColor = "#28a745";
      }
      updateHUD();
      setTimeout(() => {
        quizPopup.style.display = "none";
        isQuizActive = false;
        scheduleQuizEvent();
      }, 1500);
    });
    quizOptionsDiv.appendChild(btn);
  });

  quizPopup.style.display = "flex";

  quizTimerId = setTimeout(() => {
    const btns = quizOptionsDiv.querySelectorAll("button");
    btns.forEach(b => b.disabled = true);
    aircraft.fuel -= 5;
    updateHUD();
    setTimeout(() => {
      quizPopup.style.display = "none";
      isQuizActive = false;
      scheduleQuizEvent();
    }, 1500);
  }, 5000);
}

// Schedules the next quiz event with a random delay between 3 to 6 seconds
// Cancels scheduling if aircraft has no fuel left
// Uses setTimeout to call triggerQuiz after the delay
function scheduleQuizEvent() {
  if (aircraft.fuel <= 0)
  {
    return;
  }
  const delay = Math.random() * 3000 + 3000;
  quizTimeoutId = setTimeout(triggerQuiz, delay);
}

// Win condition handler
function winGame() {
  cancelAnimationFrame(animationFrameId);
  clearTimeout(quizTimeoutId);
  const winDiv = document.createElement('div');
  winDiv.id = 'win-message';

  Object.assign(winDiv.style, {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    background: '#fff',
    padding: '20px',
    borderRadius: '10px',
    textAlign: 'center',
    zIndex: '2000'
  });

  winDiv.innerHTML = `
    <h2>Congratulations!</h2>
    <p>You have reached the destination!</p>
    <button id="homeBtnWin">Return Home</button>
  `;

  document.body.appendChild(winDiv);
  document.getElementById('homeBtnWin').addEventListener('click', () => {
    window.location.href = 'index.html';
  });
}

animationFrameId = requestAnimationFrame(gameLoop);
scheduleQuizEvent();

// Tracks keydown and keyup events to control aircraft movement based on WASD keys
// Updates canvas dimensions dynamically when the browser window is resized
// Ensures the game remains responsive and full-screen across different screen sizes
// Source: https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event
window.addEventListener("keydown", function(e) {
  if (controlsPopup.style.display === 'flex')
  {
    return;
  }
  keys[e.key.toLowerCase()] = true;
});

window.addEventListener("keyup", function(e) {
  if (controlsPopup.style.display === 'flex')
  {
    return;
  }
  keys[e.key.toLowerCase()] = false;
});

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// Create Controls popup container
const controlsPopup = document.createElement("div");

controlsPopup.id = "controlsPopup";
Object.assign(controlsPopup.style, {
  position: "fixed",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0,0,0,0.5)",
  display: "none",
  alignItems: "center",
  justifyContent: "center",
  zIndex: "1000",
  flexDirection: "column"
});

controlsPopup.innerHTML = `
  <div style="background:#fff;padding:20px;border-radius:8px;max-width:400px;text-align:left">
    <h2>Controls</h2><br>
    <p><strong>Directional Controls:</strong></p>
    <ul style="margin-left:18px;">
      <li><strong>W + D:</strong> North-East (NE)</li>
      <li><strong>W + A:</strong> North-West (NW)</li>
      <li><strong>S + A:</strong> South-West (SW)</li>
      <li><strong>S + D:</strong> South-East (SE)</li>
      <li><strong>W + S:</strong> No direction (cancels out)</li>
      <li><strong>W:</strong> North (N)</li>
      <li><strong>S:</strong> South (S)</li>
      <li><strong>A:</strong> West (W)</li>
      <li><strong>D:</strong> East (E)</li>
    </ul><br>
    <p><strong>Flight Mode:</strong><br>
      Complete quizzes to gain fuel.<br>
      When a quiz is active, flight pauses.<br>
      Manage fuel to reach the destination.
    </p><br>

    <p><strong>Rules</strong><br>
      You have 5 seconds to answer each question<br>
      If you don't answer in 5 seconds, you get 5% off the fuel.<br>
      If you don't answer it correctly, you get 5% off the fuel.<br>
      If you answer it correctly, you get 10% additional fuel
    </p><br>
    <button id="closeControlsBtn" style="margin-top:10px">Close</button>
  </div>`;
  
document.body.appendChild(controlsPopup);

// close handler
document.getElementById("closeControlsBtn").addEventListener("click", () => {
  controlsPopup.style.display = "none";
});

// insert Controls button next to Back
const backBtn = document.getElementById("backBtn");
if (backBtn) 
{
  const controlsBtn = document.createElement("button");
  controlsBtn.id = "controlsBtn";
  controlsBtn.textContent = "Controls";
  controlsBtn.classList.add("back-button");
  controlsBtn.style.marginLeft = "10px";
  backBtn.parentNode.insertBefore(controlsBtn, backBtn.nextSibling);
  
  controlsBtn.addEventListener("click", () => {
    controlsPopup.style.display = "flex";
  });
}
