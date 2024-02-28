import express from "express";
import model from "./model.js";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

//Home page route
app.get("/", async (req, res) => {
    try {
        const data = await model.findAll();
        res.render("home/home.ejs", { data: data });
    }
    catch (error) {
        res.status(500).json({
            error: "An error occured while fetching data."
        });
    }
});

//New entry route
app.route("/new")
    .get((req, res) => {
        res.render("new/new.ejs");
    })
    .post(async (req, res) => {
        try {
            await model.create({
                title: req.body.title,
                author: req.body.author,
                isbn: parseInt(req.body.isbn),
                pages: parseInt(req.body.pages),
                description: req.body.description,
                notes: req.body.notes
            });
            res.redirect("/");
        }
        catch (error) {
            res.status(500).json({
                error: "An error occured while adding data."
            });
        }
    });

//Details route
app.get("/:id", async (req, res) => {
    try {
        const data = await model.findByPk(req.params.id);
        res.render("details/details.ejs", { data: data })
    }
    catch (error) {
        res.status(404).json({
            error: "Not found."
        });
    }
});

//Edit route
app.route("/edit/:id")
    //Get edit page
    .get(async (req, res) => {
        try {
            const data = await model.findByPk(req.params.id);
            res.render("edit/edit.ejs", { data: data });
        }
        catch (error) {
            res.status(500).json({
                error: "An error occured while fetching data."
            });
        }
    })
    //Edit entry
    .post(async (req, res) => {
        try {
            await model.update({
                title: req.body.title,
                author: req.body.author,
                isbn: parseInt(req.body.isbn),
                pages: parseInt(req.body.pages),
                description: req.body.description,
                notes: req.body.notes
            }, {
                where: {
                    id: req.params.id
                }
            });
            res.redirect("/");
        }
        catch (error) {
            res.status(500).json({
                error: "An error occured while adding data."
            });
        }
    });

//Delete route
app.delete("/:id", async (req, res) => {
    try {
        await model.destroy({
            where: {
                id: req.params.id
            }
        });
        res.sendStatus(200);
    }
    catch (error) {
        res.status(500).json({
            error: "An error occured while trying to delete data."
        });
    }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});