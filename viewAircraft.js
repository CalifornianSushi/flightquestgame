// This function helps with converting kilometers per hour to miles per hour
// Source: https://www.programiz.com/javascript/examples/km-mile
function kmhToMph(kmh)
{
	return (kmh * 0.621371).toFixed(0);
}

// This function helps with converting meters to feet
// Source: https://stackoverflow.com/questions/67360591/converting-metres-to-feet-and-vice-versa-in-javascript-using-tofixed-issue
function mToFt(m)
{
	return (m * 3.28084).toFixed(1);
}
 
/* This array is useful for storing all information about each
   aircraft to display */
const aircraftData = [
  {
	name: 'Boeing 737',
	info: 'A short-to-medium range, narrow-body, twin-engine jet.',
	description: 'Popular for its reliability and efficiency, the Boeing 737 is used worldwide for short flights.',
	speedKmh: 876,
	widthM: 35,
	heightM: 12,
	maxPassengers: 215
  },
  {
	name: 'Boeing 747',
	info: 'A large, long-range wide-body commercial jet.',
	description: 'Often known as the “Queen of the Skies,” it revolutionized long-distance air travel.',
	speedKmh: 988,
	widthM: 68.5,
	heightM: 19.4,
	maxPassengers: 660
  },
  {
	name: 'Boeing 757',
	info: 'A mid-size, narrow-body twin-engine jet.',
	description: 'Used for short to medium routes, the Boeing 757 is praised for its performance and range.',
	speedKmh: 876,
	widthM: 38,
	heightM: 11,
	maxPassengers: 239
  },
  {
	name: 'Boeing 767',
	info: 'A mid- to large-size, wide-body twin-engine jet.',
	description: 'The 767 is a versatile aircraft, used both for commercial flights and cargo transport.',
	speedKmh: 945,
	widthM: 47.6,
	heightM: 14.6,
	maxPassengers: 375
  },
  {
	name: 'Boeing 777',
	info: 'A long-range wide-body twin-engine jet.',
	description: 'Known for its spaciousness and fuel efficiency, the Boeing 777 is a favorite for international travel.',
	speedKmh: 892,
	widthM: 60.9,
	heightM: 18.5,
	maxPassengers: 396
  },
  {
	name: 'Boeing 787',
	info: 'A modern, long-range, wide-body twin-engine jet.',
	description: 'With advanced technology and improved fuel efficiency, the 787 is shaping the future of air travel.',
	speedKmh: 913,
	widthM: 60.1,
	heightM: 17.0,
	maxPassengers: 335
  },
  {
	name: 'Airbus A320',
	info: 'A short to medium range, narrow-body jet.',
	description: 'The Airbus A320 is one of the most popular commercial jets, known for its fuel efficiency and innovative technology.',
	speedKmh: 871,
	widthM: 35,
	heightM: 12,
	maxPassengers: 180
  },
  {
	name: 'Airbus A321',
	info: 'A stretched version of the A320, narrow-body jet for short to medium range routes.',
	description: 'The Airbus A321 offers increased capacity and range compared to the A320, making it a popular choice for high-density routes.',
	speedKmh: 871,
	widthM: 36,
	heightM: 12,
	maxPassengers: 236
  },
  {
	name: 'Airbus A330',
	info: 'A medium- to long-range wide-body twin-engine jet.',
	description: 'The Airbus A330 offers excellent range and capacity, making it a preferred choice for many international airlines.',
	speedKmh: 880,
	widthM: 60,
	heightM: 17,
	maxPassengers: 300
  },
  {
	name: 'Airbus A340',
	info: 'A long-range, four-engine wide-body jet.',
	description: 'The Airbus A340 is renowned for its long-range capabilities and reliability for international routes.',
	speedKmh: 933,
	widthM: 63,
	heightM: 17,
	maxPassengers: 380
  },
  {
	name: 'Airbus A350',
	info: 'A long-range, wide-body twin-engine jet.',
	description: 'The Airbus A350 features advanced aerodynamics and state-of-the-art technology, offering improved fuel efficiency and comfort.',
	speedKmh: 945,
	widthM: 64,
	heightM: 17,
	maxPassengers: 350
  },
  {
	name: 'Airbus A380',
	info: 'A double-deck, wide-body, four-engine jet.',
	description: 'The Airbus A380 is the world’s largest passenger airliner, known for its spacious interior and impressive range.',
	speedKmh: 1020,
	widthM: 80,
	heightM: 24,
	maxPassengers: 853
  }
];

const cardRefs = []; // Empty array of cards to display each aircraft in

// function to show miles per hour for the aircraft
function formatSpeedImperial(kmh)
{
  return kmhToMph(kmh) + ' mph';
}

// function to show kilometers per hour for the aircraft
function formatSpeedMetric(kmh)
{
  return kmh + ' km/h';
}

// function that shows the feet for the aircraft
function formatWidthImperial(m)
{
  return mToFt(m) + ' ft';
}

// function that shows the meters for the aircraft
function formatWidthMetric(m)
{
  return m + ' m';
}

