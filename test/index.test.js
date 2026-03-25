import test from "node:test";
import assert from "node:assert/strict";
import {
  listCountries,
  getCountryByCode,
  getCountryByName,
  hasCountry
} from "../src/index.js";

test("listCountries returns an array", () => {
  const countries = listCountries();
  assert.equal(Array.isArray(countries), true);
  assert.ok(countries.length >= 10);
});

test("getCountryByCode returns a country for valid code", () => {
  const canada = getCountryByCode("ca");
  assert.equal(canada.name, "Canada");
  assert.equal(canada.currency.code, "CAD");
});

test("getCountryByName returns a country for valid name", () => {
  const japan = getCountryByName("japan");
  assert.equal(japan.code, "JP");
  assert.equal(japan.plugs.voltage, 100);
});

test("getCountryByCode returns null for unknown code", () => {
  assert.equal(getCountryByCode("XX"), null);
});

test("hasCountry supports code or name", () => {
  assert.equal(hasCountry("FR"), true);
  assert.equal(hasCountry("France"), true);
  assert.equal(hasCountry("Atlantis"), false);
});
