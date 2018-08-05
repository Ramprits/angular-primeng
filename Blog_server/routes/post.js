var express = require("express");
var router = express.Router();
const Post = require("../models/post");
const multer = require("multer");


router.get("/", function (req, res) {
    Post.find()
        .then(data => {
            res.status(200).json({
                message: "Sucessfully retrived !",
                posts: data
            });
        })
        .catch(err => {
            console.error(err.status);
        });
});

const MIME_TYPE_MAP = {
    "image/png": "png",
    "image/jpeg": "jpg",
    "image/jpg": "jpg"
};
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const isValid = MIME_TYPE_MAP[file.mimetype];
        let error = new Error("Invalid mime type");
        if (isValid) {
            error = null;
        }
        cb(error, "images");
    },
    filename: (req, file, cb) => {
        const name = file.originalname
            .toLowerCase()
            .split(" ")
            .join("-");
        const ext = MIME_TYPE_MAP[file.mimetype];
        cb(null, name + "-" + Date.now() + "." + ext);
    }
});

router.post("/", multer({storage: storage}).single("image"), function (req, res, next) {
    const url = req.protocol + "://" + req.get("host");
    const post = new Post({
        name: req.body.name,
        email: req.body.email,
        body: req.body.body,
        image: url + "/images/" + req.file.filename,
        createdDate: req.body.createdDate
    });
    console.log(post)
    post
        .save()
        .then(data => {
            res.status(201).json({
                message: "Ceated sucessfully",
                postId: data._id
            });
        })
        .catch(error => {
            console.error("Unable to save post", error);
        });
});

router.delete("/:id", function (req, res, next) {
    Post.deleteOne({_id: req.params.id})
        .then(res => {
            console.log(req.params.id);
            res.status(200).json({
                message: "Deleted sucessfully "
            });
        })
        .catch(() => {
            console.log("Unable to delete");
        });
});

module.exports = router;
