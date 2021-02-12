import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const ContentListItem = (props) => {
    return (
        <ListItem button key={props.text}>
            <ListItemIcon>
                {props.children}
            </ListItemIcon>
            <ListItemText primary={props.text} />
        </ListItem>
    );
};

export default ContentListItem;