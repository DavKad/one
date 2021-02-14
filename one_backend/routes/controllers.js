const express = require('express');
const router = express.Router();

const {upload} = require('../utils/multer-storage')
const uploaded = upload.single('file');

router.post('/upload', (req, res, next) => {
    uploaded(req, res, err => {
        if (err) {
            console.log(err)
            res.status(400).json(
                {
                    message: `Error occurred: ${err.message}`,
                    accepted: false,
                    declined: true
                }
            );
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
        }
    })
})

module.exports = router;
