// ====================== GAME DATA ======================

let nextButton;
let locationMarkers = [];



const memories = [
  {
    image: "images/memory1.jpg",
    location: { lat: 29.3439, lon: 110.4770 },
    questions: [
      { q: "In which year did we first meet?", keywords: ["2018"] },
      { q: "I had a bad first impression of you because I thought you were?", keywords: ["arrogant"]  },
      { q: "I began to think that you really meant it when you were chasing me because you did what, when, and where?", keywords: ["pick me up", "pick up", "picking up", "night", "Würzburg", "HBF", "late", "hbf", "picked up", "würzburg"] }
    ]
  },
  {
    image: "images/memory2.jpg",
    location: { lat: 30.6595, lon: 104.0549},
    questions: [
      { q: "Where did we visit for our first New Year's Eve?", keywords: ["München", "münchen", "munich"] },
      { q: "Which stuffed animal was our first toy?", keywords: ["scarlett", "Scarlett", "panda", "Panda", "IKEA"] },
      { q: "What did you eat on our first Chinese New Year that made me think you are probably not that smart?", keywords: ["chili", "Chili"] }
      ]
  },
  {
    image: "images/memory3.jpg",
    location: { lat: 51.0543, lon: 3.7174 },
    questions: [
      { q: "Where did you take me on my first birthday outside Würzburg?", keywords: ["veitshöchheim", "Veitshöchheim"] },
      { q: "What group of animals did we see on the road trip to Sweden?", keywords: ["deer", "Deer", "reindeer", "Reindeer"] },
      { q: "What did we eat on our first Christmas Eve?", keywords: ["raclette", "Raclette"] }
    ]
  },
  {
    image: "images/memory4.jpg",
    location: { lat: 50.0870, lon: 14.4208 },
    questions: [
      { q: "Which currency did you give me on our second Chinese New Year as a red pocket?", keywords: ["brasil", "Brasil", "Brazil", "BRL", "brazilian", "Brazilian", "Real", "real"] },
      { q: "Where (the exact address) is our first official home?", keywords: [ "Linienstr. 35", "linienstr. 35"]
       },
      { q: "Where (the exact address) is our second official home?", keywords: ["Kanalstr. 30", "Kanalstr.30"] }
    ]
  },
  {
    image: "images/memory5.jpg",
    location: { lat: 65.7730, lon: 17.2630
 },
    questions: [
      { q: "In which district did we have the pastel de nata in Lisbon?", keywords: ["belem", "Belem", "Belém", "belém"] },
      { q: "Where is the westernmost point of the European continent?", keywords: ["cabo da roca", "Cabo da Roca"] },
      { q: "Which book did you buy me in the most beautiful bookstore in Porto?", keywords: ["the little prince", "The Little Prince", "prince", "Prince", "Prinz", "príncipe"] }
    ]
  },
  {
    image: "images/memory6.jpg",
    location: { lat: 43.6815, lon: 7.2420 },
    questions: [
      { q: "In which year did we watch the first BVB game in the Nordrhein-Westfalen Stadion together?", keywords: ["2021"] },
      { q: "What kind of restaurant did we visit on our second anniversary dinner?", keywords: ["Da Clà", "da cla", "Da Cla", "italien", "Italien", "Italy", "italy"] },
      { q: "What did we do after the dinner?", keywords: ["movie", "film", "spider man", "Movie", "Film", "cinema", "Cinema"] }
    ]
  },
  {
    image: "images/memory7.jpg",
    location: { lat: 51.4925, lon: 7.4510 },
    questions: [
      { q: "What kind of flower did you buy me on Christmas Eve in Nice?", keywords: ["rose", "Rose"] },
      { q: "What is the name of the most famous casino in Monaco?", keywords: ["monte carlo", "Monte Carlo"] },
      { q: "What is the beach in Nice made of?", keywords: ["pebbles", "Pebbles", "stones", "Stones"] }
    ]
  },
  {
    image: "images/memory8.jpg",
    location: { lat: 47.4980, lon: 19.0630 },
    questions: [
      { q: "What sentence was written on my birthday cake when I was 26? (all uppercase)", keywords: ["HAPPEE BIRTDAE STEFANIE"] },
      { q: "From which city did we buy hydrangeas?", keywords: ["leeuwarden", "Leeuwarden"] },
      { q: "In which city did you finally invite me to eat lobster", keywords: ["london", "London"] }
    ]
  },
  {
    image: "images/memory9.jpg",
    location: { lat: 53.1839, lon: -6.1867 },
    questions: [
      { q: "We visited the Natural History Museum and brought whom back?", keywords: ["Willy", "willy"] },
      { q: "What did we dress as at our Halloween boat party", keywords: ["Cruella", "cruella", "Dalmatian", "dalmatian"] },
      { q: "What bird is especially loved in Qatar?", keywords: ["falcon", "Falcon"] }
    ]
  },
  {
    image: "images/memory10.jpg",
    location: { lat: 43.7396, lon: 7.4276 },
    questions: [
      { q: "Which game did we watch except for Germany vs. Costa Rica?", keywords: ["brazil vs. cameroon", "Brazil vs. Cameroon", "cameroon vs. brazil", "Cameroon vs. Brazil"] }, 
      { q: "We had an entertaining activity at home before our Christmas dinner. Do you remember what it was?", keywords: ["makeup", "Makeup", "Make-up", "make up", "do make up for me", "for me"] },
      { q: "After 3.5 months, I could finally go back home. From which airport did I fly?", keywords: ["schiphol", "Schiphol", "Amsterdam", "amsterdam"] }
    ]
  },
  {
    image: "images/memory11.jpg",
    location: { lat: 52.3663, lon: 4.8920 },
    questions: [
      { q: "We visited London in 2023 for the third time because of what?", keywords: ["harry potter", "Harry Potter", "Potter", "harry"] },
      { q: "On the first night we arrived in Tianjin, where did we go for a walk at night?", keywords: ["hai he", "see river", "see", "See river"]   },
      { q: "What animal did we also see, except for pandas or red pandas, in the Chengdu Panda Base?", keywords: ["peacock", "Peacock", "peacocks", "Peacocks"] }
    ]
  },
  {
    image: "images/memory12.jpg",
    location: { lat: 38.7139, lon: -9.1335 },
    questions: [
      { q: "What was the weather like when I arrived in Pittsburgh on the first night?", keywords: ["snow", "Snow"] },
      { q: "In which Disney park did we buy the Mickey and Minnie ears headband?", keywords: ["Magic Kingdom", "magic kingdom", "magic", "kingdom"] },
      { q: "What kind of color does Miami Beach have?", keywords: ["white", "White"] }
    ]
  },
  {
    image: "images/memory13.jpg",
    location: { lat: 46.6898, lon: 7.8406 },
    questions: [
      { q: "Which musical did we watch in London in 2024?", keywords: ["les miserables", "miserables", "Misérables"] },
      { q: "Irish coffee is not really coffee because it contains what?", keywords: ["whiskey", "Whiskey"] },
      { q: "What's the name of the Snow Mountain in Switzerland that we visited in 2024?", keywords: ["First", "first"] }
    ]
  },
  {
    image: "images/memory14.jpg",
    location: { lat: 51.4966, lon: -0.1722 },
    questions: [
      { q: "How long is Mimi's curing period?", keywords: ["84"] },
      { q: "What is the name of the spring that we visited in Budapest?", keywords: ["széchenyi", "Szechenyi", "Széchenyi"] },
      { q: "We tried many different types of beer in small glasses in Prague in one bar. How many in total were there?", keywords: ["8", "eight"] }
    ]
  },
  {
    image: "images/memory15.jpg",
    location: { lat: 25.2917, lon: 51.5336 },
    questions: [
      { q: "In the background of your WhatsApp profile photo, there are three stones. People call them the Three what?", keywords: ["sisters", "Sisters"] },
      { q: "In the bar in Phoenix Town, we had this amazing experience with a cat. What was he looking at at that time?", keywords: ["gecko", "lizard"] },
      { q: "Which important person went to Hunan University in Changsha?", keywords: ["mao zedong", "Mao Zedong", "mao", "Mao"] }
    ]
  },
  {
    image: "images/memory16.jpg",
    location: { lat: 40.7484, lon: -73.9857 },
    questions: [
      { q: "Which flavor of mustard did we choose in Monschau", keywords: ["honey", "Honey"] },
      { q: "What did we feed the elephant in Pairi Daiza", keywords: ["apple", "Apple"] },
      { q: "Why did we visit Strasbourg during Christmas time, because it is?", keywords: ["capital", "christmas"] }
    ]
  },
  {
    image: "images/memory17.jpg",
    location: { lat: 24.5470, lon: -81.8030 },
    questions: [
      { q: "How long have we been together?", keywords: ["6 years", "six years", "6yrs", "six yrs", "6 yr", "6"]  },
      { q: "Did we create amazing memories?", keywords: ["yes", "of course", "definitely", "absolutely", "sure"] },
      { q: "Do we wanna create more memories and travel around world?", keywords: ["yes", "of course", "definitely", "absolutely", "sure"] }
]
  }
   ]


