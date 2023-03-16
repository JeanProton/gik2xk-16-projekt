const router = require("express").Router();
const db = require("../models");
const userService = require("../services/userService");

/*-----------GET-----------------*/
router.get("/", (req, res) => {
  userService.getAll().then((result) => {
    res.status(result.status).json(result.data);
  });
});

/*-----------CREATE/POST----------- */
router.post("/", (req, res) => {
  const post = req.body;
  userService.create(post).then((result) => {
    res.status(result.status).json(result.data);
  });
});

/* ----------UPDATE/PUT-----------*/
router.put("/", (req, res) => {
  const post = req.body;
  const id = post.id;
  userService.update(post, id).then((result) => {
    res.status(result.status).json(result.data);
  });
});

/*-----------DELETE----------- */
router.delete("/", (req, res) => {
  const id = req.body.id;
  userService.destroy(id).then((result) => {
    res.status(result.status).json(result.data);
  });
});

module.exports = router;
