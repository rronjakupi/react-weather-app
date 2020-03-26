import React from "react";

// Styling
import "../sass/app.scss";

const data = [
  { key: "01", value: "Pristina", text: "Pristina" },
  { key: "02", value: "Mitrovice", text: "Mitrovice" },
  { key: "03", value: "Peje", text: "Peje" },
  { key: "04", value: "Prizren", text: "Prizren" },
  { key: "05", value: "Ferizaj", text: "Ferizaj" },
  { key: "06", value: "Gjilan", text: "Gjilan" },
  { key: "07", value: "Gjakove", text: "Gjakove" },
  { key: "tr", value: "Tirana", text: "Tirana" },
  { key: "ld", value: "London", text: "London" },
  { key: "be", value: "Berlin", text: "Berlin" },
  { key: "ny", value: "New York", text: "New York" }
];

const Dropdown = props => {
  return (
    <select className="dropdown" onChange={props.onChange}>
      {data.map(place => (
        <option key={place.key} value={place.value} className="option-dropdown">
          {place.text}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