// ====================== STATE ======================

let currentIndex = 0;
let currentQuestionIndex = 0;
let score = 0;
let currentTiles = [];

let map;

// DOM elements
let questionTextEl, answerInputEl, feedbackEl, distanceResultEl;
let scoreValueEl, memoryCounterEl, answerButtonEl;

// ====================== INIT ======================

window.addEventListener("DOMContentLoaded", () => {
  questionTextEl = document.getElementById("question-text");
  answerInputEl = document.getElementById("answer-input");
  feedbackEl = document.getElementById("feedback");
  distanceResultEl = document.getElementById("distance-result");
  scoreValueEl = document.getElementById("score-value");
  memoryCounterEl = document.getElementById("memory-counter");
  answerButtonEl = document.getElementById("answer-button");
  nextButton = document.getElementById("next-button");

  answerButtonEl.addEventListener("click", submitAnswer);
  nextButton.addEventListener("click", () => {

  // If location has been guessed correctly → move to next memory
  if (window.waitingForNextMemory) {
    window.waitingForNextMemory = false;
    nextMemory();
    return;
  }

  // Otherwise → this is a question step
  nextQuestion();
});


  answerInputEl.addEventListener("keydown", (e) => {
    if (e.key === "Enter") submitAnswer();
  });

  initMap();
  loadMemory(currentIndex);
});

