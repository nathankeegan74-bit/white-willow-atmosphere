const cards = document.querySelectorAll(".mode-card");

const activeModeTitle = document.getElementById("activeModeTitle");
const activeModeDescription = document.getElementById("activeModeDescription");
const activeTags = document.getElementById("activeTags");

const statusMode = document.getElementById("statusMode");
const panelMode = document.getElementById("panelMode");
const statusDetail = document.getElementById("statusDetail");

const modeDetails = {

  "Consultation":
    "Spotify: Consultation Playlist • Hue: Warm Ivory • Moodo: Consultation Routine",

  "Treatment":
    "Spotify: Treatment Playlist • Hue: Soft Clinical Warmth • Moodo: Treatment Blend",

  "Wood Flow":
    "Spotify: Wood Flow Playlist • Hue: Fresh Warm White • Moodo: Wood Flow Blend",

  "Fire Connection":
    "Spotify: Fire Connection Playlist • Hue: Amber Warmth • Moodo: Fire Blend",

  "Earth Centering":
    "Spotify: Earth Centering Playlist • Hue: Golden Warmth • Moodo: Earth Blend",

  "Metal Release":
    "Spotify: Metal Release Playlist • Hue: Clean Soft White • Moodo: Metal Blend",

  "Water Restoration":
    "Spotify: Water Restoration Playlist • Hue: Low Warm White • Moodo: Water Blend",

  "Deep Treatment":
    "Spotify: Deep Treatment Playlist • Hue: Deep Dim Warmth • Moodo: Deep Blend",

  "Meditation":
    "Spotify: Meditation Playlist • Hue: Minimal Warm Light • Moodo: Meditation Blend",

  "Woodland Calm":
    "Spotify: Woodland Calm Playlist • Hue: Forest Warmth • Moodo: Woodland Blend",

  "Energy Lift":
    "Spotify: Energy Lift Playlist • Hue: Clear Bright White • Moodo: Lift Blend",

  "White Willow Signature":
    "Spotify: Signature Playlist • Hue: White Willow Scene • Moodo: Signature Blend"
};

cards.forEach(card => {

  card.addEventListener("click", () => {

    cards.forEach(c => c.classList.remove("active"));

    card.classList.add("active");

    const mode = card.dataset.mode;
    const description = card.dataset.description;
    const tags = card.dataset.tags.split(",");

    activeModeTitle.textContent = mode;

    activeModeDescription.textContent = description;

    statusMode.textContent = mode;

    panelMode.textContent = `${mode} Active`;

    statusDetail.textContent = modeDetails[mode];

    activeTags.innerHTML = "";

    tags.forEach(tag => {

      const span = document.createElement("span");

      span.textContent = tag;

      activeTags.appendChild(span);

    });

  });

});

function updateClock() {

  const now = new Date();

  document.getElementById("currentTime").textContent =
    now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit"
    });

  document.getElementById("currentDate").textContent =
    now.toLocaleDateString([], {
      weekday: "long",
      day: "numeric",
      month: "long"
    });

}

setInterval(updateClock, 1000);

updateClock();

let seconds = 0;

function updateSessionTimer() {

  seconds++;

  const hrs =
    String(Math.floor(seconds / 3600)).padStart(2, "0");

  const mins =
    String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");

  const secs =
    String(seconds % 60).padStart(2, "0");

  document.getElementById("sessionTimer").textContent =
    `${hrs}:${mins}:${secs}`;

}

setInterval(updateSessionTimer, 1000);
