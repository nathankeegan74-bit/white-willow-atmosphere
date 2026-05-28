const cards = document.querySelectorAll(".mode-card");

const activeModeTitle = document.getElementById("activeModeTitle");
const activeModeDescription = document.getElementById("activeModeDescription");
const activeTags = document.getElementById("activeTags");
const statusMode = document.getElementById("statusMode");
const panelMode = document.getElementById("panelMode");
const statusDetail = document.getElementById("statusDetail");

const modeDetails = {
  "Consultation": "Soft Ambient Piano • Warm ivory light • Moodo Consultation Base",
  "Treatment": "Treatment Playlist • Soft warm white • Moodo Treatment Blend",
  "Wood Flow": "Wood Flow Playlist • Fresh warm white • Moodo Wood Blend",
  "Fire Connection": "Fire Connection Playlist • Warm glow • Moodo Fire Blend",
  "Earth Centering": "Earth Centering Playlist • Golden warmth • Moodo Earth Blend",
  "Metal Release": "Metal Release Playlist • Clean soft white • Moodo Metal Blend",
  "Water Restoration": "Water Restoration Playlist • Low warm white • Moodo Water Blend",
  "Deep Treatment": "Deep Treatment Playlist • Dim warm white • Moodo Deep Blend",
  "Meditation": "Meditation Playlist • Minimal warm light • Moodo Meditation Blend",
  "Woodland Calm": "Woodland Playlist • Forest-soft warmth • Moodo Woodland Blend",
  "Energy Lift": "Energy Lift Playlist • Clear bright white • Moodo Lift Blend",
  "White Willow Signature": "Signature Playlist • House lighting scene • Moodo Signature Blend"
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

  const hrs = String(Math.floor(seconds / 3600)).padStart(2, "0");
  const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");

  document.getElementById("sessionTimer").textContent = `${hrs}:${mins}:${secs}`;
}

setInterval(updateSessionTimer, 1000);
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

  const hrs = String(Math.floor(seconds / 3600)).padStart(2, "0");
  const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");

  document.getElementById("sessionTimer").textContent =
    `${hrs}:${mins}:${secs}`;
}

setInterval(updateSessionTimer, 1000);
