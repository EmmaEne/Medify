document.addEventListener("DOMContentLoaded", () => {
    const questions = document.querySelectorAll(".questions"); // Select all question sections
    const nextBtn = document.querySelector(".next"); // Select the "Next" button
    const prevBtn = document.querySelector(".prev"); // Select the "Prev" button
    const signInBtn = document.querySelector(".secondbtn"); // Select the "Sign In" button

    let currentIndex = 0; // Track the current question index

    // Function to show the current question and hide others
    const updateQuestions = () => {
        questions.forEach((question, index) => {
            question.style.display = index === currentIndex ? "block" : "none";
        });

        // Toggle visibility of navigation buttons
        prevBtn.style.display = currentIndex === 0 ? "none" : "inline-block";
        nextBtn.style.display = currentIndex === questions.length - 1 ? "none" : "inline-block";

        // Show or hide the "Sign In" button with animation
        if (currentIndex === questions.length - 1) {
            signInBtn.style.display = "block";
            signInBtn.classList.add("animate__animated", "animate__fadeInUp");
        } else {
            signInBtn.style.display = "none";
        }
    };

    // Initialize the view
    updateQuestions();

    // Event listener for the "Next" button
    nextBtn.addEventListener("click", (e) => {
        e.preventDefault(); // Prevent default form submission
        if (currentIndex < questions.length - 1) {
            currentIndex++;
            updateQuestions();
        }
    });

    // Event listener for the "Prev" button
    prevBtn.addEventListener("click", (e) => {
        e.preventDefault(); // Prevent default form submission
        if (currentIndex > 0) {
            currentIndex--;
            updateQuestions();
        }
    });
});


// form validation

const form = document.querySelector(".needs-validation");
const questions = document.querySelectorAll(".questions");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const signInBtn = document.querySelector(".secondbtn");
let currentIndex = 0;

// Create error message <p> tag
const errorMessage = document.createElement("p");
errorMessage.className = "text-danger mt-2";
errorMessage.style.display = "none";
form.insertBefore(errorMessage, nextBtn);

// Function to validate the current section
const validateSection = () => {
    const currentQuestion = questions[currentIndex];
    const inputs = currentQuestion.querySelectorAll("input, select");
    let valid = true;

    inputs.forEach((input) => {
        if (!input.checkValidity()) {
            input.classList.add("is-invalid");
            input.classList.remove("is-valid");
            valid = false;
        } else {
            input.classList.remove("is-invalid");
            input.classList.add("is-valid");
        }
    });

    // Show or hide the error message
    if (!valid) {
        errorMessage.textContent = "Please fill out all required fields in this section before proceeding.";
        errorMessage.style.display = "block";
    } else {
        errorMessage.style.display = "none";
    }

    return valid;
};

// Function to update the visibility of questions
const updateQuestions = () => {
    questions.forEach((question, index) => {
        question.style.display = index === currentIndex ? "block" : "none";
    });

    // Update button visibility
    prevBtn.style.display = currentIndex === 0 ? "none" : "inline-block";
    nextBtn.style.display = currentIndex === questions.length - 1 ? "none" : "inline-block";

    if (currentIndex === questions.length - 1) {
        signInBtn.style.display = "block";
        signInBtn.classList.add("animate__animated", "animate__fadeInUp");
    } else {
        signInBtn.style.display = "none";
    }
};

// Initialize the view
updateQuestions();

// Next button click event
nextBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (validateSection()) {
        currentIndex++;
        updateQuestions();
    }
});

// Prev button click event
prevBtn.addEventListener("click", (e) => {
    e.preventDefault();
    currentIndex--;
    updateQuestions();
});

// Prevent form submission if the last section isn't valid
form.addEventListener("submit", (e) => {
    if (!validateSection()) {
        e.preventDefault();
        errorMessage.textContent = "Please ensure all fields are correctly filled before submission.";
        errorMessage.style.display = "block";
    }
});