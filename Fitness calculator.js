
// Step 1:This function takes two arguments, weight and height to calculate the bmi of a person.
function bmi(weight,height) {

    // Step 2: In the function, return the division of the parameters weight and height elevated by 2
        return  weight / (height ** 2);
    }
    
    // Step 3: Using function declaration, define a function named bmiCalculation that gets the values of two HTML form controls with IDs of weight and height. Pass them to the bmi function
    function bmiCalculations(){
        let weight = parseInt(document.querySelector("#weight").value);
        let height = parseInt(document.querySelector("#height").value);
        let result = bmi(weight,height);
    
    // Step 4: Assign the return value to an HTML form element with an ID of sum
        document.querySelector("#bmi").value = result;
    }
    // Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function
        document.querySelector("#bmiCalculations").addEventListener("click",bmiCalculations);
    
    ///if (gender ="f") {
        ///bmr = (weight, height,age)
        ///return 447.593 + 9.247 * weight + 3.098 * height - 4.330 * age;
        ///} else {
        ///return 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
        ///}
    
    ///function bmrCalculations(){
    ///    let weight = parseInt(document.querySelector("#weight").value);
    ///    let height = parseInt(document.querySelector("#height").value);
    ///    let age = parseInt(document.querySelector("#age").value);
    ///    let result = bmr(weight,height,age);
    
    ///    document.querySelector("#bmr").value = result;
    ///}
    ///    document.querySelector("#bmrCalculations").addEventListener("click", bmrCalculations);
    
    