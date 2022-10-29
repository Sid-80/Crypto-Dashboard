import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './Home.css';
import {motion} from 'framer-motion';
import { NavLink } from "react-router-dom";

const Home = () => {
    const [trendingCryptoData, setData] = useState([]);

    const getData = async ()=>{
        const res = await fetch('https://api.coingecko.com/api/v3/search/trending');
        const trendingData = await res.json();
        setData(trendingData.coins);
    }

    useEffect(() => {
        getData();
    },[]);

    // console.log(trendingCryptoData);
    return(
        <>
        <motion.div 
            className="container-1"
            initial={{width: 0}}
            animate={{width:"100%"}}
            exit={{x:window.innerWidth, transition:{duration : 0.2}}}
        >
            <div className="search">
                <h3>SEARCH ABOUT ANY CRYPTO</h3>
                <button className="search_but"><NavLink className="nav-link" to="/search">Search</NavLink></button>
            </div>
            <div className="cards">
                <hr className="hr1" />
                <h1>Trending Crypto Coins</h1>
                <hr />
                <div className="trending">
                    {
                        trendingCryptoData.map((curEle, index)=>{
                            return(
                                <div className="card shadow-lg p-3 mb-5 bg-body rounded">
                                        <img src={curEle.item.large} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h6 className="card-title">{curEle.item.name}</h6>
                                    </div>
                                    <ul class="list-group list-group-flush">
                                        <li className="list-group-item">Market Rank : {curEle.item.market_cap_rank}</li>
                                        <li className="list-group-item">Symbol : {curEle.item.symbol}</li>
                                    </ul>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </motion.div>
        </>
    );
}


export default Home;