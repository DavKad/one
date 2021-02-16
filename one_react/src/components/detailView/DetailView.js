import React from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    useMediaQuery,
    useTheme
} from "@material-ui/core";

const DetailView = (props) => {
    const {detailsDialog, setDetailsDialog} = props;
    const theme = useTheme()
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const handleDetailsViewOnClose = () => {
        setDetailsDialog(false);
    }
    return (
        <Dialog open={detailsDialog}
                fullScreen={fullScreen}
                onClose={handleDetailsViewOnClose}
                aria-labelledby='View Details'
        >
            <DialogTitle id='View Details '>Details:</DialogTitle>
            <DialogContent>
                <DialogContentText>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={handleDetailsViewOnClose} color='primary'>
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default DetailView;