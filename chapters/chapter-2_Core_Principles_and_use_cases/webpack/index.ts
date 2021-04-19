const par = document.getElementsByClassName("paragraph")[0];

const span = document.createElement("span");
span.textContent = "This is a text we added dynamically";
par?.appendChild(span);

const button = document.querySelector("button");
button?.addEventListener("click", () => {
  window.alert("Did you Clicked the Submit Button");
});
