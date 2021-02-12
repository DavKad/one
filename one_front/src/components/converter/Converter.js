import React, {useEffect, useState} from 'react';
import Grid from '@material-ui/core/Grid';
import {
    alreadyUpdatedFile,
    excludeNotSupportedFile,
    excludeSameFile,
    getFileFormat,
    shouldRiseFormatAlert
} from './ConverterActions'
import FileCard from "../file/FileCard";
import SnackAlert from "../context/alert/Notification";
import UploadCard from "../upload/UploadCard";

const Converter = () => {
    const [files, setFiles] = useState([]);
    const [sameAlert, setSameAlert] = useState(false);
    const [formatAlert, setFormatAlert] = useState(false);

    useEffect(() => {
        if (shouldRiseFormatAlert(files, setFormatAlert)) {
            excludeNotSupportedFile(files, setFiles);
        }
        if (alreadyUpdatedFile(files, setSameAlert))
            excludeSameFile(files, setFiles);
    }, [files]);

    const handleFormatAlertClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setFormatAlert(false);
    }

    const handleSameAlertClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSameAlert(false)
    };
    return (
        <>
            <Grid container direction='column'
                  justify="center"
                  alignItems="center">
                <Grid item container
                      justify="center"
                      alignItems="flex-start"
                      xs={10}>
                    <Grid item style={{marginTop: 60}}>
                        <UploadCard
                            files={files}
                            setFiles={setFiles}/>
                    </Grid>
                </Grid>
                <Grid container>
                    {files.length !== 0 ?
                        files.map((file, index) =>
                            <Grid item style={{marginLeft: 20, marginTop: 20}}>
                                <FileCard key={index}
                                          file={file}
                                          files={files}
                                          setFiles={setFiles}
                                          format={getFileFormat(file.name)}/>
                            </Grid>)
                        : null}
                    <Grid item>
                        {formatAlert ?
                            <SnackAlert type={'error'}
                                        alert={formatAlert}
                                        handleAlertOnClose={handleFormatAlertClose}>
                                This file format is not supported!
                            </SnackAlert>
                            : null}
                        {sameAlert ?
                            <SnackAlert type={'warning'}
                                        alert={sameAlert}
                                        handleAlertOnClose={handleSameAlertClose}>
                                This file was already added!
                            </SnackAlert>
                            : null}
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

export default Converter;