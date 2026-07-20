const addBtn = document.querySelector(".add-btn");
const inputBox = document.querySelector("input");
const taskList = document.querySelector(".task-list");

addBtn.addEventListener("click", () => {
  const data = inputBox.value;
  let div = document.createElement("div");

  // jisse spaces na le wo
  if (data.trim() === "") {
    return;
  }

  div.innerHTML = `        
    <h4 class="text-tag">${data}</h4>
    <input type="text" class="input-tag">
    <div class="btn">
        <button class="edit">Edit</button>
        <button class="del">Delete</button>
    </div>`;
  div.classList.add("li");

  // to select tag
  let inputTag = div.querySelector(".input-tag");
  let text = div.querySelector(".text-tag");
  let editBtn = div.querySelector(".edit");
  let deleteBtn = div.querySelector(".del");

  inputTag.classList.toggle("hidden");

  //jb edit krna ho koi task
  editBtn.addEventListener("click", () => {
    if (editBtn.textContent === "Edit") {
      inputTag.classList.toggle("hidden");
      text.classList.toggle("hidden");
      inputTag.value = text.textContent;
      editBtn.textContent = "Save";
    } 
    else {
      // jb addbtn ki value save ho
      text.textContent = inputTag.value;
      inputTag.classList.add("hidden");
      text.classList.remove("hidden");
      editBtn.textContent = "Edit";
    }
  });

  taskList.append(div); //insert krna div
  inputBox.value = ""; //addbtn wala input box

  //jb delete krna ho koi task
  deleteBtn.addEventListener("click", () => {
    div.remove();
  });
});
