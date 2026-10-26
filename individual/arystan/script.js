"use strict";

// Task 6: counter with click events.
let counter = 0;

const counterValue = document.getElementById("counter-value");
const increaseButton = document.getElementById("increase-button");
const decreaseButton = document.getElementById("decrease-button");
const resetButton = document.getElementById("reset-button");

const updateCounter = () => {
  counterValue.textContent = counter;
};

increaseButton.addEventListener("click", () => {
  counter += 1;
  updateCounter();
});

decreaseButton.addEventListener("click", () => {
  counter = Math.max(0, counter - 1);
  updateCounter();
});

resetButton.addEventListener("click", () => {
  counter = 0;
  updateCounter();
});

// Task 7: live text preview.
const previewInput = document.getElementById("preview-input");
const previewText = document.getElementById("preview-text");
const characterCount = document.getElementById("character-count");
const clearPreviewButton = document.getElementById("clear-preview");

const updatePreview = () => {
  const text = previewInput.value;
  const count = text.length;

  previewText.textContent = text === "" ? "Your text will appear here" : text;
  characterCount.textContent = `${count} ${count === 1 ? "character" : "characters"}`;
};

previewInput.addEventListener("input", updatePreview);

clearPreviewButton.addEventListener("click", () => {
  previewInput.value = "";
  updatePreview();
  previewInput.focus();
});

// Task 8: change an image with a select control.
const imageOptions = {
  study: {
    src: "../../images/study-space.jpg",
    alt: "Library and study space at Astana IT University",
    caption: "AITU study space for reading and individual work.",
  },
  campus: {
    src: "../../images/campus-exterior.jpg",
    alt: "Entrance to the Astana IT University campus",
    caption: "The main entrance to the AITU campus.",
  },
  arena: {
    src: "../../images/cyber-arena.jpg",
    alt: "Cyber Arena sports hall at Astana IT University",
    caption: "AITU Cyber Arena for sports and student activities.",
  },
};

const imageSelect = document.getElementById("image-select");
const selectedImage = document.getElementById("selected-image");
const imageCaption = document.getElementById("image-caption");

const updateImage = () => {
  const selectedOption = imageOptions[imageSelect.value];
  selectedImage.src = selectedOption.src;
  selectedImage.alt = selectedOption.alt;
  imageCaption.textContent = selectedOption.caption;
};

imageSelect.addEventListener("change", updateImage);
updateImage();

// Task 9: keyboard events on one focused input.
const keyboardForm = document.getElementById("keyboard-form");
const keyboardInput = document.getElementById("keyboard-input");
const keyboardStatus = document.getElementById("keyboard-status");
const keyboardResult = document.getElementById("keyboard-result");

keyboardForm.addEventListener("submit", (event) => {
  event.preventDefault();
});

keyboardInput.addEventListener("keydown", (event) => {
  keyboardStatus.textContent = `Key pressed: ${event.key}`;

  if (event.key === "Enter") {
    event.preventDefault();
    const enteredText = keyboardInput.value.trim();
    keyboardResult.textContent = enteredText === ""
      ? "Enter some text first."
      : `Submitted text: ${enteredText}`;
  }

  if (event.key === "Escape") {
    keyboardInput.value = "";
    keyboardResult.textContent = "";
    keyboardStatus.textContent = "Key pressed: Escape. Input and result cleared.";
  }
});

// Task 10: equivalent mouse and focus events.
const eventCard = document.getElementById("event-card");
const eventInstruction = document.getElementById("event-instruction");

const addHighlight = (eventName) => {
  eventCard.classList.add("is-highlighted");
  eventInstruction.textContent = `Highlight added by the ${eventName} event.`;
};

const removeHighlight = (eventName) => {
  eventCard.classList.remove("is-highlighted");
  eventInstruction.textContent = `Highlight removed by the ${eventName} event.`;
};

eventCard.addEventListener("mouseenter", () => addHighlight("mouseenter"));
eventCard.addEventListener("mouseleave", () => removeHighlight("mouseleave"));
eventCard.addEventListener("focus", () => addHighlight("focus"));
eventCard.addEventListener("blur", () => removeHighlight("blur"));