// ====================== MAP (LEAFLET) ======================

function initMap() {
  map = L.map("map", { worldCopyJump: true }).setView([20, 0], 2);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 6,
    minZoom: 2
  }).addTo(map);

  map.on("click", (e) => {
    onMapClick(e.latlng.lat, e.latlng.lng);
  });
}

function onMapClick(lat, lon) {
  const tilesRevealed = currentTiles.some(t => t.classList.contains("revealed"));
  if (!tilesRevealed) {
    distanceResultEl.textContent = "Reveal at least one tile first ❤️";
    return;
  }
  evaluateGuess(lat, lon);
}

// ====================== MEMORY + QUESTIONS ======================

function loadMemory(index) {
  const memory = memories[index];

  createPuzzleTiles(memory.image);

  currentQuestionIndex = 0;
  feedbackEl.textContent = "";
  distanceResultEl.textContent = "";
  answerInputEl.value = "";

  // Make sure input appears again for new memory
  answerInputEl.classList.remove("hidden-input");
  answerButtonEl.classList.remove("hidden-input");
  nextButton.classList.add("hidden");


  answerInputEl.disabled = false;
  answerButtonEl.disabled = false;
  nextButton.classList.add("hidden");

  memoryCounterEl.textContent = `Memory ${index + 1} / ${memories.length}`;

  loadQuestion();
}


function loadQuestion() {
  const memory = memories[currentIndex];

if (currentQuestionIndex >= memory.questions.length) {
    questionTextEl.textContent = "All clues done — now guess the location 🗺️❤️";

    // Hide input + submit button
    answerInputEl.classList.add("hidden-input");
    answerButtonEl.classList.add("hidden-input");
    nextButton.classList.add("hidden");

    return;
}


  questionTextEl.textContent = memory.questions[currentQuestionIndex].q;
}

function submitAnswer() {
  const memory = memories[currentIndex];

  if (currentQuestionIndex >= memory.questions.length) return;

  const userAnswer = answerInputEl.value.trim().toLowerCase();
  if (!userAnswer) {
    feedbackEl.textContent = "Write something for me 🥺";
    return;
  }

 const qObj = memory.questions[currentQuestionIndex];

  if (isMeaningCorrect(userAnswer, qObj.keywords)) {
    feedbackEl.textContent = "Correct! A new memory tile appears 💕";
    revealOneTile();

    score++;
    updateScoreDisplay();

    answerButtonEl.disabled = true;
    nextButton.classList.remove("hidden");
  } else {
    feedbackEl.textContent = "Not exactly… try again 💗";
  }
}
function normalizeText(str) {
  return str
    .toLowerCase()
    .trim()
    .replace(/\s+/g, " ");
}

