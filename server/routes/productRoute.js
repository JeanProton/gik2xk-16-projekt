const router = require("express").Router();
/* const db = require("../models"); */
const productService = require("../services/productService");

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
  productService.getAll().then((result) => {
    res.status(result.status).json(result.data);
  });
});

/*-----------CREATE/POST----------- */

router.post("/", (req, res) => {
  const post = req.body;
  productService.create(post).then((result) => {
    res.status(result.status).json(result.data);
  });
});

/* ----------UPDATE/PUT-----------*/

router.put("/", (req, res) => {
  const post = req.body;
  const id = post.id;
  productService.update(post, id).then((result) => {
    res.status(result.status).json(result.data);
  });
});

/*-----------DELETE----------- */

router.delete("/", (req, res) => {
  const id = req.body.id;
  productService.destroy(id).then((result) => {
    res.status(result.status).json(result.data);
  });
});

module.exports = router;
