// make directory ==> cd into that directory ==> touch server.js ==> npm init ==> THEN you install the packages you want

// * note: WE HAVE ACCESS TO EXPRESS IN THIS FILE BECAUSE WE ALREADY INSTALLED EXPRESS INTO OUR DIRECTORY (locally, in this case, the homework-w05d2 directory)
// *** ALWAYS install express *locally*, NEVER globally.
// ==> npm i express | In the command line
const express = require("express");
const app = express();

// GREETINGS - EXPRESS APP
// Create route with path of 'greeting' and a parameter of 'name'...
///////////////////////////////////////////////////////////////////////////////////////
app.get("/greeting/:name", (req, res) => {
  const name = req.params.name; // attach the parameter we pass through our route to a variable

  // Display a greeting...
  res.send(`<h1>Hey hi hello there, ${name}!`); // SEND a RESPONSE of a greeting to the screen, using our variable declared above
});

// TIP CALCULATOR - EXPRESS APP
// Create a route with path of 'tip' with 2 parameters: 'total' and 'tipPercentage'...
///////////////////////////////////////////////////////////////////////////////////////
app.get("/tip/:total/:tipPercentage", (req, res) => {
  const total = parseInt(req.params.total); // convert parameter to an Integer, then attach to a variable
  const tipNum = parseInt(req.params.tipPercentage); // convert parameter to an Integer, then attach to a variable
  const tipPercentage = tipNum / 100; // convert Integer to a decimal, then attach to a new variable | so we can easily print the Int and use the Decimal for the math

  // Display how much your tip should be based on total * tipPercentage...
  const tipValue = total * tipPercentage; // tip = total cost * desired tip percentage

  // Response
  res.send(
    `<h1 style="text-align: center">Since your total bill was: $${total} <br />
    <br />
    And your desired tip-percentage is: %${tipNum} <br />
    <br />
    <br />
    You should tip: $${tipValue}</h1>`
  );
});

// MAGIC 8-BALL - EXPRESS APP
// Create a route with path of 'magic' with a parameter of a question (specifically, made to receive ==> 'Will%20I%20Be%20A%20Millionaire'... )
///////////////////////////////////////////////////////////////////////////////////////
const responses = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes definitely",
  "You may rely on it",
  "As I see it yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful",
];

app.get("/magic/:question", (req, res) => {
  const question = req.params.question; // attach the parameter we pass through our route to a variable
  const randomResponse =
    responses[Math.floor(Math.random() * responses.length)]; // return a random index between 0 and 19

  // Response
  res.send(`
  <h1>${question}???</h1>
  <h1>...${randomResponse}</h1>`);
});

// TAKE ONE DOWN... - EXPRESS APP
// Create a route with path of 'take_one' with a parameter of number_of_bottles...
///////////////////////////////////////////////////////////////////////////////////////
app.get("/takeOne/:numListens", (req, res) => {
  const numberOfListens = parseInt(req.params.numListens);
  const nextListen = numberOfListens + 1; // yes, purposely incrementing instead of decrementing | it's for the theme, yo

  res.send(
    `
    <h1><a href="/takeOne/${nextListen}">${numberOfListens} Listens of Pink Floyd's the Wall</a></h1>
    <br />
    <iframe width="560" height="315" src="https://www.youtube.com/embed/iLFwTqdsuxw?start=19" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <br />
    <br />
    <h1>Platter down, queue one more round...</h1>
    <br />
    <h1><a href="/takeOne/${nextListen}">${numberOfListens} Listens of Pink Floyd's the Wall</a></h1>
    `
  );
});

// Tell the server where to listen for requests (specifically, the port)
///////////////////////////////////////////////////////////////////////////////////////
app.listen(3000, () => {
  console.log("Listening on Port: 3000");
});
