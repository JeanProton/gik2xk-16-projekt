const router = require("express").Router();
const db = require("../models");


/*-----------GET----------*/
router.get("/", (req, res) => {
    db.cart_rows.findAll().then((result) => {
        res.send(result);
    })
});
/*-----------CREATE/POST----------- */
router.post("/", (req, res) => {
    db.cart_rows.create(req.body).then(result => {
        res.send(result);
    });
});
/* ----------UPDATE/PUT-----------*/
router.put("/", (req,res) => {
    db.cart_rows.update(req.body, {
        where: { rows_id: req.body.id }
    })
    .then((result) => {
        res.send(result);

    });
});
/*-----------DELETE----------- */
router.delete("/", (req,res) => {
    db.cart_rows.destroy({
        where: { rows_id: req.body.id }
    })
    .then((result) => {
        res.json("Kundvagnsrader raderades");
    });
});


module.exports = router;