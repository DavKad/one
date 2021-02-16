import {makeStyles} from "@material-ui/core";
import {green} from "@material-ui/core/colors";

export const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    buttonProgress: {
        color: green[500],
        top: '50%',
        left: '50%',
        marginBottom: -2
    }
});