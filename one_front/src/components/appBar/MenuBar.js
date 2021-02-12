import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Sidebar from '../sidebar/Sidebar';
import { useStyles } from './style/style'

export default function MenuBar() {
  const classes = useStyles();
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBarColor}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={() => setOpenSidebar(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="caption" className={classes.menu}>
            MENU
            </Typography>
          <Typography className={classes.title} variant="h6" noWrap>
            Converter
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
      </AppBar>
      <Sidebar state={openSidebar} setState={setOpenSidebar} />
    </div>
  );
}
