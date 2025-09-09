console.log("it's Connected 🦊");

document.getElementById("calculateBtn").addEventListener("click", function() {

  let voltage = parseFloat(document.getElementById("voltage").value);
  let current = parseFloat(document.getElementById("current").value);
  let resistance = parseFloat(document.getElementById("resistance").value);

  let resultText = "";

  // check which variable is missing and calculate

if (isNaN(voltage) && !isNaN(current) && !isNaN(resistance)) {
  // if voltage is empty and current and resistance is both filled - calculate V
  resultText = "Voltage = " + (current * resistance) + " V"; 
 // voltage = I * R
} 
else if (isNaN(current) && !isNaN(voltage) && !isNaN(resistance)) {
  // if current is empty and voltage and resistance is filled - calculate I
  resultText = "Current = " + (voltage / resistance) + " A";
  // current = V / R
} 
else if (isNaN(resistance) && !isNaN(voltage) && !isNaN(current)) {
  // if resistance is empty AND voltage and current is filled - calculate R
  resultText = "Resistance = " + (voltage / current) + " Ω";
  // R = V / I
} 
else {
  // if variables are empty, only have 1 variable or have all 3 message
  resultText = "Please enter two variables and leave the third empty";
}

  // disply calculated result
  document.getElementById("result").textContent = resultText;
});

// night mode button
document.getElementById("nightModeButton").addEventListener("click", function() {
document.body.classList.toggle("night-mode");
});




