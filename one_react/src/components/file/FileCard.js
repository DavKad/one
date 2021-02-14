import React from 'react';
import {Button, Card, CardHeader, IconButton} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {useStyles} from "./style/style";
import {executeConversion} from "./actions/FileCardActions";
import moment from "moment";
import CloseIcon from '@material-ui/icons/Close';
import Grid from "@material-ui/core/Grid";

const FileCard = (props) => {
    const classes = useStyles();
    const {file, format, files, setFiles, setFileAccepted} = props;
    const {name, lastModified, size} = file;
    const date = moment(lastModified);

    const handleOnClick = () => {
        const withClosedCard = files.filter(fileItem => fileItem !== file);
        setFiles(withClosedCard)
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
                    </>
                }
                action={
                    <Grid container direction='row'>
                        <Button
                            size='small'
                            color='primary'
                            onClick={() => executeConversion(file, setFileAccepted)}
                        >
                            Convert
                        </Button>
                        <IconButton onClick={handleOnClick}>
                            <CloseIcon/>
                        </IconButton>
                    </Grid>
                }
            />
        </Card>
    );
}

export default FileCard;