function isMeaningCorrect(userAnswer, keywords) {
  const text = normalizeText(userAnswer);

  return keywords.some(word =>
    text.includes(normalizeText(word))
  );
}




function nextQuestion() {
  currentQuestionIndex++;
  nextButton.classList.add("hidden");
  answerButtonEl.disabled = false;
  answerInputEl.disabled = false;
  answerInputEl.value = "";
  loadQuestion();
}

// ====================== PUZZLE TILES ======================

function createPuzzleTiles(imageURL) {
  const grid = document.getElementById("puzzle-grid");
  grid.innerHTML = "";
  currentTiles = [];

  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      const tile = document.createElement("div");
      tile.classList.add("puzzle-tile");

      tile.dataset.image = imageURL;
      tile.dataset.row = row;
      tile.dataset.col = col;

      grid.appendChild(tile);
      currentTiles.push(tile);
    }
  }
}

function revealOneTile() {
  const hiddenTiles = currentTiles.filter(t => !t.classList.contains("revealed"));
  if (hiddenTiles.length === 0) return;

  const tile = hiddenTiles[Math.floor(Math.random() * hiddenTiles.length)];
  const img = tile.dataset.image;
  const row = tile.dataset.row;
  const col = tile.dataset.col;

  tile.style.backgroundImage = `url(${img})`;
  tile.style.backgroundPosition = `${col * 50}% ${row * 50}%`;

  tile.classList.add("revealed");
}

function revealAllTiles() {
  currentTiles.forEach(tile => {
    const img = tile.dataset.image;
    const row = tile.dataset.row;
    const col = tile.dataset.col;

    tile.style.backgroundImage = `url(${img})`;
    tile.style.backgroundPosition = `${col * 50}% ${row * 50}%`;

    tile.classList.add("revealed");
  });
}

// ====================== GUESS EVALUATION ======================

function evaluateGuess(lat, lon) {
  const memory = memories[currentIndex];

  const d = haversine(lat, lon, memory.location.lat, memory.location.lon);
  const rounded = Math.round(d);

  distanceResultEl.textContent = `Your guess is ${rounded} km away.`;

if (d <= 100) {
    revealAllTiles();
    score += 3;
    updateScoreDisplay();

    distanceResultEl.textContent += " 🎉 You found it!";
    feedbackEl.textContent = "Perfect! You found where we were 🥹❤️";

    // === ADD PUSH PIN ===
const marker = L.marker(
  [memory.location.lat, memory.location.lon],
  { title: "Our memory ❤️" }
).addTo(map);

locationMarkers.push(marker);

    // Optional: gently center map on the marker
    map.setView([memory.location.lat, memory.location.lon], 5);

    // Pause game until Next
    answerInputEl.classList.add("hidden-input");
    answerButtonEl.classList.add("hidden-input");
    nextButton.classList.remove("hidden");

    map.off("click");
    window.waitingForNextMemory = true;

    return;
}


}


  function nextMemory() {

    currentIndex++;

    if (currentIndex < memories.length) {
      loadMemory(currentIndex);

      // Re-enable map clicking
      map.on("click", (e) => {
        onMapClick(e.latlng.lat, e.latlng.lng);
      });

      if (locationMarkers.length > 0) {
  const group = L.featureGroup(locationMarkers);
  map.fitBounds(group.getBounds().pad(0.4));
}

    } else {
      endGame();
    }
  }


// Haversine distance
function haversine(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const toRad = v => v * Math.PI / 180;

  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);

  const a = Math.sin(dLat/2)**2 +
            Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
            Math.sin(dLon/2)**2;

  return R * 2 * Math.asin(Math.sqrt(a));
}

// ====================== END GAME ======================

function endGame() {
  alert(`You finished all our memories! 🥹❤️\nFinal score: ${score} points`);
  questionTextEl.textContent = "You finished the game! Time for your real-world gifts 🎁";
}

function updateScoreDisplay() {
  scoreValueEl.textContent = score;
}
