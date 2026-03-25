# country-data-lite

A lightweight country data utility with currency, plugs, and visa basics.

This project provides a small, practical dataset and helper functions for working with country-level travel information. It is designed for applications that need quick access to common fields such as currency, plug types, voltage, and simple visa notes without depending on a large travel data platform.

It is intentionally minimal so it can be understood quickly, adopted easily, and extended over time.

## Why this project exists

A lot of country datasets are either too broad, too heavy, or not oriented toward practical travel use cases.

In many applications, you do not need every geopolitical field or a full statistical reference. You need a clean way to answer common questions such as:

- What currency does this country use?
- What plug types and voltage should a traveler expect?
- What is a simple high-level visa note?

This package provides a small and predictable starting point.

## Mental model

Think of this package as a lightweight reference layer:

`App -> Country Lookup -> Structured Country Data -> App`

It does not replace full travel intelligence systems.

It provides a simple, reusable base for applications, guides, tools, and content workflows.

## What is included

- A small country dataset in JSON format.
- Helper functions for lookup by code or name.
- Access to common travel-related fields.
- Minimal example usage.
- Basic tests.

## Install

```bash
npm install country-data-lite
```

## Example

```js
import {
  getCountryByCode,
  getCountryByName,
  listCountries
} from "country-data-lite";

const canada = getCountryByCode("CA");
console.log(canada.currency.code);
console.log(canada.plugs.types);

const japan = getCountryByName("Japan");
console.log(japan.visaBasics.note);

console.log(listCountries().length);
```

## Data shape

Each country entry follows a simple structure:

```json
{
  "name": "Canada",
  "code": "CA",
  "region": "North America",
  "currency": {
    "code": "CAD",
    "name": "Canadian dollar",
    "symbol": "$"
  },
  "plugs": {
    "types": ["A", "B"],
    "voltage": 120,
    "frequencyHz": 60
  },
  "visaBasics": {
    "note": "Visa requirements vary by nationality. Many travelers can enter visa-free or with an electronic authorization depending on citizenship.",
    "disclaimer": "Always verify visa requirements with official government sources before travel."
  }
}
```

## API

### `listCountries()`

Returns the full list of country entries.

### `getCountryByCode(code)`

Looks up a country by its ISO 3166-1 alpha-2 code.

### `getCountryByName(name)`

Looks up a country by name using a case-insensitive match.

### `hasCountry(codeOrName)`

Returns `true` if a country exists in the dataset.

## Design Principles

This project is intentionally minimal.

It focuses on a small set of practical travel-related fields rather than trying to become a complete country intelligence platform. The goal is to provide data that is easy to understand, easy to use, and easy to extend.

The design emphasizes:

- Simplicity over breadth.
- Practical travel fields over encyclopedic scope.
- Predictable structure over flexible complexity.
- Reusability over completeness.

## Non-Goals

This project does not attempt to:

- replace official immigration or customs guidance.
- provide real-time visa rules by nationality.
- model every country-level statistic or policy area.
- act as a full geopolitical or economic dataset.

It focuses on a stable, lightweight reference layer for common travel-related use cases.

## Roadmap

Future extensions may include:

- more countries and territories.
- time zone and emergency number fields.
- language and calling code fields.
- data validation utilities.
- optional filtering helpers.

## Availability

country-data-lite is intended to be published as an npm package and maintained as an open-source project.

## License

MIT
