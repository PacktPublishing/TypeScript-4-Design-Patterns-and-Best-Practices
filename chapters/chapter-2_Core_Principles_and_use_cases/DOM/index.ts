const p = document.getElementsByClassName("paragraph")[0];

const span = document.createElement("span");
span.textContent = "This is a text we added dynamically";
p?.appendChild(span);

const button = document.querySelector("button");
button?.addEventListener("click", () => {
  window.alert("You Clicked the Submit Button");
});
