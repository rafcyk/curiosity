import React from 'react';
import { Link } from 'react-router-dom';
import Arrow from '../images/arrow.png';
import ArrowBack from '../images/arrowBack.png';

const AddCuriosity = (props) => {


return(
    <section className = 'addCuriosity'>
        <div className="wrapCuriosity">
            <Link to = '/chooseOption'><img src={ArrowBack} alt="back" className = 'back' title = 'back'/></Link>
            <div className="contents">
                <textarea value = {props.curiosityText} onChange = {props.handleCuriosityText} placeholder = "Wpisz treść ciekawostki..." />

                <select name="categories" id="categories" value = {props.addCategory} onChange = {props.handleCategory}>
                    <option value="sport">Sport</option>
                    <option value="music">Muzyka</option>
                    <option value="history">Historia</option>
                </select>
            </div>

            <div className = 'add'><img src={Arrow} alt="arrow"/><button onClick = {props.add}>Dodaj</button></div>
        </div>
    </section>
)}

export default AddCuriosity;