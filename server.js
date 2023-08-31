const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;
const routes = require("./controllers");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const sequelize = require("./config/connection");

// Multer

const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

// Middleware
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Sets up session for cookies and connect to our Sequelize db
const sess = {
  secret: "Super secret secret",
  cookie: {
    maxAge: 60 * 60 * 1000,
    httpOnly: true,
    secure: false,
    sameSite: "strict",
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

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

// Multer

app.get("/upload", (req, res) => {
  res.render("upload");
});

app.post("/upload", upload.single("image"), (req, res) => {
  res.send("image uploade");
});

// Start the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log("Server listening on: http://localhost:" + PORT);
  });
});

// Code for handlebars

{
  /* <h1>Upload Image</h1>
<form method="POST" action="/upload" enctype="multipart/form-data">
  <input type="file name="image>
  <input type="submit">  
</form> */
}
