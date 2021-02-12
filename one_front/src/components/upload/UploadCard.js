import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import {useStyles} from "./style/style";
import {CardContent} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Dropzone from "react-dropzone";
import {dragDropUploadFile} from "./actions/UploadCardActions";

const UploadCard = (props) => {
    const classes = useStyles();
    const {files, setFiles} = props;

    return (
        <Card className={classes.root} variant="outlined">
            <CardHeader
                action={
                    <IconButton style={{color: 'white'}} aria-label="settings">
                        <HelpOutlineIcon/>
                    </IconButton>
                }
                title={
                    <Typography className={classes.title} variant="h6" noWrap>
                        Upload file
                    </Typography>
                }
                className={classes.header}
            />
            <CardContent>
                <Grid container justify='center'>
                    <Grid item justify='center'>
                        <Dropzone onDrop={acceptedFiles => dragDropUploadFile(acceptedFiles, files, setFiles)}>
                            {({getRootProps, getInputProps}) => (
                                <section>
                                    <div className={classes.dropzone} {...getRootProps()}>
                                        <input {...getInputProps()} />
                                        <p style={{position: 'relative', top: '35%'}}>Drag / drop file or click to upload</p>
                                    </div>
                                </section>
                            )}
                        </Dropzone>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}

export default UploadCard;
