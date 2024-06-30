const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");

const componentsRoutes = require("./routes/components");

const app = express();
dotenv.config();

app.use(cookieParser());
app.use(express.json());

app.use("/components", componentsRoutes);

app.get("/", (req, res) => res.send("Welcome to the ms."));

const port = process.env.PORT || 4000;

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Server connected to DB...");

        app.listen(port, () => console.log(`Server running on port ${port}...`));
    });
