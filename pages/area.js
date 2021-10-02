var inputSide = document.querySelectorAll(".input-side");
var calculateBtn = document.querySelector("#calculate");
var output = document.querySelector("#output");

function checkValidity(a, b, c) {
    if (a + b <= c || a + c <= b || b + c <= a)
        return false;
    else
        return true;
}

function calculateArea(side1, side2, side3) {
    if (checkValidity(side1, side2, side3)) {
        var p = (side1 + side2 + side3) / 2;
        var res = p * (p - side1) * (p - side2) * (p - side3);
        var area = Math.sqrt(res);
        showMessage(area)
    }
    else {
        showErrorMessage("invalid sides")
    }

}

function showMessage(area) {
    output.innerText = "The area of the triangle is " + area.toFixed(3) + "cm²";
}

function showErrorMessage(msg) {
    output.innerText = msg;
}


calculateBtn.addEventListener("click", function () {
    if (inputSide[0].value && inputSide[1].value && inputSide[2].value) {
        if (inputSide[0].value > 0 && inputSide[1].value > 0 && inputSide[2].value > 0) {
            calculateArea(Number(inputSide[0].value), Number(inputSide[1].value), Number(inputSide[2].value));
        }
        else if (inputSide[0].value < 0 || inputSide[1].value < 0 || inputSide[2].value < 0) {
            showErrorMessage("Please enter postive values!");
        }
        else {
            showErrorMessage("Please enter all the inputs, input cannot be zero")
        }
    }
    else {
        showErrorMessage("Invalid Input!")
    }
})