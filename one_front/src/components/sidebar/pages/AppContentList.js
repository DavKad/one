import React from 'react';
import List from '@material-ui/core/List';
import ImportContactsRoundedIcon from '@material-ui/icons/ImportContactsRounded';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import ContentListItem from './ContentListItem'
import {makeStyles} from '@material-ui/core/styles';
import clsx from 'clsx';
// import { Avatar } from '@material-ui/core';
// import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';

const useStyles = makeStyles((theme) => ({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },

}));

const AppContentList = ({anchor, setState}) => {
    const classes = useStyles();
    return (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={() => setState(false)}
            onKeyDown={() => setState(false)}
        >
            <List className={classes.paper}>
                {/*<ContentListItem text={'Home'}>*/}
                {/*  <HomeIcon style={{ color: 'white' }} />*/}
                {/*</ContentListItem>*/}
                <ContentListItem text={'Converter'}>
                    <ShoppingBasketIcon style={{color: 'white'}}/>
                </ContentListItem>
                {/* <ContentListItem text={'Przepisy'}>
          <FormatListBulletedIcon style={{ color: 'white' }} />
        </ContentListItem> */}
                {/* <ContentListItem text={'O mnie'}>
          <Avatar src={`${process.env.PUBLIC_URL}/cooker.jpg`} className={classes.small} />
        </ContentListItem> */}
                <ContentListItem text={'Contact'}>
                    <ImportContactsRoundedIcon style={{color: 'white'}}/>
                </ContentListItem>
                {/*<Grid container direction="row" justify="center" alignItems="center">*/}
                {/*  <IconButton>*/}
                {/*    <FacebookIcon style={{ color: 'white' }} />*/}
                {/*  </IconButton>*/}
                {/*  <IconButton>*/}
                {/*    <InstagramIcon style={{ color: 'white' }} />*/}
                {/*  </IconButton>*/}
                {/*</Grid>*/}
            </List>
        </div>
    );
};

export default AppContentList;