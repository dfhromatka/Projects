import React from "react";
import ReactDOM from "react-dom";

const people = ["Rowe", "Prevost", "Gare"];

const peopleLis = people.map(person => (
  // expression goes here:
  <li>{person}</li>
));

// ReactDOM.render goes here:
// note the curly braces around the peopleLis array variable
ReactDOM.render(<ul>{peopleLis}</ul>, document.getElementById("app"));
