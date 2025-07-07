// Aircraft data displayed on the page including the name, an info, and a description
const aircraftData = [
  {
    name: 'Boeing 737',
    info: 'A short-to-medium range, narrow-body, twin-engine jet.',
    description: 'Popular for its reliability and efficiency, the Boeing 737 is used worldwide for short flights.',
  },
  {
    name: 'Boeing 747',
    info: 'A large, long-range wide-body commercial jet.',
    description: 'Often known as the “Queen of the Skies,” it revolutionized long-distance air travel.',
  },
  {
    name: 'Boeing 757',
    info: 'A mid-size, narrow-body twin-engine jet.',
    description: 'Used for short to medium routes, the Boeing 757 is praised for its performance and range.',
  },
  {
    name: 'Boeing 767',
    info: 'A mid- to large-size, wide-body twin-engine jet.',
    description: 'The 767 is a versatile aircraft, used both for commercial flights and cargo transport.',
  },
  {
    name: 'Boeing 777',
    info: 'A long-range wide-body twin-engine jet.',
    description: 'Known for its spaciousness and fuel efficiency, the Boeing 777 is a favorite for international travel.',
  },
  {
    name: 'Boeing 787',
    info: 'A modern, long-range, wide-body twin-engine jet.',
    description: 'With advanced technology and improved fuel efficiency, the 787 is shaping the future of air travel.',
  },
  {
    name: 'Airbus A320',
    info: 'A short to medium range, narrow-body jet.',
    description: 'The Airbus A320 is one of the most popular commercial jets, known for its fuel efficiency and innovative technology.',
  },
  {
    name: 'Airbus A321',
    info: 'A stretched version of the A320, narrow-body jet for short to medium range routes.',
    description: 'The Airbus A321 offers increased capacity and range compared to the A320, making it a popular choice for high-density routes.',
  },
  {
    name: 'Airbus A330',
    info: 'A medium- to long-range wide-body twin-engine jet.',
    description: 'The Airbus A330 offers excellent range and capacity, making it a preferred choice for many international airlines.',
  },
  {
    name: 'Airbus A340',
    info: 'A long-range, four-engine wide-body jet.',
    description: 'The Airbus A340 is renowned for its long-range capabilities and reliability for international routes.',
  },
  {
    name: 'Airbus A350',
    info: 'A long-range, wide-body twin-engine jet.',
    description: 'The Airbus A350 features advanced aerodynamics and state-of-the-art technology, offering improved fuel efficiency and comfort.',
  },
  {
    name: 'Airbus A380',
    info: 'A double-deck, wide-body, four-engine jet.',
    description: 'The Airbus A380 is the world’s largest passenger airliner, known for its spacious interior and impressive range.',
  }
];

let selectedAircraft = []; // Empty array for the user to select aircraft and store

/* Dynamically generates aircraft cards using data from aircraftData array
   Each card displays image, name, info, description, and a selectable button
   Users can select up to 2 aircraft, with visual toggle and data tracking
   References:
   - Creating elements: https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
   - Appending elements: https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
   - Event listeners: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener */
document.addEventListener('DOMContentLoaded', function() {
  const container = document.querySelector('.aircraft-grid');

  aircraftData.forEach((plane, index) => {
    const card = document.createElement('div');
    card.classList.add('aircraft-card');
    card.setAttribute('data-aircraft', plane.name);

    const img = document.createElement('img');
    img.src = `assets/images/aircraft${index + 1}.png`;
    img.alt = plane.name;
    card.appendChild(img);

    const nameEl = document.createElement('h2');
    nameEl.textContent = plane.name;
    card.appendChild(nameEl);

    const infoEl = document.createElement('p');
    infoEl.textContent = plane.info;
    card.appendChild(infoEl);

    const infoSeparator = document.createElement('hr');
    infoSeparator.classList.add('separator');
    card.appendChild(infoSeparator);

    const descriptionEl = document.createElement('p');
    descriptionEl.textContent = plane.description;
    card.appendChild(descriptionEl);

    const descSeparator = document.createElement('hr');
    descSeparator.classList.add('separator');
    card.appendChild(descSeparator);

    const selectBtn = document.createElement('button');
    selectBtn.classList.add('select-btn');
    selectBtn.textContent = 'Select';
    card.appendChild(selectBtn);

	  // This occurs when the select button is clicked
    selectBtn.addEventListener('click', function() {
      const aircraft = card.getAttribute('data-aircraft');
      if (selectBtn.classList.contains('selected'))
      {
        selectBtn.classList.remove('selected');
        selectBtn.textContent = 'Select';
        selectedAircraft = selectedAircraft.filter(item => item !== aircraft);
      }
      else
      {
        if (selectedAircraft.length >= 2)
        {
          alert('You can only pick two aircraft.');
          return;
        }
        selectBtn.classList.add('selected');
        selectBtn.textContent = 'Deselect';
        selectedAircraft.push(aircraft);
      }
    });

    container.appendChild(card);
  });

  /* When the "Next" button is clicked, the program checks if the array selectedAircraft
	 has exactly two aircraft in it, and if not, then it alerts the user to pick only
	 two aircraft and returns there. But if that's true, then the selectedAircraft gets
	 set into localStorage to save for to use in learn mode and beyond. 
   References:
     - localStorage.setItem: https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem
     - JSON.stringify: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify */
  document.getElementById('nextBtn').addEventListener('click', function(e) {
    if (selectedAircraft.length !== 2)
    {
      alert('Please select exactly two aircraft.');
      e.preventDefault();
      return;
    }

    localStorage.setItem('selectedAircraft', JSON.stringify(selectedAircraft));
  });
});
