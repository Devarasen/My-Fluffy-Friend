const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;
const routes = require("./controllers");
// const SequelizeStore = require("connect-session-sequelize")(session.Store);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Sets up session for cookies and connect to our Sequelize db
// const sess = {
//   secret: "Super secret secret",
//   cookie: {
//     maxAge: 60 * 60 * 1000,
//     httpOnly: true,
//     secure: false,
//     sameSite: "strict",
//   },
//   resave: false,
//   saveUninitialized: true,
//   store: new SequelizeStore({
//     db: sequelize,
//   }),
// };

// app.use(session(sess));

app.use(routes);

// View engine setup
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main",
    layoutsDir: path.join(__dirname, "views/layouts"),
    partialsDir: path.join(__dirname, "views/partials"),
  })
);
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
