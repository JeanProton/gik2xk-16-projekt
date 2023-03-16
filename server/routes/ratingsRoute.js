const router = require("express").Router();
const db = require("../models");

/*-----------GET----------*/
router.get("/", (req, res) => {
  db.ratings.findAll().then((result) => {
    res.send(result);
  });
});
/*-----------CREATE/POST----------- */
router.post("/", (req, res) => {
  db.ratings.create(req.body).then((result) => {
    res.send(result);
  });
});
/* ----------UPDATE/PUT-----------*/
router.put("/", (req, res) => {
  db.ratings
    .update(req.body, {
      where: { id: req.body.id },
    })
    .then((result) => {
      res.send(result);
    });
});
/*-----------DELETE----------- */
router.delete("/", (req, res) => {
  db.ratings
    .destroy({
      where: { id: req.body.id },
    })
    .then((result) => {
      res.json("Ratings raderades");
    });
});

module.exports = router;
