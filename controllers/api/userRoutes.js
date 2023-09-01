const router = require("express").Router();
const { User } = require("../../models");

// Get userData - test
router.get("/", async (req, res) => {
  try {
    const userData = await User.findAll();
    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Login post request
router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    // Log the stored password hash
    console.log("Stored password hash:", userData.password);

    if (!userData) {
      return res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
    }

    // Log the incoming password
    console.log("Incoming password:", req.body.password);

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      return res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
    }

    req.session.save((err) => {
      if (err) {
        console.error("Session save error:", err);
        return res.status(500).json({ message: "Error saving session." });
      }
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ message: "Login successful", user_id: userData.id });
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "An error occurred", error: err });
  }
});

// Post request to logout
router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      console.log("Log Out Success");
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
