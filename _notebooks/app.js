
var height = document.querySelector(".height-input-field");
var weight = document.querySelector(".weight-input-field");
var calculateButton = document.querySelector(".calculate");
var result = document.querySelector(".result");
var statement = document.querySelector(".result-statement");

var BMI, height, weight;

calculateButton.addEventListener("click", ()=>{

height = height.value;
weight = weight.value;
BMI = weight*700/(height*height); 
result.innerText = "BMI : "+BMI.toFixed(1);

if(BMI < 18.5){
    statement.innerText = "Category : Underweight: Baja Peso";    
}else if((BMI > 18.5) && (BMI < 24.9)){
    statement.innerText = "Category : Normal";
}else if((BMI > 25) && (BMI < 29.9 )){
    statement.innerText = "Category : Overweight: Exceso de Peso";
}else{
    statement.innerText = "Category : Obese: Obeso";
}
});