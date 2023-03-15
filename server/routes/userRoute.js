/**-----------EJ KLAR, FATTAR IJNTE BOOLEAN----------------- */




const router = require("express").Router();
const db = require("../models");

/**Jämför ett objekt mot en uppsättning regler av et annat objekt  */
const validate = require("validate.js");
/*regler: */
const constraints = {
  email: {
    email: {
      message: 'Please enter a valid email address',
    },
  },
};



/*------------------ VISA INNEHÅLL I USER DATABASEN----------*/
router.get("/", (req, res) => {
    db.users.findAll().then((result) => {
        res.send(result);
    })
});

/*-----------CREATE----------- */
router.post("/", (req, res) => {
    const invalidData = validate(req.body, constraints);
    if(invalidData){
        res.status(400).json(invalidData);
    }   else {
        db.users.create(req.body).then(result => {
            res.send(result);
        });
    }
});

/* ----------UPDATE-----------*/
router.put("/", (req,res) => {
    db.users.update(req.body, {
        where: { user_id: req.body.id }
    })    
    .then((result) => {
        res.send(result);

    });
});

/*-----------DELETE----------- */
router.delete("/", (req,res) => {
    db.users.destroy({
        where: { user_id: req.body.id }
    })
    .then((result) => {
        res.json("Användaren raderades");
    });
});


module.exports = router;