const fs = require('fs');
const executor = require('child_process');

module.exports.saveFileToConversion = (path, file) => {
    fs.open(`${path}/files/${file.name}`, 'w', (err) => {
        if (err) throw err;
        console.log(`Saved under: ${path}\\files\\${file.name}`)
    })
}

module.exports.executeConversion = () => {
    executor.exec(``, ((error, stdout, stderr) => {
        if (error) throw error;

    }))
}