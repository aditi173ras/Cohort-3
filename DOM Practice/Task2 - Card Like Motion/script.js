const card = document.querySelector(".card");
const heart = document.querySelector("i");

card.addEventListener("dblclick", () => {
  heart.style.opacity = "100%";
  heart.style.backgroundImage =
    "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)";
  heart.style.webkitBackgroundClip = "text";
  heart.style.webkitTextFillColor = "transparent";

  setTimeout(()=>{ 
    heart.style.opacity = "0%";
  },600)
});
