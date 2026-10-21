const form = document.querySelector("form");
const username = document.querySelector("#name");
const role = document.querySelector("#role");
const bio = document.querySelector("#bio");
const photo = document.querySelector("#photo");
const cardsContainer = document.querySelector(".cards-container");

const userManager = {
  users: [],

  init: function () {
    this.loadfromlocalStorage();
    this.renderUi(this.users);
    form.addEventListener("submit", this.submitForm.bind(this));
    cardsContainer.addEventListener("click", this.removeUser.bind(this));
  },

  submitForm: function (event) {
    event.preventDefault();
    this.addUser({
      username: username.value,
      role: role.value,
      bio: bio.value,
      photo: photo.value,
    });

    form.reset();
  },

  addUser: function (obj) {
    this.users.push(obj);
    this.savetoLocalStorage(this.users);
    this.renderUi(this.users);
  },

  removeUser: function (event) {
    if(event.target.classList.contains('remove-btn')){
        let card = event.target.closest(".card");
        let index = Number(card.dataset.index)
        this.users.splice(index, 1)
        this.renderUi(this.users)
        this.savetoLocalStorage(this.users)
    }
  },

  savetoLocalStorage: function (users) {
    let newUsers = JSON.stringify(users);
    localStorage.setItem("users", newUsers);
  },

  renderUi: function (users) {
    cardsContainer.innerHTML = "";
    users.forEach((user,index) => {
      let card = document.createElement("div");
      card.classList.add("card");
      card.dataset.index = index;


      let profileImg = document.createElement("div");
      profileImg.classList.add("profile-img");

      let img = document.createElement("img");
      img.src = user.photo;
      img.alt = "User";

      profileImg.append(img);

      let name = document.createElement("h2");
      name.textContent = user.username;

      let role = document.createElement("h4");
      role.textContent = user.role;

      let bio = document.createElement("p");
      bio.textContent = user.bio;

      let removeBtn = document.createElement("button");
      removeBtn.textContent = "Remove";
      removeBtn.classList.add("remove-btn");

      card.append(profileImg, name, role, bio, removeBtn);

      cardsContainer.append(card);
    });
  },

  loadfromlocalStorage: function () {
    let oldUsers = localStorage.getItem("users");
    if (oldUsers) {
      oldUsers = JSON.parse(oldUsers);
      this.users = oldUsers;
    }
    return;
  },
};

userManager.init();
