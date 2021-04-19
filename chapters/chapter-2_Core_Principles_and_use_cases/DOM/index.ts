const p = document.getElementsByClassName("paragraph")[0];

const spanArea = document.createElement("span");
spanArea.textContent = "This is a text we added dynamically";
p?.appendChild(spanArea);

const actionButton = document.querySelector("button");
actionButton?.addEventListener("click", () => {
  window.alert("You Clicked the Submit Button");
});
