const fs = require("fs");
const path = require("path");

const Model = require("./../models/components");
const htmlTemplate = require("./../lib/htmlTemplate");

const getSignle = async (req, res) => {
    res.sendFile(path.join(__dirname, "..", "..", "storage", `${req.params.id}.html`));
}

const post = async (req, res) => {
    if(!req.body.name || !req.body.type || !req.body.content.html)
        return res.json("Fill out the necessary fields.");

    try {
        const data = {
            name: req.body.name,
            type: req.body.type,
            content: {
                html: req.body.content.html,
                js: req.body.content.js && req.body.content.js
            }
        }
    
        const component = await Model.create(data);

        let
            content = htmlTemplate.replace("{{ htmlContent }}", `<main>${req.body.content.html}</main>`);
            content = content.replace("{{ jsContent }}", req.body.content?.js || "");

        fs.writeFile(path.join(__dirname, "..", "..", "storage", `${component._id}.html`), content, err => {
            if(err) {
                console.error(err);
                return res.json({ error: "Couldn't create file." });
            }

            res.json(component);
        });
    } catch(err) {
        console.error(err);
        res.json({ error: "Couldn't create component." });
    }
}

module.exports = { getSignle, post }
