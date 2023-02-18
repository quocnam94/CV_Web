"use strict";
const form = document.querySelector(".form");
const error = document.querySelector(".error");

document.querySelector(".btn").addEventListener("click", function (event) {
  event.preventDefault();
  const input = document.querySelector(".form-control");
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!regex.test(input.value)) {
    error.classList.remove("hidden");
  }
});
