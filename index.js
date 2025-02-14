const checkhW = async (city) => {
  //document.querySelectorAll('.error').forEach(e=>{e.classList.toggle('hidden')})
  try {
    const response = await fetch(url + `&appid=${apiKey}&q=${city}`);

    const data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";
    document
      .querySelector(".weather img")
      .setAttribute(
        "src",
        `./images/${data.weather[0].main.toLowerCase()}.png`
      );
  } catch (err) {
    document.querySelectorAll(".error").forEach((e) => {
      e.classList.toggle("hidden");
    });
    document.querySelector(".errorM").classList.remove("hidden");
    //classList.toggle('toggleClass');
    // alert("Invalid City name")
  }
};
//data.weather[0].main

const apiKey = "7b2c4a006b097e265a1ac8924f910a5b";
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric";
const input = document.querySelector(".search input");
const btn = document.querySelector(".search button");
//adjestn the icons

// checkhW("addis ababa")
btn.addEventListener("click", () => {
  document.querySelectorAll(".error").forEach((e) => {
    e.classList.remove("hidden");
  });
  document.querySelector(".errorM").classList.add("hidden");
  checkhW(input.value);
});

document.addEventListener("DOMContentLoaded", () => {
  checkhW("Addis Ababa");
});
