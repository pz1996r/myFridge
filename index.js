const config = require('config');
const express = require("express");
const app = express();
const products = require('./routes/products');
const fridge = require('./routes/fridge');
require("./startup/prod")(app);
require("./startup/db")();
require('./startup/routes');

app.use(express.json());
app.use('/api/products', products);
app.use('/api/fridge', fridge);

if (!config.get('jwtPrivateKey')) {
  console.error('FATAL ERROR: jwtPrivateKey is not defined.');
  process.exit(1);
}

app.get("/", (req, res) => {
  res.send("Hello world");
});

const port = process.env.PORT || 8000;
const index = app.listen(port, () =>
  console.log(`Listening on port ${port}...`)
);

module.exports = index;
