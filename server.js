const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;
const routes = require("./controllers");
app.use(routes);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

// Routes
// const petRoutes = require("./controllers/api/petRoutes"); // Adjust the path as needed
// app.use("/pets", petRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
