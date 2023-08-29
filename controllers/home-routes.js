// const router = require("express").Router();
// const { Pet, Category, AdoptionCenter } = require("../models");

// router.get("/", async (req, res) => {
//   return res.render("home");
// });

// router.get("/petRoutes", async (req, res) => {
//   try {
//     const petData = await Pet.findAll({
//       include: [Category, AdoptionCenter],
//     });
//     const formattedPetData = petData.map((pet) => pet.get({ plain: true }));
//     res.render("pets", { petData: formattedPetData });
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });

// router.get("/petRoutes/:id", async (req, res) => {
//   try {
//     const petData = await Pet.findByPk(req.params.id, {
//       include: [Category, AdoptionCenter],
//     });
//     const formattedPetData = petData.get({ plain: true });
//     res.render("pet", { petData: formattedPetData });
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });

// module.exports = router;



const router = require("express").Router();
const { Pet, Category, AdoptionCenter } = require("../models");

// Import your authentication-related functions if you haven't already
const { loginUser } = require("../utils/auth");

router.get("/", async (req, res) => {
  return res.render("home");
});

// Login Route
router.get("/login", async (req, res) => {
  return res.render("login");
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await loginUser(username, password); // Implement your authentication function
    if (user) {
      // Successful login, create a session or token as needed
      req.session.user = user; // Example: Storing user in session
      res.redirect("/dashboard"); // Redirect to the dashboard or another page
    } else {
      res.status(401).render("login", { error: "Invalid credentials" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).render("login", { error: "Internal server error" });
  }
});

// Post Adoption Form Route
router.get("/post-adoption", async (req, res) => {
  return res.render("postAdoption");
});

router.post("/post-adoption", async (req, res) => {
  const { petName, species, description } = req.body;

  try {
    // Create the adoption submission in the database
    // Adjust this part based on your adoption submission logic
    await createAdoptionSubmission({
      petName,
      species,
      description,
      userId: req.session.user.id, // Assuming you have user authentication in place
    });

    res.redirect("/dashboard"); // Redirect to a success page or dashboard
  } catch (error) {
    console.error(error);
    res.status(500).render("postAdoption", { error: "Internal server error" });
  }
});

router.get("/petRoutes", async (req, res) => {
  try {
    const petData = await Pet.findAll({
      include: [Category, AdoptionCenter],
    });
    const formattedPetData = petData.map((pet) => pet.get({ plain: true }));
    res.render("pets", { petData: formattedPetData });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/petRoutes/:id", async (req, res) => {
  try {
    const petData = await Pet.findByPk(req.params.id, {
      include: [Category, AdoptionCenter],
    });
    const formattedPetData = petData.get({ plain: true });
    res.render("pet", { petData: formattedPetData });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
