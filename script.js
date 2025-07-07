/* In the event listener, when the user scrolls down and the y-position
   is 300 from the very top (offset), then the button to automatically
   go back up shows. If that is not true, then the button shouldn't show,
   since the user is very close to the top. */
// Reference: https://www.javascripttutorial.net/javascript-dom/javascript-scroll-events/
window.addEventListener('scroll', function()
{
  var btn = document.getElementById('back-to-top');
  if(window.pageYOffset > 300)
  {
	  btn.classList.add('show');
  }
  else
  {
	  btn.classList.remove('show');
  }
});

/* Adds a smooth scroll-to-top effect when the "Back to Top"
   button is clicked. Prevents the default anchor behavior
   to avoid page jump. Uses window.scrollTo with smooth behavior
   for a better UX */ 
// Reference: https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo
document.getElementById('back-to-top').addEventListener('click', function(e)
{
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

const stepButtons = document.querySelectorAll('.step-button');
const stepHeader = document.getElementById('step-header');
const stepDescription = document.getElementById('step-description');

/* Array of information for each step located in the landing page to
   describe to the user about what is the game */
const steps =
{
  1: { header: 'Step 1: Choose Your Aircraft', description: 'Begin your adventure by selecting your preferred aircraft from a detailed database that includes models from Boeing and Airbus. In this step, you explore comprehensive information on each aircraft’s specifications, design, and performance characteristics. This selection not only personalizes your experience but also sets the foundation for your learning journey by aligning the game’s challenges with the unique traits of your chosen aircraft. Aircraft types include B737, B747, B757, B767, B777, B787, A320, A321, A330, A340, A350, A380' },
  2: { header: 'Step 2: Learn Mode', description: 'Enter Learn Mode to immerse yourself in the world of aviation through interactive content. Here, you study detailed descriptions, technical specifications, and historical facts about your chosen aircraft. The mode is designed to build your knowledge step by step, offering clear explanations and engaging visuals that help you understand essential aviation concepts in an easy-to-digest manner.' },
  3: { header: 'Step 3: Quiz Mode', description: 'Transition into Quiz Mode to test and reinforce the knowledge you’ve gathered. In this mode, you’re presented with flash-card style questions based on aircraft images, descriptions, and specifications. Each correct answer rewards you with points that boost your in-game fuel, making the learning process both educational and exciting. This step challenges you to recall details, ensuring that your grasp of aviation facts strengthens as you progress.' },
  4: { header: 'Step 4: Flight Mode', description: 'Take to the skies in Flight Mode, where your earned points transform into fuel and advantages that propel you through a dynamic flight experience. Control your aircraft’s movement using intuitive keyboard or mouse inputs, navigating through a realistic virtual environment. As you fly, you manage key aircraft features like airspeed, gear, and flaps, making real-time decisions that reflect the challenges of actual aviation, and deepening your engagement with the game.' },
};

// The below helps with making sure the Steps buttons work.
// Reference: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
stepButtons.forEach(button => {
  button.addEventListener('click', () => {
    stepButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    const step = button.getAttribute('data-step');
    stepHeader.textContent = steps[step].header;
    stepDescription.textContent = steps[step].description;
  });
});
