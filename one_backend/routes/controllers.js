const express = require('express');
const {removeFormat} = require("../utils/file");
const {convert} = require("../utils/converter");
const router = express.Router();

const {upload} = require('../utils/multer-storage')
const uploaded = upload.single('file');

router.post('/upload', (req, res, next) => {
    uploaded(req, res, err => {
        if (err) {
            next(new Error(`Error occurred: ${err.message}`))
        } else {
            const {file} = req;
            console.log(`File uploaded:\n`, file);
            res.status(200).json(
                {
                    message: 'File accepted and prepared to conversion',
                    accepted: true,
                    declined: false
                }
            );
            convert(file);
        }
    })
})

router.get(`/result/:filename`, (req, res) => {
        const filename = req.params.filename;
        res.download(`${__dirname}\\..\\public\\converted\\${removeFormat(filename)}.json`, (err) => {
            if(err) console.error(err);
        })
})

module.exports = router;
