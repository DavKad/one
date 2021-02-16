const fs = require('fs');
const DxfParser = require("dxf-parser");
const {removeFormat} = require("./file");

const process = (data) => {
    //TODO Code to create JSON with search criteria.
    return data;
}

exports.convert = (file) => {
    fs.readFile(file.path, 'utf-8', (err, data) => {
        if (err)
            console.log('Error occurred: ', err)

        const parser = new DxfParser();
        try {
            const parsedData = parser.parseSync(data);
            const results = JSON.stringify(process(parsedData));

            const resultsPath = `${__dirname}\\..\\public\\converted\\${removeFormat(file.originalname)}.json`;
            fs.writeFile(resultsPath, results, "utf-8", (writeError) => {
                console.error(writeError)
            })
        } catch (err) {
            if (err) console.error(err.stack)
        }
    })
}
