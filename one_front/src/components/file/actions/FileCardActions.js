import axios from "axios";
import moment from "moment";

export const executeConversion = (file) => {
    const body = {
        name: file.name,
        lastModification: moment(file.lastModified).format("DD-MM-YYYY"),
        size: file.size,
        type: file.type
    };

    axios.post('http://localhost:8081/box', body)
        .then(resp => {
            alert(resp.data);
        });
}
