const form = document.querySelector("form");

form.addEventListener("click", function (e) {
  e.preventDefault();

  const height = parseInt(document.getElementById("height").value);
  const weight = parseInt(document.getElementById("weight").value);
  const gender = document.getElementById('select');
  const display = document.getElementById("display");
  const bmi = (weight / ((height * height) / 10000)).toFixed(2);

  if (height < 0 || height === "" || isNaN(height)) {
    display.innerHTML = `please enter a valid Height ${height}`;
  } else if (weight < 0 || weight === "" || isNaN(weight)) {
    display.innerHTML = `please enter a valid Weight ${weight}`;
  } else {
    display.innerHTML =
      "BMI : " + (weight / ((height * height) / 10000)).toFixed(2);
    display.style.backgroundColor = "#B0BFBF";
    display.style.color = "#000";
  }
  //-----------BMI categuries--------------

  if (bmi < 18.5) {
    document.getElementById("demo").innerHTML = `Your BMI ${bmi} is underweight`;
    document.getElementById("demo").style.color = 'red';

  } else if (bmi >= 18.5 && bmi < 24.9) {
    document.getElementById("demo").innerHTML = `Your BMI ${bmi} is Normal`;
      document.getElementById("demo").style.color = '#2DF73D';
  } else if (bmi >= 25 && bmi < 29.9) {
    document.getElementById("demo").innerHTML = `Your BMI ${bmi} is Overweight`;
      document.getElementById("demo").style.color = 'orange';
  } else if (bmi >= 30){
    document.getElementById("demo").innerHTML = `Your BMI ${bmi} is Obesity`;
      document.getElementById("demo").style.color = 'red';
  } else{
	document.getElementById("demo").display = 'none';  
  }
});