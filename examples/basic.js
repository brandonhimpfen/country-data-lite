import { getCountryByCode, getCountryByName } from "../src/index.js";

const canada = getCountryByCode("CA");
console.log("Canada currency:", canada.currency.code);
console.log("Canada plug types:", canada.plugs.types.join(", "));

const france = getCountryByName("France");
console.log("France visa note:", france.visaBasics.note);
