var inputAngle = document.querySelectorAll(".input-angle")
var check = document.querySelector("#check");
var output = document.querySelector("#output");

function isTriangle(angleOne, angleTwo, angleThree)
{
    var sum = Number(angleOne) + Number(angleTwo) + Number(angleThree);
    if(Number(sum) === 180)
    {
        showMessage("Yay, the angles form a triangle!")
    }
    else
    {
        showMessage("Oh Oh! The angle doesn't form a triangle")
    }
}
function showMessage(msg){
    output.innerText = msg;
}

check.addEventListener("click", function(){
    if(inputAngle[0].value && inputAngle[1].value && inputAngle[2].value)
    {
        if(inputAngle[0].value > 0 && inputAngle[1].value > 0 && inputAngle[2].value > 0){
            isTriangle(inputAngle[0].value, inputAngle[1].value,inputAngle[2].value);
        }
        else if(inputAngle[0].value < 0 || inputAngle[1].value < 0 ||inputAngle[2].value < 0)
        {
            showMessage("Please enter postive values!");
        }
        else
        {
            showMessage("Please enter all the inputs, input cannot be zero")
        }
    }
    else
    {
        showMessage("Invalid Input!")
    }
    
})


