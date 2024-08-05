//Portfolio section - Modal
const portfolioModals = document.querySelectorAll(".porfolio-model");
const imgCards = document.querySelectorAll(".img-card");
const portfolioCloseBtns = document.querySelectorAll(".portfolio-close-btn");

var portfolioModal = function (modalClick) {
    portfolioModals[modalClick].classList.add("active");
}

imgCards.forEach((imgCard, i) => {
    imgCard.addEventListener("click", () => {
        portfolioModal(i);
    });
});

portfolioCloseBtns.forEach((portfolioCloseBtn) => {
    portfolioCloseBtn.addEventListener("click", () => {
        portfolioModals.forEach((portfolioModalView) => {
            portfolioModalView.classList.remove("active");
        });
    });
});

// Filter portfolio
const filterButtons = document.querySelectorAll(".button-container button");
const filterableCards = document.querySelectorAll(".portfolio-list .card");

// Define the filtercards function

const filtercards = e => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");

    // Inerate over each filterable Cards
    filterableCards.forEach(card => {
    //Add "hide" class to hide the card initially
    card.classList.add("hide");
    // check if the card matches the selected filter or "all" is selected
    if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all") {        
        card.classList.remove("hide");
    }
    });
}

// Function to filter cards based on filter buttons
filterButtons.forEach(button => button.addEventListener("click",filtercards));
