"use strict";
var p = document.getElementsByClassName("paragraph")[0];
var span = document.createElement("span");
span.textContent = "This is a text we added dynamically";
p === null || p === void 0 ? void 0 : p.appendChild(span);
var button = document.querySelector("button");
button === null || button === void 0 ? void 0 : button.addEventListener("click", function () {
    window.alert("You Clicked the Submit Button");
});
//# sourceMappingURL=index.js.map