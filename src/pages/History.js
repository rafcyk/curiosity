import React from 'react';
import { Link } from 'react-router-dom';
import ArrowBack from '../images/arrowBack.png';
import Close from '../images/close.png';

const handleOpen = (e) => {
    e.target.previousElementSibling.classList.add('active');
    e.target.previousElementSibling.previousElementSibling.classList.add('active');
    e.target.parentElement.classList.add('big');
    e.target.classList.add('hide');
}

const handleClose = (e) => {
    e.target.classList.remove('active');
    e.target.previousElementSibling.classList.remove('active');
    e.target.parentElement.classList.remove('big');
    e.target.nextElementSibling.classList.remove('hide');
}

const Sport  = (props) => {

const historyCuriosities = props.historyCuriosities;
const list = historyCuriosities.map((historyCuriosity) => {
    return(
        <div className="curiosity" key={props.historyCuriosities.id}>
            Czy wiesz że...
            <p>{historyCuriosity.desc}</p>
                <img src={Close} alt="close" className = 'close' onClick = {handleClose}/>
                <button className= 'show' onClick = {handleOpen}>Pokaż</button>
        </div>
    )
})

return(
    <>
       <section className="curiosities">
       <Link to = '/chooseCategory'><img src={ArrowBack} alt="back" className = 'back' title = 'back'/></Link>
            <div className="wrapCuriosities" >
                {list}
            </div>
       </section>
    </>
)}

export default Sport;