"use strict";

// Task 6
let counter = 0;
const counterValue = document.getElementById("counter-value");

function updateCounter() {
  counterValue.textContent = counter;
}

document.getElementById("increase-button").addEventListener("click", function () {
  counter++;
  updateCounter();
});

document.getElementById("decrease-button").addEventListener("click", function () {
  if (counter > 0) {
    counter--;
  }
  updateCounter();
});

document.getElementById("reset-button").addEventListener("click", function () {
  counter = 0;
  updateCounter();
});

// Task 7
const previewInput = document.getElementById("preview-input");
const previewText = document.getElementById("preview-text");
const characterCount = document.getElementById("character-count");

previewInput.addEventListener("input", function () {
  previewText.textContent = previewInput.value || "Your text will appear here";
  characterCount.textContent = previewInput.value.length;
});

document.getElementById("clear-preview").addEventListener("click", function () {
  previewInput.value = "";
  previewText.textContent = "Your text will appear here";
  characterCount.textContent = "0";
  previewInput.focus();
});

// Task 8
const sports = {
  basketball: {
    src: "images/basketball.png",
    alt: "Basketball players during a match",
    caption: "Basketball",
  },
  football: {
    src: "images/football.png",
    alt: "Football player taking a shot at the goal",
    caption: "Football",
  },
  tableTennis: {
    src: "images/table-tennis.png",
    alt: "Two players competing in table tennis",
    caption: "Table tennis",
  },
};

const imageSelect = document.getElementById("image-select");
const selectedImage = document.getElementById("selected-image");
const imageCaption = document.getElementById("image-caption");

imageSelect.addEventListener("change", function () {
  const sport = sports[imageSelect.value];
  selectedImage.src = sport.src;
  selectedImage.alt = sport.alt;
  imageCaption.textContent = sport.caption;
});

// Task 9
const keyboardInput = document.getElementById("keyboard-input");
const keyboardStatus = document.getElementById("keyboard-status");
const keyboardResult = document.getElementById("keyboard-result");

keyboardInput.addEventListener("keydown", function (event) {
  keyboardStatus.textContent = "Key pressed: " + event.key;

  if (event.key === "Enter") {
    event.preventDefault();
    keyboardResult.textContent = keyboardInput.value;
  }

  if (event.key === "Escape") {
    keyboardInput.value = "";
    keyboardResult.textContent = "";
  }
});

// Task 10
const eventCard = document.getElementById("event-card");
const eventInstruction = document.getElementById("event-instruction");

function addHighlight(eventName) {
  eventCard.classList.add("highlight");
  eventInstruction.textContent = eventName + " added the highlight.";
}

function removeHighlight(eventName) {
  eventCard.classList.remove("highlight");
  eventInstruction.textContent = eventName + " removed the highlight.";
}

eventCard.addEventListener("mouseenter", function () {
  addHighlight("mouseenter");
});

eventCard.addEventListener("mouseleave", function () {
  removeHighlight("mouseleave");
});

eventCard.addEventListener("focus", function () {
  addHighlight("focus");
});

eventCard.addEventListener("blur", function () {
  removeHighlight("blur");
});
