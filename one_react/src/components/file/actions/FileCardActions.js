import axios from "axios";

const removeFile = (name) => {
    return name.substring(0, name.indexOf('.'));
}

export const executeConversion = (file, setFileAccepted, setProgress) => {
    setProgress(true)
    const data = new FormData();
    data.append('file', file);
    axios.post('http://localhost:3001/upload', data)
        .then(resp => {
            if (resp.status === 200) {
                setFileAccepted(state => (
                    {
                        ...state,
                        message: resp.data.message,
                        accepted: resp.data.accepted,
                        declined: resp.data.declined
                    }
                ));
            }
        })
        .catch(err => {
            console.log(err);
            setFileAccepted(state => ({
                ...state,
                message: err.response.data.message,
                accepted: false,
                declined: true
            }))
        });
}

export const requestResults = (file, setDetails) => {
    axios.get(`http://localhost:3001/result/${file.name}`)
        .then(resp => {
            setDetails({
                name: removeFile(file.name),
                data: resp.data
            });
        })
        .catch(err => {
            setDetails({
                name: removeFile(file.name),
                error: err.message
            })
        })
}
