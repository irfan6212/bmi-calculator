let form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  let height = parseInt(document.querySelector("#height").value);

  let weight = parseInt(document.querySelector("#weight").value);
  let results = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `please give a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `please give a valid weight ${weight}`;
  } else {
    let BMI = (weight / ((height * height) / 10000)).toFixed(2);

    if (BMI < "18.6") {
      results.style.color = "red";
      results.innerHTML = `Under Weight ${BMI}`;
    } else if (BMI > "18.6" && BMI < "24.9") {
      results.style.color = "green";
      results.innerHTML = `Normal Weight  ${BMI}`;
    } else {
      results.innerHTML = `Overweight ${BMI}`;
      results.style.color = "yellow";
    }
  }
});
