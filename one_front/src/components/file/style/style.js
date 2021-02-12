import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles({
    root: {
        minWidth: 275,
        padding: 10,
        boxShadow: '5px 5px 5px grey'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});