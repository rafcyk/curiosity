import React from 'react';
import { Link } from 'react-router-dom';
import ArrowBack from '../images/arrowBack.png';
import Sport1 from '../images/sport1.png';
import Music1 from '../images/music1.png';
import History1 from '../images/history1.png';

const ChooseCategory = () => {
return(
    <section className = 'chooseCategory'>
        <Link to = '/chooseOption'><img src={ArrowBack} alt="back" className = 'back' title = 'back'/></Link>
        <div className="options">
            <div className="option">
                <img src={Sport1} alt="sport"/>
                <Link to = '/chooseCategory/sport'>Sport</Link>
            </div>
            <div className="option">
                <img src={Music1} alt="music"/>
                <Link to = '/chooseCategory/music'>Muzyka</Link>
            </div>
            <div className="option">
                <img src={History1} alt="history"/>
                <Link to = '/chooseCategory/history'>Historia</Link>
            </div>
        </div>
    </section>
)}

export default ChooseCategory;