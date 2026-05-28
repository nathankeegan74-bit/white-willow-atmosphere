const cards = document.querySelectorAll(".mode-card");

const activeModeTitle = document.getElementById("activeModeTitle");
const activeModeDescription = document.getElementById("activeModeDescription");
const activeTags = document.getElementById("activeTags");
const statusMode = document.getElementById("statusMode");
const panelMode = document.getElementById("panelMode");

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

  document.getElementById("sessionTimer").textContent =
    `${hrs}:${mins}:${secs}`;
}

setInterval(updateSessionTimer, 1000);
