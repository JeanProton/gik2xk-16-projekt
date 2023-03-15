const router = require("express").Router();
const db = require("../models");


/*-----------GET----------*/
router.get("/", (req, res) => {
    db.products.findAll().then((result) => {
        res.send(result);
    })
});
/*-----------CREATE/POST----------- */
router.post("/", (req, res) => {
    db.products.create(req.body).then(result => {
        res.send(result);
    });
});
/* ----------UPDATE/PUT-----------*/
router.put("/", (req,res) => {
    db.products.update(req.body, {
        where: { product_id: req.body.id }
    })
    .then((result) => {
        res.send(result);

    });
});
/*-----------DELETE----------- */
router.delete("/", (req,res) => {
    db.products.destroy({
        where: { product_id: req.body.id }
    })
    .then((result) => {
        res.json("Produkten raderades");
    });
});


module.exports = router;