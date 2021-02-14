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

const GuideDialog = (props) => {
    const theme = useTheme()
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const {tooltip, handleTooltipOnClose} = props;
    return (
        <Dialog open={tooltip}
                fullScreen={fullScreen}
                onClose={handleTooltipOnClose}
                aria-labelledby='Converter tooltip'
        >
            <DialogTitle id='Converter tooltip'>Converter guidelines:</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    This is converter for AutoCAD files saved in DWG format.
                    Please drag and drop file on pointed area or just click to select a file to conversion.
                    Converter will analyse a draw and point out the data specific for the findings.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={handleTooltipOnClose} color='primary'>
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default GuideDialog;