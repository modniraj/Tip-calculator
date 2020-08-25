//Calculate Tip
function calculateTip() {
  var billAmount = document.getElementById("billAmount").value;
  var serviceRating = document.getElementById("serviceRating").value;
  var hours = document.getElementById("hours").value;

  //validate input
  if (billAmount === "" || serviceRating == 0 || hours == 0) {
    alert("Please enter values");
    return;
  }


  //Calculate tip
  var total = (billAmount * hours *0.1) / serviceRating;
  //round to two decimal places
  total = Math.round(total * 100) / 100;
  //next line allows us to always have two digits after decimal point
  total = total.toFixed(2);
  //Display the tip
  document.getElementById("totalTip").style.visibility = "visible";
  document.getElementById("tip").innerHTML = "$" + total;

}

//Hide the tip amount on load
document.getElementById("totalTip").style.visibility = "hidden";

//click to call function
document.getElementById("calculate").onclick = function() {
  calculateTip();

};
