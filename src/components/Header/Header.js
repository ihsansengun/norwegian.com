import React from 'react';
import classes from './Header.module.scss'
import Logo from '../../assets/images/norwegian_logo.png'

const Header = () => {
    return (
        <>
            <header className={classes.Header}>
                <a href="#norwegian.com"> <img className={classes.logo} src={Logo} alt="Norwegian.com"/></a>

            </header>

        </>
    );
};

export default Header;
