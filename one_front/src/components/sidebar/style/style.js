import { fade, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    paper: {
        backgroundColor: fade('#123456', 0.75),
        color: 'white'
    }
}));
