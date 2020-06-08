//import needed libraries
import React from 'react';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';

//import styles
import './styles/App.css';

//import components
import WelcomePage from './pages/WelcomePage';
import ChooseOption from './pages/ChooseOption';

class App extends React.Component{
state = {}


render(){

  return(
    <>
    <Router>
    <h1>ℂ𝕚𝕖𝕜𝕒𝕨𝕪 𝕤́𝕨𝕚𝕒𝕥𝕒</h1>


      <Switch>
              <Route path = '/' exact>
                 <WelcomePage />
               </Route>
        
            <Route path = '/chooseOption' exact>
                <ChooseOption />
            </Route>
        </Switch>
      </Router>
    </>
  )
}

}

export default App;
