const router = require("express").Router();
const db = require("../models");


/*-----------GET----------*/
router.get("/", (req, res) => {
    db.cart.findAll().then((result) => {
        res.send(result);
    })
});
/*-----------CREATE/POST----------- */
router.post("/", (req, res) => {
    db.cart.create(req.body).then(result => {
        res.send(result);
    });
});
/* ----------UPDATE/PUT-----------*/
router.put("/", (req,res) => {
    db.cart.update(req.body, {
        where: { cart_id: req.body.id }
    })
    .then((result) => {
        res.send(result);

    });
});
/*-----------DELETE----------- */
router.delete("/", (req,res) => {
    db.cart.destroy({
        where: { cart_id: req.body.id }
    })
    .then((result) => {
        res.json("Kundvagnen raderades");
    });
});


module.exports = router;