import React, {useEffect, useState} from 'react';
import {Button, Card, CardHeader, CircularProgress, IconButton} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {useStyles} from "./style/style";
import {executeConversion, requestResults,} from "./actions/FileCardActions";
import moment from "moment";
import CloseIcon from '@material-ui/icons/Close';
import SnackAlert from "../context/alert/Notification";
import DetailView from "../detailView/DetailView";

const FileCard = (props) => {
    const classes = useStyles();
    const [detailsDialog, setDetailsDialog] = useState(false)
    const [successFetch, setSuccessFetch] = useState(false);
    const [progress, setProgress] = useState(false);
    const [details, setDetails] = useState({
        name: '',
        data: null,
        error: null
    });

    useEffect(() => {
        if (details.data)
            setProgress(false);
    }, [details]);

    useEffect(() => {
        if (progress) requestResults(file, setDetails)
    }, [progress]);

    const {file, format, files, setFiles, setFileAccepted} = props;
    const {name, lastModified, size} = file;
    const date = moment(lastModified);

    const handleOnClick = () => {
        const withClosedCard = files.filter(fileItem => fileItem !== file);
        setFiles(withClosedCard)
    };

    const handleOnDetailDialogClick = () => {
        setDetailsDialog(true)
    }

    const handleDetailErrorClose = () => {
        setDetails(state => ({...state, error: null}));
    };

    const handleSuccessFetchClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSuccessFetch(false);
    };
    return (
        <Card className={classes.root} variant="outlined">
            <CardHeader
                avatar={
                    <>
                        <Typography variant="h6" component="h2">
                            {name}
                        </Typography>
                        <Typography variant='caption' color="textSecondary">
                            Format: {format}, Modification date: {date.format('DD-MM-YYYY')}, Size: {size}
                        </Typography>
                        {!details.data ?
                            <div>
                                <Button style={{marginLeft: -5}}
                                        disabled={progress}
                                        size='small'
                                        color='primary'
                                        onClick={() => executeConversion(file, setFileAccepted, setProgress)}
                                >
                                    {progress ? `Processing` : `Process`}
                                </Button>
                                {progress ? <CircularProgress size={16} className={classes.buttonProgress}/> : null}
                            </div>
                            :
                            <div>
                                <Button style={{marginLeft: -15}}
                                        size='small'
                                        color='primary'
                                        onClick={handleOnDetailDialogClick}
                                >
                                    View
                                </Button>
                            </div>
                        }
                    </>
                }
                action={
                    <IconButton onClick={handleOnClick}>
                        <CloseIcon/>
                    </IconButton>
                }
            />
            {details.error ?
                <SnackAlert
                    type='error'
                    alert={details.error}
                    handleAlertOnClose={handleDetailErrorClose}>
                    {details.error}
                </SnackAlert>
                : null}
            {detailsDialog ?
                <DetailView detailsDialog={detailsDialog}
                            setDetailsDialog={setDetailsDialog}/>
                : null}
            {details.data ?
                <SnackAlert type='success'
                            alert={successFetch}
                            handleAlertOnClose={handleSuccessFetchClose}
                >
                    Details view available {file.name}
                </SnackAlert>
                : null}
        </Card>
    );
}

export default FileCard;