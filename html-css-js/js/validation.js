const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const sectionsMessage = document.getElementById("sections-message");

const errorMessages = {
    "first-name": "To pole nie może być puste",
    "last-name": "To pole nie może być puste",
    "email": "Podaj poprawny adres e-mail",
    "sections": "Wybierz przynajmniej jedną sekcję"
};

// displays error for input[type="text"]
function errorMessage(input, isValid) {
    if (!isValid) {
        input.nextElementSibling.textContent = errorMessages[input.id];
        input.classList.add("input-error");
    }
    else {
        input.nextElementSibling.textContent = "";
        input.classList.remove("input-error");
    }
}

// validates form on submit
function validateForm() {
    const atLeastOneChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);

    if (firstName.value === "") {
        errorMessage(firstName, false);
        return false;
    }
    else if (lastName.value === "") {
        errorMessage(lastName, false);
        return false;
    }
    else if (email.value === "" || email.validity.typeMismatch) {
        errorMessage(email, false);
        return false;
    }
    else if (!atLeastOneChecked) {
        sectionsMessage.textContent = errorMessages["sections"];
        return false;
    }
    else if (atLeastOneChecked) {
        sectionsMessage.textContent = "";
        return true;
    }
}

// form validation while form filling

firstName.addEventListener("input", () => {
    if (firstName.value === "") errorMessage(firstName, false);
    else errorMessage(firstName, true);
});

lastName.addEventListener("input", () => {
    if (lastName.value === "") errorMessage(lastName, false);
    else errorMessage(lastName, true);
});

email.addEventListener("input", () => {
    if (email.validity.typeMismatch) errorMessage(email, false);
    else errorMessage(email, true); 
});

checkboxes.forEach(checkbox => {
    checkbox.addEventListener("change", () => {
        const atLeastOneCheckedCurr = Array.from(checkboxes).some(checkbox => checkbox.checked);
        if (atLeastOneCheckedCurr) {
            sectionsMessage.textContent = "";
        } 
        else {
            sectionsMessage.textContent = errorMessages["sections"];
        }
    });
});
