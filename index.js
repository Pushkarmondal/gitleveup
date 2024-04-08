const express = require("express");
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("Hello");
})

app.get('/Github', (req, res) => {
    res.send("Pushkarmondal79");
})

app.get("/twitter", (req, res) => {
  res.send("<h1>Please follow me on Twitter</h1>");
})

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});