"use strict";
const container = document.querySelector("main");
container.style.margin = "5rem auto";
container.style.fontSize = "1.7rem";

const header = document.querySelector("h1");
header.style.textAlign = "center";
header.style.marginBottom = "5rem";
header.style.fontSize = "3.5rem";

const title = document.querySelector("p");
title.style.backgroundColor = "lightblue";
title.style.padding = "10px";
title.style.paddingLeft = "1rem";
const destinationList = document.getElementsByClassName("list-group-item");
const list = document.querySelector("div");

//design the destination button
const btn = document.querySelector("button");
btn.style.borderRadius = "5px";
btn.style.marginTop = "20px";
btn.style.color = "white";
btn.style.background = "blue";
btn.style.padding = "5px 20px";
btn.style.width = "270px";
btn.style.height = "3rem";
btn.style.fontSize = "1.5rem";
btn.style.alignSelf = "right";

//show or hide destination by clicking the button
btn.addEventListener("click", function (e) {
  btn.innerHTML =
    btn.innerHTML === "Show destination"
      ? "Hide destination"
      : "Show destination";
  list.style.display = list.style.display === "none" ? "block" : "none";
});

//get the favorite destination text
const yourFavDes = document.createElement("p");
yourFavDes.style.marginTop = "20px";
yourFavDes.style.padding = "10px 1rem";

//get active the destination
for (let i = 0; i < destinationList.length; i++) {
  destinationList[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    btn.style.display = "none";
    container.append(yourFavDes);
    yourFavDes.textContent = `You selected ${destinationList[i].textContent}`;
    yourFavDes.style.width = "100%";
    yourFavDes.style.textAlign = "left";
    yourFavDes.style.border = "none";
    yourFavDes.style.backgroundColor = "lightgreen";
    yourFavDes.style.color = "black";
  });
}
