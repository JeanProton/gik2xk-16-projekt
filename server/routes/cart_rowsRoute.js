const router = require("express").Router();
const db = require("../models");

/*-----------GET----------*/
router.get("/", (req, res) => {
  db.cart_row.findAll().then((result) => {
    res.send(result);
  });
});
/*-----------CREATE/POST----------- */
router.post("/", (req, res) => {
  db.cart_row.create(req.body).then((result) => {
    res.send(result);
  });
});
/* ----------UPDATE/PUT-----------*/
router.put("/", (req, res) => {
  db.cart_row
    .update(req.body, {
      where: { id: req.body.id },
    })
    .then((result) => {
      res.send(result);
    });
});
/*-----------DELETE----------- */
router.delete("/", (req, res) => {
  db.cart_row
    .destroy({
      where: { id: req.body.id },
    })
    .then((result) => {
      res.json("Kundvagnsrader raderades");
    });
});

module.exports = router;
