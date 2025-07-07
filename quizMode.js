const selectedAircraft = JSON.parse(localStorage.getItem('selectedAircraft')) || [];

/* Checks if the selected aircraft by the user is not exactly two. If this happens,
   the user cannot take the quiz */
if (selectedAircraft.length !== 2)
{
  document.getElementById('quizContainer').innerHTML =
    "<p>Please select exactly two aircraft before taking the quiz.</p>";
  throw new Error("Incorrect number of selected aircraft");
}

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

// Removes any text in parentheses from a string and trims extra spaces.
// Source: https://stackoverflow.com/questions/11888060/remove-text-between-parentheses-in-javascript
function normalizeProp(prop)
{
  var index = prop.indexOf('(');
  if (index !== -1)
  {
    prop = prop.substring(0, index);
  }

  return prop.trim();
}

// Randomly shuffles the elements of an array using the Fisher-Yates algorithm.
// Source: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(arr) {
  for (var i = arr.length - 1; i > 0; i--)
  {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
}

/* Collects all unique values for a given property from the aircraft data,
   excluding a specific aircraft if needed. It normalizes the property name
   and searches each aircraft's facts for matching keys, adding the
   corresponding values to a set. Finally, it returns the unique values
   as an array. */
// Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
const getValuesForProp = (prop, skipName = null) => {
  const norm = normalizeProp(prop).toLowerCase();
  const values = new Set();
  
  allAircraftArray.forEach(ac => {
    if (ac.name === skipName)
	  {
      return;
    }
    
    for (var i = 0; i < ac.facts.length; i++)
    {
      var fact = ac.facts[i];
      var parts = fact.split(':');
      var key = parts[0];
      var rest = parts.slice(1).join(':');
      
      if (normalizeProp(key).toLowerCase() === norm)
      {
      values.add(rest.trim());
      }
    }
  });
  return Array.from(values);
};

/* Generates up to three incorrect answer choices (distractors) for a given
   property, excluding the correct answer and current aircraft. If there
   aren’t enough initial candidates, it searches the full dataset for additional
   unique values. Finally, it shuffles the list and returns exactly three distractors. */
// Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
const getDistractors = (prop, correctAnswer, currentName) => {
  let candidates = getValuesForProp(prop, currentName).filter(val => val !== correctAnswer);
  if (candidates.length < 3)
  {
   var extra = getValuesForProp(prop);
   var newCandidates = [];

   for (var i = 0; i < extra.length; i++)
   {
    var val = extra[i];
    if (val !== correctAnswer && candidates.indexOf(val) === -1)
    {
      newCandidates.push(val);
      if (newCandidates.length === 3 - candidates.length)
      {
        break;
      }
    }
   }

   for (var j = 0; j < newCandidates.length; j++)
   {
	   candidates.push(newCandidates[j]);
   }
  }

  return shuffle(candidates).slice(0, 3);
};

/* Searches through all aircraft and returns the one with a matching name.
   Uses a simple loop to compare each aircraft's name. Returns undefined
   if no match is found. */
// Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
function getAircraftByName(name, aircraftArray) {
  for (var i = 0; i < aircraftArray.length; i++) {
    if (aircraftArray[i].name === name)
    {
      return aircraftArray[i];
    }
  }
  return undefined;
}

/* Builds quiz questions for each selected aircraft by randomly picking up
   to 5 facts per aircraft. For each fact, it creates a question with the
   correct answer and three shuffled distractors. Each question includes
   the text, image, options, and the index of the correct answer. */
// Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
var quizQuestions = [];

for (var i = 0; i < selectedAircraft.length; i++) {
  var name = selectedAircraft[i];
  var aircraft = getAircraftByName(name, allAircraftArray);
  if (!aircraft)
  {
    continue;
  }

  var facts = shuffle(aircraft.facts.slice());
  var limit = Math.min(5, facts.length);

  for (var j = 0; j < limit; j++) {
    var fact = facts[j];
    var parts = fact.split(':');
    if (parts.length < 2)
	  {
      continue;
    }

    var prop = parts[0].trim();
    var correctAnswer = parts.slice(1).join(':').trim();
    var questionText = "What is the " + prop + " of " + name + "?";
    var options = shuffle([correctAnswer].concat(getDistractors(prop, correctAnswer, name)));

    quizQuestions.push({
      question: questionText,
      image: aircraft.image,
      options: options,
      correctAnswer: options.indexOf(correctAnswer)
    });
  }
}

let currentQuestionIndex = 0;
let fuelScore = 0;

const fuelScoreDiv = document.getElementById('fuelScore');
const questionTextDiv = document.getElementById('questionText');
const questionImage = document.getElementById('questionImage');
const optionsContainer = document.getElementById('optionsContainer');
const nextBtn = document.getElementById('nextBtn');

const updateFuelScore = () => fuelScoreDiv.textContent = `Fuel: ${fuelScore}`;

/* Loads the current quiz question and displays its text, image (if available),
   and answer options. Hides the "Next" button and clears previous options.
   Creates a button for each option and adds a click listener to handle user selection. */
// Source: https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
const loadQuestion = () => {
  nextBtn.style.display = 'none';
  optionsContainer.innerHTML = '';
  const current = quizQuestions[currentQuestionIndex];
  questionTextDiv.textContent = current.question;
  if (current.image)
  {
    questionImage.src = current.image;
    questionImage.style.display = 'block';
  }
  else
  {
    questionImage.style.display = 'none';
  }
  current.options.forEach((option, i) => {
    const btn = document.createElement('button');
    btn.textContent = option;
    btn.addEventListener('click', () => handleOptionClick(btn, i));
    optionsContainer.appendChild(btn);
  });
};

/* Handles the user's answer selection by disabling all option buttons.
   Highlights the selected button green if correct, red if wrong, and shows
   the correct answer. Updates the fuel score and shows the "Next" button
   to continue the quiz. */
// Source: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
const handleOptionClick = (btn, selectedIndex) => {
  const btns = optionsContainer.querySelectorAll('button');
  btns.forEach(b => b.disabled = true);
  const current = quizQuestions[currentQuestionIndex];
  if (selectedIndex === current.correctAnswer)
  {
    fuelScore += 10;
    btn.style.backgroundColor = '#28a745';
  } 
  else
  {
    btn.style.backgroundColor = '#dc3545';
    btns[current.correctAnswer].style.backgroundColor = '#28a745';
  }
  updateFuelScore();
  nextBtn.style.display = 'block';
};

/* When the next button is clicked, the next question appears and the index increases
   to track how many questions are left till the next aircraft or the final result */
// Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
nextBtn.addEventListener('click', () => {
  currentQuestionIndex++;
  currentQuestionIndex < quizQuestions.length ? loadQuestion() : showFinalResult();
});

/* This shows after the quiz is completed and indicates your fuel score,
   as well as a way to go to flight mode */
// Source: https://developer.mozilla.org/en-US/docs/Web/API/Window/location
const showFinalResult = () => {
  document.getElementById('quizContainer').innerHTML = `
    <h2>Quiz Complete!</h2>
    <p>Your final Fuel Score is: ${fuelScore}</p>
    <button id="takeFlightBtn" class="take-flight-btn">Take Flight</button>
  `;
  document.getElementById('takeFlightBtn').addEventListener('click', () => {
    localStorage.setItem('fuelScore', fuelScore);
    window.location.href = 'flightMode.html';
  });
};

// Makes sure the fuel score is being updated and the questions are loaded
updateFuelScore();
quizQuestions.length ? loadQuestion() : document.getElementById('quizContainer').innerHTML =
  "<p>No quiz questions available. Please select aircraft first.</p>";
