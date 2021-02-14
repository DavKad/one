import IconButton from "@material-ui/core/IconButton";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import Typography from "@material-ui/core/Typography";
import React from "react";

export const guideHeader = (handleHelpIconOnClick) =>
    <IconButton style={{color: 'white'}}
                aria-label="settings"
                onClick={handleHelpIconOnClick}>
        <HelpOutlineIcon/>
    </IconButton>;

export const titleHeader = (classes) =>
    <Typography className={classes.title} variant="h6" noWrap>
        Upload file
    </Typography>;