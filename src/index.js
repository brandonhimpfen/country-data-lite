import countries from "../data/countries.json" with { type: "json" };

function normalizeCode(value) {
  return String(value || "").trim().toUpperCase();
}

function normalizeName(value) {
  return String(value || "").trim().toLowerCase();
}

export function listCountries() {
  return countries.slice();
}

export function getCountryByCode(code) {
  const normalized = normalizeCode(code);
  return countries.find((country) => country.code === normalized) ?? null;
}

export function getCountryByName(name) {
  const normalized = normalizeName(name);
  return countries.find((country) => normalizeName(country.name) === normalized) ?? null;
}

export function hasCountry(codeOrName) {
  return Boolean(getCountryByCode(codeOrName) || getCountryByName(codeOrName));
}

export default {
  listCountries,
  getCountryByCode,
  getCountryByName,
  hasCountry
};
