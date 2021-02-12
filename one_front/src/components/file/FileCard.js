import React from 'react';
import {Button, Card, CardActions, CardHeader, IconButton} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {useStyles} from "./style/style";
import {executeConversion} from "./actions/FileCardActions";
import moment from "moment";
import CloseIcon from '@material-ui/icons/Close';

const FileCard = (props) => {
    const classes = useStyles();
    const {file, format, files, setFiles} = props;
    const {name, lastModified} = file;
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
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Modification date: {date.format('DD-MM-YYYY')}
                        </Typography>
                        <Typography variant="h5" component="h2">
                            {name}
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            Format: {format}
                        </Typography>
                    </>
                }
                action={
                    <IconButton onClick={handleOnClick}>
                        <CloseIcon/>
                    </IconButton>
                }
            />
            <CardActions>
                <Button
                    size='small'
                    color='primary'
                    onClick={() => executeConversion(file)}
                >
                    Convert
                </Button>
            </CardActions>
        </Card>
    );
};

export default FileCard;