const display = document.getElementById("display");

function appendToDisplay(input) {
    if (display.value === "sei la porra" || display.classList.contains("galinha")) {
        display.value = input;
        display.classList.remove("galinha")
    } else {
        display.value += input; 
    }
}

function clearDisplay() {
    display.value = ""; 
}

function calculate() {
    if (display.value === "sei la porra" || display.value === "") {
        return; 
    } else if (parseInt(display.value) === 666) {
        display.classList.add("galinha"); 
        display.value = ""
        return;
    }

    try {
        if (display.value.includes("//")) {
            throw new Error("sei la porra");
        } else {
            display.value = eval(display.value);
        }
    } catch (error) {
        display.value = "sei la porra";
    }
}