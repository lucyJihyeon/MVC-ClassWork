const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');

const sequelize = require('./config/connection');

// TODO: Add a comment describing the functionality of this expression
//allows users to store session data in a database 
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({ helpers });

// TODO: Add a comment describing the functionality of this object
//defines how to store the sessions data 
const sess = {
  //used to sign the session ID cookie to prevent hijacking
  secret: 'Super secret secret',
  //data stored in a cookie
  cookie: {},
  //doesn't resave 
  resave: false,
  //session is always created for every request
  saveUninitialized: true,
  //session data stored in sequelize database 
  store: new SequelizeStore({
    db: sequelize
  })
};

// TODO: Add a comment describing the functionality of this statement
//confifure and initialize the session middleware everytime when http request is recieved. 
app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
