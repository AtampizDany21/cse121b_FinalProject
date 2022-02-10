
// Step 1:This function takes two arguments, weight and height to calculate the bmi of a person.
function bmi(weight,height) {

    // Step 2: In the function, return the division of the parameters weight and height elevated by 2
    return  weight / (height * height);
}
    
    // Using function declaration, define a function named bmiCalculation that gets the values of two HTML form controls with IDs of weight and height. Pass them to the bmi function
function bmiCalculations(){
    let weight = parseInt(document.querySelector("#weight").value);
    let height = parseInt(document.querySelector("#height").value)/ 100;
    let result = bmi(weight,height);
    
    

    let message;

        if (result < "18.5") {
            message = "Underweight";
        }

        else if(result >= "18.5" && result <= 25) {
            message = "Healthy Weight";
        }

        else if (result >= 25 && result <= 30) {
            message = "Overweight";
        }

        else if (result >= 30) {
            message = "Obese class 1";
        }

        else {
            message = "Obese class 2";
        }

            document.querySelector("#message").textContent = message;

            // Assign the return value to an HTML form element with an ID of total
    document.querySelector("#total").value = result.toPrecision(2);
}
// Add a "click" event listener to the HTML button with an ID of bmiCalculations that calls the bmi function
document.querySelector("#bmiCalculations").addEventListener("click", bmiCalculations);
