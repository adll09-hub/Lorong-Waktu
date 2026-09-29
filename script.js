/* ================================
   NAVBAR
================================ */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


/* ================================
   MOBILE MENU
================================ */

const menuBtn = document.getElementById("menuBtn");
const nav = document.querySelector(".navbar nav");

if (menuBtn) {

    menuBtn.addEventListener("click", () => {

        nav.classList.toggle("show");

    });

}


/* ================================
   SCROLL REVEAL
================================ */

const revealElements =
    document.querySelectorAll(".reveal");

function revealOnScroll() {

    const windowHeight =
        window.innerHeight;

    revealElements.forEach((element) => {

        const elementTop =
            element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 80) {

            element.classList.add("active");

        }

    });

}

window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();


/* ================================
   HISTORY MODAL
================================ */

const detailButtons =
    document.querySelectorAll(".detail-btn");

const modal =
    document.getElementById("historyModal");

const closeModal =
    document.getElementById("closeModal");

const modalTitle =
    document.getElementById("modalTitle");

const modalText =
    document.getElementById("modalText");


detailButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const title =
            button.dataset.title;

        const text =
            button.dataset.text;

        modalTitle.textContent = title;

        modalText.textContent = text;

        modal.classList.add("show");

        document.body.style.overflow = "hidden";

    });

});


if (closeModal) {

    closeModal.addEventListener(
        "click",
        closeHistoryModal
    );

}


if (modal) {

    modal.addEventListener(
        "click",
        (event) => {

            if (event.target === modal) {

                closeHistoryModal();

            }

        }
    );

}


function closeHistoryModal() {

    modal.classList.remove("show");

    document.body.style.overflow = "";

}


/* ================================
   ESC TO CLOSE MODAL
================================ */

document.addEventListener(
    "keydown",
    (event) => {

        if (event.key === "Escape") {

            if (modal) {

                closeHistoryModal();

            }

        }

    }
);