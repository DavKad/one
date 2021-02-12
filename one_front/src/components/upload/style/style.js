import {fade, makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
        width: 700,
        boxShadow: '5px 5px 5px grey'
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    header: {
        background: fade('#123456', 0.75)
    },
    title: {
        color: "white",
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    dropzone: {
        width: 680,
        height: 200,
        borderWidth: 2,
        borderColor: "rgb(102, 102, 102)",
        borderStyle: "dashed",
        borderRadius: 5,
        textAlign: 'center'
    }
}));