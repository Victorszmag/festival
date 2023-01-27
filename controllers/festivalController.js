const express = require("express");
const router = express.Router();

/**
 * Models
 */
const Festival = require("../models/festivals");

//Index
router.get("/" , (req, res) => {
    Festival.find({},(error, allFestivals) => {
        res.render("festivals/Index", {
            festivals:allFestivals,
        });
    });
});


//Update
router.put("/:id",(req, res) =>{
    Festival.findByIdAndUpdate{
        req.params.id,
        req.body,
        (err, updateFestival) => {
            if(err) {
                return res.send({ error: err});
            }
            console.log("updatedFestivals" , updatedFestival);
            res.redirect(`/festivals/${req.params.id}`);
        }
    };
});


//Edit
router.get("/:id/edit" , (req,res)=>{
    Festival.findById(req.params.id, (err, foundFestival) => {
        if (!err) {
            res.render("festivals/Edit",{
                festival: foundFestival,
            });
        } else {
            res.send({ msg: err.message});
        }
    });
});


//Create
router.post("/", (req, res) => {
    Festival.create(req.body, (error, createdFestival) => {
        res.redirect("/festivals");
    });
});

//Delete
router.delete("/:id", (req, res) => {
    Festival.findByIdAndRemove(req.params.id, (err,data) => {
        res.redirect("/festivals");
    });
});


//New
router.get("/new", (req,res)=> {
    res.render("festivals/New");
});

//Show- Route
router.get("/:id" ,(req, res) => {
    const { id } = req.params;

    Festival.findById(id, ( error, foundFestival) => {
        res.render("festivals/Show" , {
            festival:foundFestival,
        });
    });

});

module.exports = router;
