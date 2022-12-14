import React from "react";
import { Route, Routes, useLocation } from 'react-router';  
import Home from './Home';
import Search from "./Search";
import {AnimatePresence} from 'framer-motion';

const AnimatedRoute = () => {
    const location = useLocation();
    return(
        <>
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<Home />} />
                <Route path='/search' element={<Search />} />
            </Routes>
        </AnimatePresence>
        </>
    );
}

export default AnimatedRoute;