function convert() {
    var temperature = document.getElementById("temperature").value;
    var unit = document.getElementById("unit").value;
    
    if (unit === "fahrenheit") {
    var celsius = (temperature - 32) * 5 / 9;
    } else if (unit === "celsius") {
    var fahrenheit = temperature * 9 / 5 + 32;
    } else {
    var kelvin = temperature + 273.15;
    }
    
    document.getElementById("result").innerHTML = temperature + " " + unit + " = " + celsius + " degrees Celsius" + (unit === "fahrenheit" ? " or " + fahrenheit + " degrees Fahrenheit" : "");
    }
    
    document.getElementById("convert").addEventListener("click", convert);
