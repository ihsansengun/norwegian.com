import React, {useState, useEffect} from 'react';
import Destinations from "../Destinations/Destionations";
import axios from 'axios'
import delayAdapterEnhancer from 'axios-delay';
import  classes from './Home.module.scss'

const Home = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    let [pageNumber, setPage] = useState(1);



    const getMoreDataHandler = () => {
        if (pageNumber === 3) {
            pageNumber = 1
        } else {
            pageNumber ++;
        }
        setPage(pageNumber)
    };

    useEffect(() => {
        setLoading(true);
        let api = axios.create({
            adapter: delayAdapterEnhancer(axios.defaults.adapter)
        });
        api.get(`http://5f80ee7a5b1f3f00161a65bc.mockapi.io/destination?page=${pageNumber}&limit=6`, {delay:500})
            .then(res => {
                setPosts(res.data);
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
            });
    },[pageNumber]);

    return (
        <>
            <div className={classes.Container}>
                <div className={classes.colLeft}>
                    <div className={classes.contentContainer}>
                        <h1>The sounds of <br/> Spain...</h1>
                        <p> Whether you're turning up the tunes in Tenerife, bouncing to the beat in Barcelona or moving to the music in Madrid, we've got you covered.</p>
                        <p>You'll also have the opportunity to win a 5 day trip to Spain, courtesy of Norwegian!</p>

                        <button disabled={loading} onClick={getMoreDataHandler}
                                className={classes.button}>MORE PLEASE <i className={ loading ? `${classes.refreshing}  loader` : classes.refreshing }> </i></button>
                    </div>
                </div>

                <div className={classes.colRight}>
                   <Destinations  destinations={posts} isLoading={loading}/>
                    <a className={classes.termsAndCon} href="#terms-and-conditions">* terms & conditions apply</a>
                </div>
            </div>
    </>
    );
};

export default Home;
