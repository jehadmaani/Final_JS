const welcomeMessages = [
  "Welcome to Our Restaurant",
  "Delicious Meals Await You",
  "Experience Fine Dining Like Never Before",
  "Your Culinary Adventure Starts Here",
];
let index = 0;
const welcomeElement = document.getElementById("welcome");

setInterval(() => {
  index = (index + 1) % welcomeMessages.length;
  welcomeElement.textContent = welcomeMessages[index];
}, 4000);

document.querySelectorAll("form input, form textarea").forEach((input) => {
  input.addEventListener("change", () => {
    input.value = input.value.toUpperCase();
    input.style.color = "#f0a500";
  });
});

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  const inputs = document.querySelectorAll("form input, form textarea");
  let isValid = true;
  inputs.forEach((input) => {
    if (!input.value.trim()) {
      isValid = false;
      input.style.border = "2px solid red";
    } else {
      input.style.border = "1px solid #ddd";
    }
  });

  if (!isValid) return;

  const successMessage = document.createElement("p");
  successMessage.textContent = "Form submitted successfully!";
  successMessage.style.color = "green";
  successMessage.style.marginTop = "10px";
  document.querySelector("form").appendChild(successMessage);
});

document.querySelectorAll(".menu-card p").forEach((price) => {
  if (price.textContent.includes("Price")) {
    price.addEventListener("mouseover", () => {
      price.style.fontSize = "1.2em";
    });
    price.addEventListener("mouseout", () => {
      price.style.fontSize = "1em";
    });
  }
});

document.querySelectorAll(".menu-card button").forEach((button) => {
  button.addEventListener("click", (e) => {
    const card = e.target.closest(".menu-card");
    const mealImage = card.querySelector("img");
    mealImage.src =
      "https://media.istockphoto.com/vectors/checkmark-vector-icon-put-a-green-symbol-on-the-white-background-vector-id1151872207?k=20&m=1151872207&s=170667a&w=0&h=NzKOi1fjRT-jYlohJ7a15LRWHC3wK0LjTu1fi9yOQYQ="; // Change image
    mealImage.alt = "Meal Selected";
  });
});
