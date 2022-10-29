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
            <button className="back_but"><NavLink className="nav-link" to="/">BACK</NavLink></button>
            <div className="container_1">
                <div class="input-group mb-3 in">
                    <input type="text" className="form-control" placeholder="Bitcoin,.." onChange={inputData} aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <button className="btn btn-info" type="button" onClick={submitInput} id="button-addon2">🔍</button>
                </div>
            </div>

            <motion.div
                initial={{opacity:0}}
                animate={{opacity:1}}
                exit={{opacity:0}}
            >
                <div class="container text-center">
                <div class="row row-cols-5">
                {
                    Array.isArray(searchedData) ? 
                    searchedData.map((curEle,index)=>{
                        return(
                            <div class="col">
                                <div className="card shadow-lg p-3 mb-5 bg-body rounded">
                                            <img src={curEle.large} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h6 className="card-title">{curEle.name}</h6>
                                        </div>
                                        <ul class="list-group list-group-flush">
                                            <li className="list-group-item">Market Rank : {curEle.market_cap_rank}</li>
                                            <li className="list-group-item">Symbol : {curEle.symbol}</li>
                                        </ul>
                                </div>
                            </div>
                        )
                    }) : null
                }
                </div>
                </div>
            </motion.div>
        </motion.div>
        </>
    );
}

export default Search;