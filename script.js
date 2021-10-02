'use strict';

const modal = document.querySelector(".modal");
const buttons = document.querySelectorAll(".show-modal");
const overlay = document.querySelector(".overlay");
const close_button = document.querySelector(".close-modal");

addEventListeners();

function addEventListeners() {
    close_button.addEventListener("click", close);

    document.addEventListener("keydown", close);

    buttons.forEach((button, idx) => {
        button.addEventListener("click", open);
    });
}

function open(e) {
    // * open modal
    if (modal.classList.contains("hidden") && overlay.classList.contains("hidden")) {
        modal.classList.remove("hidden");
        overlay.classList.remove("hidden");
    }
}

function close(e) {
    // * close modal
    const escCode = "Escape";
    const mousePtr = "mouse"

    if (e.code === escCode || e.pointerType === mousePtr) {
        if (!modal.classList.contains("hidden") && !overlay.classList.contains("hidden")) {
            modal.classList.add("hidden");
            overlay.classList.add("hidden");
        }
    }
}