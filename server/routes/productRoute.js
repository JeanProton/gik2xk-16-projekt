const router = require("express").Router();
const db = require("../models");

/*---------VALIDERING--------- */
const validate = require("validate.js");
const constraints = {
  image_url: {
    url: {
      message: "^Sökvägen är felaktig",
    },
  },
};

/*-----------GET----------*/
router.get("/", (req, res) => {
  db.products.findAll().then((result) => {
    res.send(result);
  });
});
/*-----------CREATE/POST----------- */
router.post("/", (req, res) => {
  const invalidData = validate(req.body, constraints);
  if (invalidData) {
    res.status(400).json(invalidData);
  } else {
    db.products.create(req.body).then((result) => {
      res.send(result);
    });
  }
});
/* ----------UPDATE/PUT-----------*/
router.put("/", (req, res) => {
  db.products
    .update(req.body, {
      where: { id: req.body.id },
    })
    .then((result) => {
      res.send(result);
    });
});
/*-----------DELETE----------- */
router.delete("/", (req, res) => {
  db.products
    .destroy({
      where: { id: req.body.id },
    })
    .then((result) => {
      res.json("Produkten raderades");
    });
});

module.exports = router;
