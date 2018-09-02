/*
Instructions:
On line 8, give your <li></li> a key attribute.

What should key's value be? In this case, the answer is surprisingly tricky.

.map() is going to loop over your expression on line 8, creating a new <li></li> with a new key attribute on each loop. You need every key to be unique! How can you get .map() to produce a unique key, each time it loops?

First, add an i parameter to .map()'s inner function, so that you can access each person's unique index:

const peopleLIs = people.map((person, i) =>
Now, you can get a unique key on each loop, by adding the following attribute to your <li></li>:

key={'person_' + i}
*/

import React from "react";
import ReactDOM from "react-dom";

const people = ["Rowe", "Prevost", "Gare"];

const peopleLis = people.map((person, i) => (
  // expression goes here:
  <li key={"person_" + i}>{person}</li>
));

// ReactDOM.render goes here:
ReactDOM.render(<ul>{peopleLis}</ul>, document.getElementById("app"));
