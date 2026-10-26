"use strict";

// Task 6
let counter = 0;
const counterValue = document.getElementById("counter-value");

function showCounter() {
  counterValue.textContent = counter;
}

document.getElementById("increase-button").addEventListener("click", function () {
  counter += 1;
  showCounter();
});

document.getElementById("decrease-button").addEventListener("click", function () {
  if (counter > 0) {
    counter -= 1;
  }
  showCounter();
});

document.getElementById("reset-button").addEventListener("click", function () {
  counter = 0;
  showCounter();
});

// Task 7
const previewInput = document.getElementById("preview-input");
const previewText = document.getElementById("preview-text");
const characterCount = document.getElementById("character-count");

function updatePreview() {
  const text = previewInput.value;
  previewText.textContent = text || "Your text will appear here";
  characterCount.textContent = text.length;
}

previewInput.addEventListener("input", updatePreview);

document.getElementById("clear-preview").addEventListener("click", function () {
  previewInput.value = "";
  updatePreview();
  previewInput.focus();
});

// Task 8
const motorcycles = {
  r6: {
    src: "images/yamaha-r6.png",
    alt: "Black Yamaha R6 motorcycle",
    caption: "Yamaha R6",
  },
  r7: {
    src: "images/yamaha-r7.png",
    alt: "Black Yamaha R7 motorcycle",
    caption: "Yamaha R7",
  },
  r125: {
    src: "images/yamaha-r125.png",
    alt: "Black Yamaha R125 motorcycle",
    caption: "Yamaha R125",
  },
};

const imageSelect = document.getElementById("image-select");
const selectedImage = document.getElementById("selected-image");
const imageCaption = document.getElementById("image-caption");

imageSelect.addEventListener("change", function () {
  const motorcycle = motorcycles[imageSelect.value];
  selectedImage.src = motorcycle.src;
  selectedImage.alt = motorcycle.alt;
  imageCaption.textContent = motorcycle.caption;
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
