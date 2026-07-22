const form = document.querySelector(".form-tag");
const userName = document.querySelector("#name");
const userEmail = document.querySelector("#email");
const imageUrl = document.querySelector("#url");

const userCard = document.querySelector(".user-card");

const userData = [
  {
    name: "Nakul Verma",
    email: "aditya.ver@example.com",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
    isEditing: false,
  },
  {
    name: "Rahul Sharma",
    email: "rahul.sha@example.com",
    image: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1",
    isEditing: false,
  },
  {
    name: "Supriya Shukla",
    email: "priya.verma@example.com",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
    isEditing: false,
  },
  {
    name: "Arjun Mehta",
    email: "arjun.mehta@example.com",
    image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6",
    isEditing: false,
  },
  {
    name: "Sneha Kapoor",
    email: "sneha.kapoor@example.com",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e",
    isEditing: false,
  },
];

// function for looping
const users = () => {
  userCard.innerHTML = "";
  userData.forEach((elem, index) => {
    userCard.innerHTML += `
      <div class="user-card-details">
        ${
          elem.isEditing
            ? `<div>
            <label>Image URL:</label>
            <input type="text" value="${elem.image}" id="image-${index}" />
            </div>`
            : `<img src="${elem.image}" />`
        }
        ${
          elem.isEditing
            ? `<div class="user-edit-form">
             <label class="user-label"> Name : <label>
            <input type="text" value="${elem.name}" id="name-${index}" class="user-input">
            </div>`
            : `<h4>Name: ${elem.name}</h4>`
        }
        ${
          elem.isEditing
            ? `<div class="user-edit-form"> 
            <label class="user-label"> Email : <label>
            <input type="text" value="${elem.email}" id="email-${index}" class="user-input">
            </div>`
            : `<h4>Email: ${elem.email}</h4>`
        }
      <div class="user-btn">
        ${
          elem.isEditing
            ? `<button onclick="saveCard(${index})" id="save">Save</button>`
            : `<button onclick="editCard(${index})" id="edit">Edit</button>`
        }
           <button onclick="deleteCard(${index})" id="del">Delete</button>
      </div>
    </div>`;
  });
};

users();

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let name = userName.value;
  let email = userEmail.value;
  let image = imageUrl.value;

  if (name.trim() === "" || email.trim() === "" || image.trim() === "") {
    return;
  }

  // push data in array object
  userData.push({
    name,
    email,
    image,
    isEditing: false,
  });

  users();

  console.log(userData);

  form.reset();
});

const editCard = (index) => {
  userData[index].isEditing = true;
  users(); // re-render
};

const saveCard = (index) => {
  let updatedName = document.querySelector(`#name-${index}`).value;
  let updatedEmail = document.querySelector(`#email-${index}`).value;
  let updatedImage = document.querySelector(`#image-${index}`).value;

  userData[index].name = updatedName;
  userData[index].email = updatedEmail;
  userData[index].image = updatedImage;
  userData[index].isEditing = false;

  users();
};

const deleteCard = (index) => {
  userData.splice(index, 1);
  users();
};
