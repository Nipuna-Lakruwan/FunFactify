// Array of fun facts
const facts = [
  "🌌 Did you know? There are more stars in the universe than grains of sand on Earth.",
  "🐝 Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still edible!",
  "🧠 Your brain generates enough electricity to power a small light bulb when you're awake.",
  "🌱 Bamboo is the fastest-growing plant in the world. It can grow up to 35 inches in a single day!",
  "🐙 Octopuses have three hearts, and two of them stop beating when they swim.",
  "🎨 The color blue was so rare in ancient times that only royalty and the wealthy could afford it.",
  "🕒 The shortest war in history lasted only 38 to 45 minutes. It was between Britain and Zanzibar in 1896.",
  "🦄 Scotland’s national animal is a unicorn.",
  "🚀 A day on Venus is longer than a year on Venus. The planet takes 243 Earth days to rotate once, but only 225 Earth days to orbit the Sun.",
  "🥕 Carrots were originally purple, not orange! The orange variety was developed by Dutch farmers in the 16th century.",
  "🍎 Apples float because they are 25% air.",
  "🦎 Some species of lizards can drop their tails to escape predators—a process called 'autotomy.'",
  "🌊 Only 5% of the world’s oceans have been explored by humans.",
  "🦈 Sharks existed before trees. They have been swimming in Earth’s oceans for over 400 million years.",
  "🌎 Earth is the only planet in our solar system that isn’t named after a god or goddess.",
  "🐧 Penguins propose to their mates by presenting them with a perfect pebble.",
  "💎 Diamonds can form in space. They're found on meteorites and some distant planets!",
  "🕵️ The inventor of the stethoscope was too shy to put his ear to a woman’s chest, so he invented the tool in 1816.",
  "🍫 Chocolate was once used as currency by the ancient Aztecs.",
  "🚂 The Great Wall of China is not actually visible from space with the naked eye. That’s a common myth!"
];

// Theme rotation setup
const themes = ['theme-1', 'theme-2', 'theme-3'];
let themeIndex = 0;

// Rotate theme every 5 minutes
function rotateTheme() {
  themeIndex = (themeIndex + 1) % themes.length;
  document.body.className = themes[themeIndex];
}
setInterval(rotateTheme, 300000); // 5 minutes

// DOM elements
const factDisplay = document.getElementById('fun-fact');
const generateBtn = document.getElementById('generate-btn');
const historyList = document.getElementById('history-list');

// Generate a random fun fact
function generateFunFact() {
  const randomIndex = Math.floor(Math.random() * facts.length);
  const newFact = facts[randomIndex];

  // Update the display
  factDisplay.style.opacity = 0;
  setTimeout(() => {
      factDisplay.textContent = newFact;
      factDisplay.style.opacity = 1;
  }, 300);

  // Add to history
  const listItem = document.createElement('li');
  listItem.textContent = newFact;
  historyList.prepend(listItem);
}

// Event listener for button
generateBtn.addEventListener('click', generateFunFact);

// Initial theme setup
document.body.className = themes[themeIndex];