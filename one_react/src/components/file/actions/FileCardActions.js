import axios from "axios";

export const executeConversion = (file, setFileAccepted) => {
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
