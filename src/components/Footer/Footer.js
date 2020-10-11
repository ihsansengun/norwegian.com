import React from 'react';
import {FacebookShareButton, TwitterShareButton} from "react-share";
import classes from './Footer.module.scss'

const Footer = () => {
    return (
        <>
            <footer className={classes.Footer}>
                <div className={classes.content}>
                    <div className={classes.social}>
                        <span className={classes.shareThis}>SHARE THIS</span>
                        <FacebookShareButton
                            url={"http://www.norwegian.com"}
                            quote={"Norwegian.com - Chose your destination"}
                            hashtag="#norwegian.com"
                        >
                            <span className={`${classes.icon} ${classes.iconFb}`}> </span>
                        </FacebookShareButton>

                        <TwitterShareButton
                            url={"http://www.norwegian.com"}
                            title={"Norwegian.com - Chose your destination"}
                            hashtag="#norwegian.com"
                        >
                            <span className={`${classes.icon} ${classes.iconTw}`}></span>
                        </TwitterShareButton>

                    </div>
                    <div className={classes.menu}>
                        <a href="#norwegian.com"> NORWEGIAN.COM </a>
                        <a href="#terms"> TERMS & CONDITIONS </a>
                        <a href="#cookies"> COOKIES POLICY </a>
                    </div>
                    <div className={classes.musicBy}>
                        <span className={classes.musicByText}>MUSIC BY</span>
                        <a href="#spotify.com" className={classes.iconSpotify}> </a>
                        <span className={classes.spotify}>Spotify</span>
                    </div>
                </div>

            </footer>

        </>
    );
};

export default Footer;
