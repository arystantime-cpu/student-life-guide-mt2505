"use strict";

// Task 0: select elements and update visible content.
const visitorNameInput = document.getElementById("visitor-name");
const welcomeButton = document.getElementById("welcome-button");
const welcomeMessage = document.querySelector("#welcome-message");

welcomeButton.addEventListener("click", () => {
  const visitorName = visitorNameInput.value.trim();

  if (visitorName === "") {
    welcomeMessage.textContent = "Please enter your name so we can welcome you.";
    visitorNameInput.focus();
    return;
  }

  welcomeMessage.textContent = `Welcome, ${visitorName}! We hope this guide makes your AITU journey easier.`;
});

// Task 1: change the page appearance by toggling a CSS class.
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
  const darkThemeIsActive = document.body.classList.toggle("dark-theme");
  themeToggle.textContent = darkThemeIsActive ? "Switch to light theme" : "Switch to dark theme";
  themeToggle.setAttribute("aria-pressed", String(darkThemeIsActive));
});

// Task 2: attach one independent listener to every FAQ button.
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    const answerId = question.getAttribute("aria-controls");
    const answer = document.getElementById(answerId);
    const isExpanded = question.getAttribute("aria-expanded") === "true";
    const symbol = question.querySelector(".faq-symbol");

    question.setAttribute("aria-expanded", String(!isExpanded));
    answer.hidden = isExpanded;
    symbol.textContent = isExpanded ? "+" : "−";
  });
});

// Task 3: filter resource cards while the user types.
const resourceSearch = document.getElementById("resource-search");
const resourceCards = document.querySelectorAll(".guide-card");
const resultCount = document.getElementById("result-count");
const noResultsMessage = document.getElementById("no-results");

const updateResourceResults = () => {
  const searchText = resourceSearch.value.trim().toLowerCase();
  let visibleCount = 0;

  resourceCards.forEach((card) => {
    const title = card.querySelector("h3").textContent.toLowerCase();
    const matchesSearch = title.includes(searchText);

    card.hidden = !matchesSearch;
    if (matchesSearch) {
      visibleCount += 1;
    }
  });

  resultCount.textContent = `${visibleCount} ${visibleCount === 1 ? "resource" : "resources"} found`;
  noResultsMessage.hidden = visibleCount !== 0;
};

resourceSearch.addEventListener("input", updateResourceResults);

// Task 4: create and remove checklist items without reloading the page.
const checklistForm = document.getElementById("checklist-form");
const checklistInput = document.getElementById("checklist-input");
const checklistItems = document.getElementById("checklist-items");
const checklistFeedback = document.getElementById("checklist-feedback");
const itemCount = document.getElementById("item-count");

const updateItemCount = () => {
  const count = checklistItems.children.length;
  itemCount.textContent = `${count} ${count === 1 ? "item" : "items"}`;
};

checklistForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const itemText = checklistInput.value.trim();

  if (itemText === "") {
    checklistFeedback.textContent = "Please enter a checklist item before adding it.";
    checklistInput.focus();
    return;
  }

  const listItem = document.createElement("li");
  const itemLabel = document.createElement("span");
  const removeButton = document.createElement("button");

  itemLabel.textContent = itemText;
  removeButton.type = "button";
  removeButton.className = "remove-button";
  removeButton.textContent = "Remove";
  removeButton.setAttribute("aria-label", `Remove ${itemText}`);

  removeButton.addEventListener("click", () => {
    listItem.remove();
    checklistFeedback.textContent = `Removed “${itemText}”.`;
    updateItemCount();
  });

  listItem.append(itemLabel, removeButton);
  checklistItems.append(listItem);
  checklistInput.value = "";
  checklistFeedback.textContent = `Added “${itemText}”.`;
  updateItemCount();
  checklistInput.focus();
});
