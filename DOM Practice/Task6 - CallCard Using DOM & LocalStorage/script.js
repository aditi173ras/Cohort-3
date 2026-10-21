//Selection
const formContainer = document.querySelector(".form-container");
const form = document.querySelector("form");
const addBtn = document.querySelector("#addBtn");
const closeBtn = document.querySelector("#closeBtn");
let createBtn = document.querySelector('button[type="submit"]');
let upBtn = document.querySelector("#upBtn");
let downBtn = document.querySelector("#downBtn");
let stack = document.querySelector(".stack");
let rightColors = document.querySelectorAll(".right-colors");

let imageURL = document.querySelector(
  'input[placeholder="https://example.com/photo.jpg"]',
);
let fullName = document.querySelector('input[placeholder="Enter full name"]');
let homeTown = document.querySelector('input[placeholder="Enter home town"]');
let purpose = document.querySelector(
  'input[placeholder="e.g., Quick appointment note"]',
);
let category = document.querySelectorAll('input[name="category"]');

addBtn.addEventListener("click", function () {
  formContainer.style.display = "initial";
});

closeBtn.addEventListener("click", function () {
  formContainer.style.display = "none";
});

function savetoLocalStorage(obj) {
  if (localStorage.getItem("tasks") === null) {
    let oldtasks = [];
    oldtasks.push(obj);
    localStorage.setItem("tasks", JSON.stringify(oldtasks));
  } else {
    let oldtasks = localStorage.getItem("tasks");
    oldtasks = JSON.parse(oldtasks);
    oldtasks.push(obj);
    localStorage.setItem("tasks", JSON.stringify(oldtasks));
  }
}

form.addEventListener("submit", function (elem) {
  elem.preventDefault();

  let selectedCategory = "";

  category.forEach(function (dets) {
    if (dets.checked) {
      selectedCategory = dets.value;
    }
  });

  savetoLocalStorage({
    imageURL: imageURL.value,
    fullName: fullName.value,
    homeTown: homeTown.value,
    purpose: purpose.value,
    category: selectedCategory,
  });

  form.reset();
  formContainer.style.display = "none";
  showCards();
});

function showCards() {
  stack.innerHTML = "";
  let alltasks = JSON.parse(localStorage.getItem("tasks"));

  alltasks.forEach((task) => {
    // Main card
    let card = document.createElement("div");
    card.classList.add("card");

    // Profile
    let profile = document.createElement("div");
    profile.classList.add("profile");

    let img = document.createElement("img");
    img.src = task.imageURL;

    // Heading
    let heading = document.createElement("h2");
    heading.textContent = task.fullName;

    // Details
    let details = document.createElement("div");
    details.classList.add("details");

    // Home town
    let homeTown = document.createElement("p");

    let homeTownLabel = document.createElement("span");
    homeTownLabel.textContent = "Home town";

    let homeTownValue = document.createElement("span");
    homeTownValue.textContent = task.homeTown;

    // Purpose
    let purpose = document.createElement("p");

    let purposeLabel = document.createElement("span");
    purposeLabel.textContent = "Purpose";

    let purposeValue = document.createElement("span");
    purposeValue.textContent = task.purpose;

    // Actions
    let actions = document.createElement("div");
    actions.classList.add("actions");

    let callBtn = document.createElement("button");
    let icon = document.createElement("i");
    icon.classList.add("ri-phone-line");
    callBtn.append(icon);
    callBtn.append(" Call");

    let messageBtn = document.createElement("button");
    messageBtn.classList.add("msgBtn");
    messageBtn.textContent = "Message";

    // Appending elements
    profile.append(img);

    homeTown.append(homeTownLabel, homeTownValue);
    purpose.append(purposeLabel, purposeValue);

    details.append(homeTown, purpose);
    actions.append(callBtn, messageBtn);

    card.append(profile, heading, details, actions);

    document.querySelector(".stack").append(card);
  });
}
showCards();

upBtn.addEventListener("click", function () {
  let lastChild = stack.lastElementChild;
  if (lastChild) {
    stack.prepend(lastChild);
  }
});

downBtn.addEventListener("click", function () {
  let firstChild = stack.firstElementChild;
  if (firstChild) {
    stack.append(firstChild);
  }
});

function filterCards(arr) {
  stack.innerHTML = "";
  let newTasks = arr;
  newTasks.forEach((task) => {
    // Main card
    let card = document.createElement("div");
    card.classList.add("card");

    // Profile
    let profile = document.createElement("div");
    profile.classList.add("profile");

    let img = document.createElement("img");
    img.src = task.imageURL;

    // Heading
    let heading = document.createElement("h2");
    heading.textContent = task.fullName;

    // Details
    let details = document.createElement("div");
    details.classList.add("details");

    // Home town
    let homeTown = document.createElement("p");

    let homeTownLabel = document.createElement("span");
    homeTownLabel.textContent = "Home town";

    let homeTownValue = document.createElement("span");
    homeTownValue.textContent = task.homeTown;

    // Purpose
    let purpose = document.createElement("p");

    let purposeLabel = document.createElement("span");
    purposeLabel.textContent = "Purpose";

    let purposeValue = document.createElement("span");
    purposeValue.textContent = task.purpose;

    // Actions
    let actions = document.createElement("div");
    actions.classList.add("actions");

    let callBtn = document.createElement("button");
    let icon = document.createElement("i");
    icon.classList.add("ri-phone-line");
    callBtn.append(icon);
    callBtn.append(" Call");

    let messageBtn = document.createElement("button");
    messageBtn.classList.add("msgBtn");
    messageBtn.textContent = "Message";

    // Appending elements
    profile.append(img);

    homeTown.append(homeTownLabel, homeTownValue);
    purpose.append(purposeLabel, purposeValue);

    details.append(homeTown, purpose);
    actions.append(callBtn, messageBtn);

    card.append(profile, heading, details, actions);

    document.querySelector(".stack").append(card);
  });
}

rightColors.forEach((color) => {
  color.addEventListener("click", (elem) => {
    let category = elem.target.dataset.category;
    let allTasks = JSON.parse(localStorage.getItem("tasks"));
    let newTasks = allTasks.filter((task) => {
      return task.category === category;
    });
    filterCards(newTasks)
  });
});
