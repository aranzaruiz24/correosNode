const express = require("express"); //importar express
const bodyParser = require("body-parser");
const app = express(); //crear al servidor
const port = process.env.PORT || 3000;
const cors = require("cors");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use(require('./routes/correoRoutes'));

app.listen(port, () => {
    console.log(`hola servidor ejecucion en http://localhost:${port}`);
})