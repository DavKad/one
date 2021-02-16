import React, {useEffect, useState} from 'react';
import Grid from '@material-ui/core/Grid';
import {
    alreadyUpdatedFile,
    excludeNotSupportedFile,
    excludeSameFile,
    shouldRiseFormatAlert
} from './actions/ProcessorActions'
import SnackAlert from "../context/alert/Notification";
import UploadCard from "../upload/UploadCard";
import GuideDialog from "../guide/GuideDialog";

const Processor = () => {
    const [sameAlert, setSameAlert] = useState(false);
    const [formatAlert, setFormatAlert] = useState(false);
    const [tooltip, setTooltip] = useState(false);
    const [files, setFiles] = useState([]);


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
    const handleTooltipOnClose = () => {
        setTooltip(false);
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
                            setFiles={setFiles}
                            setTooltip={setTooltip}/>
                    </Grid>
                </Grid>
                <Grid container>
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
                        {tooltip ?
                            <GuideDialog
                                tooltip={tooltip}
                                handleTooltipOnClose={handleTooltipOnClose}/>
                            : null}
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

export default Processor;