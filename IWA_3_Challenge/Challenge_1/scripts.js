// scripts.js

import { company } from "./Configuration.js";
import { year } from "./Configuration.js";

const message = "© " + company + " (" + year + ")";
document.querySelector("footer").innerText = message;

console.log(message)