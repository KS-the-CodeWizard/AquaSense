
// Degree Celsius --------------------------------------------
const C_gaugeElement = document.querySelector("#C_gauge");
function setCelsiusGaugeValue(gauge, value) {
  if (value < 0 || value > 1) {
    gauge.querySelector("#C_gauge__cover").textContent = `err`;
    gauge.querySelector("#C_gauge__fill").style.transform = `rotate(${0}turn)`;
    return;
  }
  gauge.querySelector("#C_gauge__fill").style.transform = `rotate(${
    value / 2
  }turn)`;
  gauge.querySelector("#C_gauge__cover").textContent = `${value * 100}`+"°C";
}
// setCelsiusGaugeValue(C_gaugeElement, 0.3);

//Degree Fahrenheit----------------------------------------------
const F_gaugeElement = document.querySelector("#F_gauge");
function setFahrenheitGaugeValue(gauge, value) {
    ScaledValue = (value-32)/180;
    console.log(value);
  if (ScaledValue < 0 || ScaledValue > 1) {
    gauge.querySelector("#F_gauge__cover").textContent = `err`;
    gauge.querySelector("#F_gauge__fill").style.transform = `rotate(${0}turn)`;
    return;
  }
  gauge.querySelector("#F_gauge__fill").style.transform = `rotate(${
    ScaledValue / 2
  }turn)`;
  gauge.querySelector("#F_gauge__cover").textContent = `${value}°F`;
}
setFahrenheitGaugeValue(F_gaugeElement, -0.4);

//TDS----------------------------------------------
const TDS_gaugeElement = document.querySelector("#TDS_gauge");
function setTDSGaugeValue(gauge, value) {
  if (value < 0 || value > 1) {
    gauge.querySelector("#TDS_gauge__cover").textContent = `err`;
    gauge.querySelector("#TDS_gauge__fill").style.transform = `rotate(${0}turn)`;
    return;
  }
  gauge.querySelector("#TDS_gauge__fill").style.transform = `rotate(${
    value / 2
  }turn)`;
  gauge.querySelector("#TDS_gauge__cover").textContent = `${Math.round(
    value * 1000
  )} ppm`;
}
// setTDSGaugeValue(TDS_gaugeElement, 0.5);

//TDS----------------------------------------------
const EC_gaugeElement = document.querySelector("#EC_gauge");
function setECGaugeValue(gauge, value) {
  if (value < 0 || value > 1) {
    gauge.querySelector("#EC_gauge__cover").textContent = `err`;
    gauge.querySelector("#EC_gauge__fill").style.transform = `rotate(${0}turn)`;
    return;
  }
  gauge.querySelector("#EC_gauge__fill").style.transform = `rotate(${
    value / 2
  }turn)`;
  gauge.querySelector("#EC_gauge__cover").textContent = `${Math.round(
    value * 100
  )}mS/cm`;
}
setECGaugeValue(EC_gaugeElement, 0.6);