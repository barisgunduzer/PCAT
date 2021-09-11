const express = require('express');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');
const ejs = require('ejs');
const pageRouter = require('./routers/pageRouter');
const photoRouter = require('./routers/pageRouter');

const { redirect } = require('express/lib/response');

const app = express();

//Connect DB
mongoose.connect(
  'mongodb+srv://baris:YHTo6WDJnzgNcBUa@cluster0.ckjpb.mongodb.net/pcat-db?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }
)
.then(() => {
  console.log('DB CONNECTED!');
})
.catch((err) => {
  console.log(err);
});

//Template Engine
app.set('view engine', 'ejs');

//Middlewares
app.use(express.static('public'));
app.use(fileUpload());
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

//Routers
app.use('/', pageRouter);
app.use('/photos', photoRouter);

//Configs
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
