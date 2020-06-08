import React from 'react';
import { Link } from 'react-router-dom';

//images
import Smile from '../images/smile.png';
import Arrow from '../images/arrow.png';

//pages
import ChooseOption from '../pages/ChooseOption';


const WelcomePage = () => {
return(
    <main className = 'welcomePage'>
        <div className = 'wrapWelcomePage'>
        <h2 className = 'desc'>Witaj. Jeśli tu jesteś znaczy że lubisz ciekawostki. Zapraszam do przeglądania i dzielenia się swoimi historyjkami z innymi <img src={Smile} alt="smile"/></h2>
        
        <div className = 'next'>
                <Link to = '/chooseOption'>Dalej</Link>
            <img src={Arrow} alt="arrow" className = 'arrowNext'/>
        </div>


        </div>
    </main>
)}

export default WelcomePage;