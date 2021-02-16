const supportedFormats = ['dxf']

export const uploadFile = (event, files, setFiles) => {
    return setFiles([uploadedFile(event), ...files]);
};
export const getFileFormat = (name) => {
    return name.substring(name.indexOf('.') + 1, name.length);
}

export const excludeNotSupportedFile = (files, setFiles) => {
    const supportedFiles = files.filter(file => !isNotSupportedFormat(file));
    setFiles(supportedFiles);
}

export const alreadyUpdatedFile = (files, setSameAlert) => {
    if (false) //TODO if duplicates then true
        return passConclusion(true, setSameAlert)
}

export const shouldRiseFormatAlert = (files, setFormatAlert) => {
    if (files.length !== 0) {
        if (checkFileIsNotSupported(files))
            return passConclusion(true, setFormatAlert);
    }
}

function uploadedFile(event) {
    return Array.from(event.target.files)[0];
}

function checkFileIsNotSupported(files) {
    return files.find(file => isNotSupportedFormat(file)) !== undefined;
}

function passConclusion(conclusion, setAlert) {
    setAlert(conclusion)
    return conclusion;
}

function isNotSupportedFormat(file) {
    return supportedFormats.some(format => format !== getFileFormat(file.name));
}
