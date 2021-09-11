const express = require('express');
const ejs = require('ejs');
const pageRouter = require('./routers/pageRouter');

const app = express();


//Template Engine
app.set('view engine', 'ejs');

//Routers
app.use('/', pageRouter);

//Connect DB

//Middlewares
app.use(express.static('public'));

//Configs
const port = 3000;

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
