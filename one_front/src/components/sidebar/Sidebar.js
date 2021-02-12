import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import AppContentList from './pages/AppContentList'
import { useStyles } from './style/style'

const Sidebar = (props) => {
    const classes = useStyles();
    const { state, setState} = props;
    return (
        <div>
            <React.Fragment key={'left'}>
                <Drawer
                    anchor={'left'}
                    open={state}
                    onClose={() => setState(false)}
                    PaperProps={{ className: classes.paper }}
                >
                    <AppContentList
                        anchor="left"
                        setState={setState}
                    />
                </Drawer>
            </React.Fragment>
        </div>
    );
}
export default Sidebar;