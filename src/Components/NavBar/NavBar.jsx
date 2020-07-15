import React from 'react';
import {Link as RouterLnk} from 'react-router-dom';
import {AppBar, Toolbar, Typography, Link } from '@material-ui/core';
import styles from './NavBar.module.css';

const NavBar = () =>{
    return(
        <div className={styles.root}>
            <AppBar className={styles.navBar}>
                <Toolbar>
                    <nav className={styles.nav}>
                        <Link component={RouterLnk} className={styles.navLinks} to="/">
                            <Typography>All</Typography>
                        </Link> 
                        <Link component={RouterLnk} className={styles.navLinks} to="/shoes">
                            <Typography>Shoes</Typography>
                        </Link>                                                 
                        <Link component={RouterLnk} className={styles.navLinks} to="/sandals">
                            <Typography>Sandals</Typography>
                        </Link> 
                        <Link component={RouterLnk} className={styles.navLinks} to="/kids">
                            <Typography>Kids</Typography>
                        </Link>                                          
                    </nav>
                </Toolbar>
            </AppBar>           
        </div>
    )
}

export default NavBar;