
// This function takes two arguments, weight and height to calculate the bmi of a person.
function bmi(weight,height) {

    // The bmi function returns the user height elevated by 2 and divided by its weight.
    return  weight / (height * height);
}
    
    // Declarate bmiCalculations function, which gets the values of two HTML form controls with IDs of weight and height. Then pass them to the bmi function.
function bmiCalculations(){
    let weight = parseInt(document.querySelector("#weight").value);
    let height = parseInt(document.querySelector("#height").value)/ 100;
    let result = bmi(weight,height);
    
    
//Declare a variable to hold the message to be printed for each category, according to the bmi function result.
    let message;

    // If, else if, else statements to print only the correct message.
        if (result < "18.5") {
            message = "Underweight";
        }

        else if(result >= "18.5" && result <= 25) {
            message = "Healthy Weight";
        }

        else if (result >= 25 && result <= 30) {
            message = "Overweight";
        }

        else {
            message = "Obese";
        }

        // Assign the value of the message variable to the HTML element with an ID of message.
            document.querySelector("#message").textContent = message;

            // Assign the return value to an HTML form element with an ID of total. toPrecision stablishes the number will be set to 3 digits total. 
            // generally It will show 2 integers and 1 decimal number.
    document.querySelector("#total").value = result.toPrecision(3);
}
// Add a "click" event listener to the HTML button with an ID of bmiCalculations that calls the bmiCalculation function.
document.querySelector("#bmiCalculations").addEventListener("click", bmiCalculations);
    



   
