const express = require("express");
var router = express();
const create = require("../controller/contact");
const view = require("../controller/contact");
const update = require("../controller/contact");
const remove = require("../controller/contact");
const bodyparser = require("body-parser");

router.use(bodyparser.json());
router.post("/create", create.create);
router.get("/", view.view);
router.patch("/:id", update.update);
router.delete("/delete/:id", remove.remove);

module.exports = router;
