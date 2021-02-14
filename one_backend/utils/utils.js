const executor = require('child_process');

module.exports.executeConversion = (command) => {
    executor.exec(command, ((error, stdout, stderr) => {
        if (error) throw error;
            console.log(stdout)
    }))
}