// Messages displayed to users upon certain conditions
const FREE_WARNING = "Free shipping only applies to single customer orders";
const BANNED_WARNING =
  "Unfortunately we do not ship to your country of residence";

// User info
const area = "RSA"; // Country, 'RSA' for South Africa
// const currency = "R"; // Currency, 'R' for South African Rand
const customers = 2; // Number of customers

let shipping = 0; // defining shipping

//if statment for currency depending on country
if (area==="RSA"){currency = "R"}
else {currency = "$"}

// Check where the user is located
if (area === "RSA") {
  shipping = 400; // RSA shipping cost
} else if (area === "NAM") {
  shipping = 600; // NAM shipping cost
} else {
  shipping = 800; // Other countries' shipping cost
}

// Items you want to buy
const shoes = 300 * 1;
const toys = 100 * 5;
const shirts = 150 * 0; // No shirts chosen
const batteries = 35 * 2;
const pens = 5 * 0; // No pens chosen

// Calculate the total cost of items
const totalCost = shoes + toys + shirts + batteries + pens;

// Apply free shipping if conditions are met
if (totalCost >= 1000 && customers === 1) {
  if (area === "RSA" || area === "NAM") {
    shipping = 0;
  }
}

// Check if you need to show any warnings or prices
if (totalCost >=1000 && customers !== 1) {
  console.log(FREE_WARNING);
} else if (area === "NK") {
  console.log(BANNED_WARNING);
} else {
  console.log("Price:", currency, totalCost + shipping);
}