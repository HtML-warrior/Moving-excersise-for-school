/*    JavaScript 7th Edition
      Chapter 4
      Lab 4

      Application to calculate total moving cost
      Author: Jaelin Anderson
      Date:   02/10/24

      
*/

// Global Constants
const COST_PER_LB = 0.50; // Changed from 50 to 0.50
const COST_PER_MILE = 0.75; // Changed from 75 to 0.75
const SETUP_COST = 500;

// Global Variables
let wgtBox = document.getElementById("wgtBox");
let distBox = document.getElementById("distBox");
let msgBox = document.getElementById("msgBox");

// Event Handlers
document.getElementById("wgtBox").onchange = calcTotal;
document.getElementById("distBox").onchange = calcTotal;
document.getElementById("setupBox").onclick = calcTotal;

// Function to calculate an estimate of the total moving cost
function calcTotal() {
   let totalCost = 0;
   msgBox.innerHTML = "";  
   
   try {
      if (!(wgtBox.value > 0)) {
         throw "!! Enter a positive weight"; 
      }
      totalCost += wgtBox.value * COST_PER_LB; 
   } catch (error) {
      msgBox.innerHTML = error;
   }
 
   try {
      if (!(distBox.value > 0)) {
         throw "!! Enter a positive mileage"; 
      }
      totalCost += distBox.value * COST_PER_MILE; 
   } catch (error) {
      msgBox.innerHTML = error; 
   }

   if (document.getElementById("setupBox").checked) {
      totalCost += SETUP_COST;
   }
   
   document.getElementById("totalBox").innerHTML = formatCurrency(totalCost);
}

function formatCurrency(value) {
   return "$" + value.toFixed(2);
}