const {saveFileToConversion} = require('./utils/utils.js');
const express = require('express');
const cors = require('cors');
const path = require('path');


const app = express();
const appDir = path.dirname(require.main.filename);
const port = 8081;

app.enabled('trust proxy');
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(port, () => {
    console.log(`App at: http://localhost:${port}`)
})

app.post('/box', (req, res) => {
    const file = req.body;
    saveFileToConversion(appDir, file);
    res.status(200).send('File accepted and ready to conversion');
});
