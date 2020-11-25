// make directory ==> cd into that directory ==> touch server.js ==> npm init ==> THEN you install the packages you want

// * note: WE HAVE ACCESS TO EXPRESS IN THIS FILE BECAUSE WE ALREADY INSTALLED EXPRESS INTO OUR DIRECTORY (locally, in this case, the homework-w05d2 directory)
// *** ALWAYS install express *locally*, NEVER globally.
// ==> npm i express | In the command line
const express = require("express");
const app = express();

// GREETING EXPRESS APP
// Create route with path of 'greeting' and a parameter of 'name'
app.get("/greeting/:name", (req, res) => {
  const name = req.params.name; // attach the parameter we pass through our route to a variable

  res.send(`<h1>Hey hi hello there, ${name}!`); // SEND a RESPONSE of a greeting to the screen, using our variable declared above
});

// Tell the server where to listen for requests (specifically, the port)
app.listen(3000, () => {
  console.log("Listening on Port: 3000");
});
