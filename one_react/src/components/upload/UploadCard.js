import React, {useEffect, useState} from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import {useStyles} from "./style/style";
import {CardContent, Collapse} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Dropzone from "react-dropzone";
import {dragDropUploadFile} from "./actions/UploadCardActions";
import CloudUploadOutlinedIcon from '@material-ui/icons/CloudUploadOutlined';
import FileCard from "../file/FileCard";
import {getFileFormat} from "../converter/ConverterActions";
import SnackAlert from "../context/alert/Notification";
import {guideHeader, titleHeader} from "./CardParts";

const DropArea = (props) => {
    const {classes, rootProps, inputProps} = props;
    return <section>
        <div className={classes.dropzone} {...rootProps()}>
            <input type='file' {...inputProps()} />
            <Grid container justify='center'>
                <Grid item justify='center' style={{marginTop: 20}}>
                    <CloudUploadOutlinedIcon className={classes.uploadIcon}/>
                    <Typography variant="h6" noWrap>
                        Drag / drop file or click to upload
                    </Typography>
                </Grid>
            </Grid>
        </div>
    </section>;
}

const UploadCard = (props) => {
    const classes = useStyles();
    const {files, setFiles, setTooltip} = props;
    const [isFileAdded, setIsFileAdded] = useState(false);
    const [fileAccepted, setFileAccepted] = useState({
        accepted: false,
        declined: false,
        message: '',
    });

    useEffect(() => {
        if (files.length !== 0) {
            setIsFileAdded(true);
        } else {
            setIsFileAdded(false);
        }
    }, [files])

    const handleHelpIconOnClick = () => {
        setTooltip(true);
    }

    const handleFileAcceptedOnClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setFileAccepted(state => ({...state, accepted: false}))
        setFileAccepted(state => ({...state, declined: false}))
    };
    const guide = guideHeader(handleHelpIconOnClick)
    const title = titleHeader(classes)
    return (
        <Card className={classes.root} variant="outlined">
            <CardHeader
                action={guide}
                title={title}
                className={classes.header}
            />
            <CardContent>
                <Grid container justify='center'>
                    <Grid item justify='center'>
                        <Dropzone onDrop={acceptedFiles => dragDropUploadFile(acceptedFiles, files, setFiles)}>
                            {({getRootProps, getInputProps}) => (
                                <DropArea classes={classes} rootProps={getRootProps} inputProps={getInputProps}/>
                            )}
                        </Dropzone>
                    </Grid>
                </Grid>
            </CardContent>
            <Collapse in={isFileAdded} unmountOnExit>
                <CardContent>
                    <Typography paragraph> File{files.length > 1 ? 's' : null}: </Typography>
                    <Grid container direction='column'>
                        {files.length !== 0 ?
                            files.map((file, index) =>
                                <Grid item>
                                    <FileCard key={index}
                                              file={file}
                                              files={files}
                                              setFiles={setFiles}
                                              setFileAccepted={setFileAccepted}
                                              format={getFileFormat(file.name)}/>
                                </Grid>)
                            : null}
                        {fileAccepted.accepted ?
                            <SnackAlert type={'success'}
                                        alert={fileAccepted.accepted}
                                        handleAlertOnClose={handleFileAcceptedOnClose}>
                                {fileAccepted.message}
                            </SnackAlert>
                            : null}
                        {fileAccepted.declined ?
                            <SnackAlert type={'error'}
                                        alert={fileAccepted.declined}
                                        handleAlertOnClose={handleFileAcceptedOnClose}>
                                {fileAccepted.message}
                            </SnackAlert>
                            : null}
                    </Grid>
                </CardContent>
            </Collapse>
        </Card>
    );
}

export default UploadCard;
