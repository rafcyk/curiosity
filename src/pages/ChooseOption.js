import React from 'react';
import { Link } from 'react-router-dom';

//images
import ArrowChoose from '../images/arrowChoose.png';

const ChooseOption = () => {
return(
<>
    <section className = 'chooseMenu'>
        <div className = 'wrapChooseButtons'>
            <div><Link to = '/chooseCategory'>Przeglądaj ciekawostki</Link> <img src={ArrowChoose} alt="arrow" /></div>
            <div><p>?</p></div>
            <div> <Link to = '/addCuriosity'>Dodaj ciekawostki</Link> <img src={ArrowChoose} alt="arrow"/></div>
        </div>
    </section>
</>
)}

export default ChooseOption;