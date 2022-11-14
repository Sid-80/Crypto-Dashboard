import React, { useEffect, useState } from "react";
import {motion} from 'framer-motion';
import { NavLink } from "react-router-dom";
import './Search.css';
import 'bootstrap/dist/css/bootstrap.css';

const Search = () => {

    const [input,setInput] = useState("");
    const [searchedData, setSearchedData] = useState([]);
    let inputString = "";

    const inputData = (event) => {
        if (event.target.value === "") {
            setSearchedData("");
        }
        inputString = event.target.value;
    }
    const submitInput = () => {
        setInput(inputString);
        console.log(searchedData);
    }
    
    useEffect(() => {
        if (input !== "") {
            getUserData();
        }else{
            setSearchedData("");
        }
    },[input]);
    console.log(searchedData);

    const getUserData = async ()=>{
        const res = await fetch(`https://api.coingecko.com/api/v3/search?query=${input}`);
        const trendingData = await res.json();
        setSearchedData(trendingData.coins);
    }
    console.log(searchedData);

    return(
        <>
        <motion.div
            initial={{width: 0}}
            animate={{width:"100%"}}
            exit={{x:window.innerWidth, transition:{duration : 0.2}}}
        >
            <div className="container_1">
                <div class="input-group mb-3 inputDiv">
                    <input type="text" className="searchInput form-control" placeholder="Bitcoin,ethereum,tether,..." onChange={inputData} aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <button className="btn btn-info" type="button" onClick={submitInput} id="button-addon2">🔍</button>
                </div>
            </div>

            <motion.div
                initial={{opacity:0}}
                animate={{opacity:1}}
                exit={{opacity:0}}
            >
                <div class="SearchDataContainer">
                {
                    Array.isArray(searchedData) ? 
                    searchedData.map((curEle,index)=>{
                        return(<>
                            <div class="searchCard">
                                        <div>
                                            <img src={curEle.large} className="card-img-top" height="60" alt="..." />
                                        </div>
                                        <div className="name">
                                            <h5 className="">{curEle.name}</h5>
                                        </div>
                                        <div>
                                            <p className="">Market Rank : {curEle.market_cap_rank}</p>
                                            <p className="">Symbol : {curEle.symbol}</p>
                                        </div>
                                        <hr className="hr3"/>
                            </div>
                            </>
                        )
                    }) : null
                }
                </div>
            </motion.div>
        </motion.div>
        </>
    );
}

export default Search;