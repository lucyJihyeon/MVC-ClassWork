// Dependencies
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const hbs = exphbs.create({});


// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

// TODO: Describe what the following two lines of code are doing.
//it sets up the files with the file extension .handlebars as the template engine handlebars
app.engine('handlebars', hbs.engine);
//it sets the default view engine as the files with extensioin handlebars 
app.set('view engine', 'handlebars');


app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./controllers/dish-routes'));

// Starts the server to begin listening
app.listen(PORT, () => {
  console.log('Server listening on: http://localhost:' + PORT);
});

