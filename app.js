const express = require('express');
const ejs = require('ejs');
const flash = require('connect-flash');
const pageRouter = require('./routers/pageRouter');

const app = express();

//Template Engine
app.set('view engine', 'ejs');

//Routers
app.use('/', pageRouter);

//Connect DB

//Middlewares
app.use(express.static('public'));

app.use(flash());

app.use((req, res, next) => {
  res.locals.messages = req.flash();
  next();
});

//Configs
const port = 3000;

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
