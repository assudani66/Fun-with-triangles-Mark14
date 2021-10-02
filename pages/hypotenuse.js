var inputFields = document.querySelectorAll(".input-field");
var calculateBtn = document.querySelector("#calculate");
var output = document.querySelector("#output");


function calculateHypotenuse(base, height) {
    base = Number(base);
    height = Number(height);
    var hypo = Math.sqrt((base*base) + (height*height));

    showMessage(hypo.toFixed(3));
}

function showMessage(hypo) {
    output.innerText = `The Length of Hypotenuse is ${hypo}`;
}

function errorMessage(error) {
    output.innerText = error;
}
calculateBtn.addEventListener("click", function(){
    
    // console.log(inputFields[0].value, inputFields[1].value);

    if(inputFields[0].value && inputFields[1].value)
    {
        if(inputFields[0].value > 0 && inputFields[1].value > 0){
            calculateHypotenuse(inputFields[0].value, inputFields[1].value);
        }
        else if(inputFields[0].value < 0 || inputFields[1].value < 0)
        {
            errorMessage("Please enter postive values!");
        }
        else
        {
            errorMessage("Please enter all the inputs, input cannot be zero")
        }
    }
    else
    {
        errorMessage("Invalid Input!")
    }
});