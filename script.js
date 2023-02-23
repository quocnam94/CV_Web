"use strict";
const error = document.querySelector(".error");
const personal = document.querySelector(".personal-info");
const form = document.querySelector(".form");
const viewMore = document.querySelectorAll(".bi-arrow-down");
const viewLess = document.querySelectorAll(".bi-arrow-up");
const box = document.querySelectorAll(".box");
const body = document.querySelectorAll(".body");
// ẩn thông tin cá nhân
document
  .querySelector(".btn-primary")
  .addEventListener("click", function (event) {
    const input = document.querySelector(".form-control");
    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regex.test(input.value)) {
      error.classList.remove("d-none");
    } else {
      form.classList.add("d-none");
      personal.classList.remove("d-none");
    }
  });
// ẩn hiện nút Vỉew more
for (let i = 0; i < box.length; i++) {
  box[i].addEventListener("mouseover", function () {
    viewMore[i].classList.remove("d-none");
  });
  box[i].addEventListener("mouseout", function () {
    viewMore[i].classList.add("d-none");
  });
  // click nút View more
  for (let i = 0; i < viewMore.length; i++) {
    viewMore[i].addEventListener("click", function () {
      body[i].classList.remove("d-none");
      viewMore[i].classList.add("d-none");
      viewLess[i].classList.remove("d-none");
      // không hiển thị View more khi nội dung hiển thị
      box[i].addEventListener("mouseover", function () {
        viewMore[i].classList.add("d-none");
      });
    });
  }
  // ẩn hiện nút View less
  for (let i = 0; i < viewLess.length; i++) {
    viewLess[i].addEventListener("click", function () {
      body[i].classList.add("d-none");
      viewMore[i].classList.remove("d-none");
      viewLess[i].classList.add("d-none");
      box[i].addEventListener("mouseover", function () {
        viewMore[i].classList.remove("d-none");
      });
    });
  }
}
