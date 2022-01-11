function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalCross = document.querySelector(".close");
const formData = document.querySelectorAll(".formData");

// FORM Elements

const firstElt = document.getElementById("first");
const lastElt = document.getElementById("last");
const emailElt = document.getElementById("email");
const birthdateElt = document.getElementById("birthdate");
const qtyElt = document.getElementById("quantity");
const cityElt = document.querySelector("input[type=radio]");
const conditionsElt = document.getElementById("checkbox1");

// Regex formats
const birthdateFormat = /^(19|20)\d{2}[-](0?[1-9]|1[012])[-](0[1-9]|[12]\d|3[01])$/;
const mailFormat = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
const positiveIntegerFormat = /^\+?(0|[1-9]\d*)$/;

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event

modalCross.addEventListener ("click", closeModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form 
function closeModal() {
  modalbg.style.display = "none";
}


