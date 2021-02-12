import React from 'react';
import {Snackbar} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const SnackAlert = (props) => {
    const {alert, handleAlertOnClose, type} = props;
    return (
        <Snackbar open={alert}
                  anchorOrigin={{vertical: 'bottom', horizontal: 'left'}}
                  autoHideDuration={6000}
                  onClose={handleAlertOnClose}
        >
            <Alert onClose={handleAlertOnClose}
                   severity={type}>
                {props.children}
            </Alert>
        </Snackbar>
    );
};

export default SnackAlert;