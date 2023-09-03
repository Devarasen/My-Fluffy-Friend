const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const { Pet, Category } = require("../../models");

// Multer configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/images");
  },
  filename: (req, file, cb) => {
    const petName = req.body.petName;
    const sanitizedPetName = petName.replace(/[^a-zA-Z0-9]/g, "_");
    filename = `${sanitizedPetName}${path.extname(file.originalname)}`;
    const imagePath = `/images/${filename}`; // Add the /images/ prefix
    cb(null, filename);

    // Also update the image filename in the petData object before storing it in the database
    req.body.image = imagePath;
    console.log(imagePath);
  },
});

const upload = multer({ storage: storage });

router.post("/post-pet", upload.single("image"), async (req, res) => {
  try {
    console.log("Req Body:", req.body);
    console.log("Req File:", req.file);

    const { petName, species, breed, age } = req.body;
    // const image = req.file ? req.file.filename : null;

    const category_id = species.toLowerCase() === "cat" ? 2 : 1;

    // Create a new pet record
    const petData = await Pet.create({
      pet_name: petName,
      category_id: category_id,
      breed,
      age,
      image: `/images/${filename}`,
    });

    console.log("Entered Pet Data:", petData);

    res.status(200).json(petData);
  } catch (error) {
    console.error("Error:", error);
    res.status(400).json(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const petData = await Pet.findAll({
      include: [Category],
    });
    const formattedPetData = petData.map((pet) => pet.get({ plain: true }));
    res.status(200).json(formattedPetData);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const petData = await Pet.findByPk(req.params.id, {
      include: [Category],
    });
    const formattedPetData = petData.get({ plain: true });
    res.status(200).json(formattedPetData);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
