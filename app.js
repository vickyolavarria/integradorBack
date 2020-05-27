const express = require('express');
const app = express();
const volleyball = require("volleyball");
const nunjucks = require("nunjucks");
const routes = require('./routes/index');
const db = require('./db/index')

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('view engine', 'html'); // hace que res.render funcione con archivos html
app.engine('html', nunjucks.render); // cuando le den archivos html a res.render, va a usar nunjucks
nunjucks.configure('views', { noCache: true }); // apunta a nunjucks al directorio correcto para los templates

app.use(volleyball)

app.use("/", routes);

// Donde tu servidor y la app de express están siendo definidas
// ... otras cosas

db.sync({force:false})
  .then(function () {
    app.listen(3000, function () {
      console.log("Server is listening on port 3000!");
    });
  })
  .catch(console.error); 