// This function helps with storing all of the aircraft information into a new card
// Inspired by: https://stackoverflow.com/questions/226847/what-is-the-best-javascript-code-to-create-an-img-element
document.addEventListener('DOMContentLoaded', function() {
  const container = document.querySelector('.aircraft-grid');

  aircraftData.forEach((plane, index) =>
  {
	const card = document.createElement('div');
	card.classList.add('aircraft-card');

	const img = document.createElement('img');

	img.src = `assets/images/aircraft${index + 1}.png`;
	img.alt = plane.name;

	const nameEl = document.createElement('h2');
	nameEl.textContent = plane.name;

	const infoEl = document.createElement('p');
	infoEl.textContent = plane.info;

	const descriptionEl = document.createElement('p');
	descriptionEl.textContent = plane.description;

	const maxPassengersEl = document.createElement('p');
	const maxSpeedEl = document.createElement('p');
	const widthEl = document.createElement('p');
	const heightEl = document.createElement('p');

	maxPassengersEl.dataset.label = 'Max Passengers';
	maxPassengersEl.dataset.value = plane.maxPassengers;

	maxSpeedEl.dataset.label = 'Max Speed';
	maxSpeedEl.dataset.value = plane.speedKmh;

	widthEl.dataset.label = 'Width';
	widthEl.dataset.value = plane.widthM;

	heightEl.dataset.label = 'Height';
	heightEl.dataset.value = plane.heightM;

	maxPassengersEl.textContent = `Max Passengers: ${plane.maxPassengers}`;
	maxSpeedEl.textContent = `Max Speed: ${plane.speedKmh} km/h`;
	widthEl.textContent = `Width: ${plane.widthM} m`;
	heightEl.textContent = `Height: ${plane.heightM} m`;

	transformToPropertyRow(maxPassengersEl);
	transformToPropertyRow(maxSpeedEl);
	transformToPropertyRow(widthEl);
	transformToPropertyRow(heightEl);

	card.appendChild(img);
	card.appendChild(nameEl);
	card.appendChild(infoEl);

	const infoSeparator = document.createElement('hr');
	infoSeparator.classList.add('separator');
	card.appendChild(infoSeparator);

	card.appendChild(descriptionEl);

	const descSeparator = document.createElement('hr');
	descSeparator.classList.add('separator');
	card.appendChild(descSeparator);

	card.appendChild(maxPassengersEl);

	const mpSeparator = document.createElement('hr');
	mpSeparator.classList.add('separator');
	card.appendChild(mpSeparator);

	card.appendChild(maxSpeedEl);

	const msSeparator = document.createElement('hr');
	msSeparator.classList.add('separator');
	card.appendChild(msSeparator);

	card.appendChild(widthEl);

	const wSeparator = document.createElement('hr');
	wSeparator.classList.add('separator');
	card.appendChild(wSeparator);

	card.appendChild(heightEl);

	container.appendChild(card);

	cardRefs.push({ maxSpeedEl, widthEl, heightEl });
  });

  setAllToImperial();

  // Function to handle unit toggle
  // Reference: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event
  const toggle = document.getElementById('unitToggle');
  toggle.addEventListener('change', () => {
	if (toggle.checked)
	{
	  setAllToMetric();
	}
	else
	{
	  setAllToImperial();
	}
  });
});

/* Converts a plain text element into a styled property row with
   label and value. Splits the text content by ': ' to separate
   the label from the value. Updates the element's HTML to include
   styled span elements for each part */
// Reference: https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
function transformToPropertyRow(el) {
  el.classList.add('property-row');
  const text = el.textContent;
  const [label, value] = text.split(': ');
  el.innerHTML = `
	<span class="property-title">${label}:</span>
	<span class="property-value">${value}</span>
  `;
}

/* Updates all aircraft cards to show measurements in imperial units  
   Converts speed from km/h to mph and dimensions from meters to feet  
   Modifies the inner HTML of each stat element with the converted values */
// Reference: https://www.w3schools.com/howto/howto_js_speed_converter.asp
function setAllToImperial() {
  cardRefs.forEach((refs, i) => {
	const plane = aircraftData[i];

	const mph = formatSpeedImperial(plane.speedKmh);
	refs.maxSpeedEl.innerHTML = `
	  <span class="property-title">Max Speed:</span>
	  <span class="property-value">${mph}</span>
	`;

	const widthFt = formatWidthImperial(plane.widthM);
	refs.widthEl.innerHTML = `
	  <span class="property-title">Width:</span>
	  <span class="property-value">${widthFt}</span>
	`;

	const heightFt = formatWidthImperial(plane.heightM);
	refs.heightEl.innerHTML = `
	  <span class="property-title">Height:</span>
	  <span class="property-value">${heightFt}</span>
	`;
  });
}

/* Sets all aircraft card values to metric units using original data  
   Displays speed in km/h and dimensions in meters  
   Updates each stat element's HTML with the metric-formatted values */
   // Reference: https://www.w3schools.com/howto/howto_js_length_converter.asp
function setAllToMetric() {
  cardRefs.forEach((refs, i) => {
	const plane = aircraftData[i];

	refs.maxSpeedEl.innerHTML = `
	  <span class="property-title">Max Speed:</span>
	  <span class="property-value">${plane.speedKmh} km/h</span>
	`;

	refs.widthEl.innerHTML = `
	  <span class="property-title">Width:</span>
	  <span class="property-value">${plane.widthM} m</span>
	`;

	refs.heightEl.innerHTML = `
	  <span class="property-title">Height:</span>
	  <span class="property-value">${plane.heightM} m</span>
	`;
  });
}
