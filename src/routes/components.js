const express = require("express");

const { getSignle, post } = require("./../controllers/components");
const checkAdmin = require("./../lib/checkAdmin");

const router = express.Router();

router
    .route("/")
        .post(checkAdmin, post);

router
    .route("/:id")
        .get(getSignle);

module.exports = router;
