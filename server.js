// make directory ==> cd into that directory ==> touch server.js ==> npm init ==> THEN you install the packages you want

// * note: WE HAVE ACCESS TO EXPRESS IN THIS FILE BECAUSE WE ALREADY INSTALLED EXPRESS INTO OUR DIRECTORY (locally, in this case, the homework-w05d2 directory)
// *** ALWAYS install express *locally*, NEVER globally.
// ==> npm i express | In the command line
const express = require("express");
const app = express();

// GREETINGS - EXPRESS APP
// Create route with path of 'greeting' and a parameter of 'name'...
app.get("/greeting/:name", (req, res) => {
  const name = req.params.name; // attach the parameter we pass through our route to a variable

  // Display a greeting...
  res.send(`<h1>Hey hi hello there, ${name}!`); // SEND a RESPONSE of a greeting to the screen, using our variable declared above
});

// TIP CALCULATOR - EXPRESS APP
// Create a route with path of 'tip' with 2 parameters: 'total' and 'tipPercentage'...
app.get("/tip/:total/:tipPercentage", (req, res) => {
  const total = parseInt(req.params.total); // attach the first parameter we pass through our route to a variable
  const tipNum = parseInt(req.params.tipPercentage); // attach the second parameter we pass through our route to a variable
  const tipPercentage = tipNum / 100;

  // Display how much your tip should be based on total * tipPercentage...
  const tipValue = total * tipPercentage; // tip = total cost * desired tip percentage

  res.send(
    `<h1 style="text-align: center">Since your total bill was: $${total} <br />
    <br />
    And your desired tip-percentage is: %${tipNum} <br />
    <br />
    <br />
    You should tip: $${tipValue}</h1>`
  );
});

// Tell the server where to listen for requests (specifically, the port)
app.listen(3000, () => {
  console.log("Listening on Port: 3000");
});
