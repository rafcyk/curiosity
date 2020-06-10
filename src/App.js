//import needed libraries
import React from 'react';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';

//import styles
import './styles/App.css';
import './styles/Media.css';

//import components
import WelcomePage from './pages/WelcomePage';
import ChooseOption from './pages/ChooseOption';
import AddCuriosity from './pages/AddCuriosity';
import ChooseCategory from './pages/ChooseCategory';
import Sport from './pages/Sport';
import Music from './pages/Music';
import History from './pages/History';



class App extends React.Component{
state = { 
  sportCuriosities: [
    {
      id: 0,
      desc: "Pływanie jest w programie igrzysk olimpijskich od samego początku. Od igrzysk w 1908 r. zaczęto organizować zawody w krytych pływalniach.",
    },
    {
      id: 1,
      desc: "Teoretycznie najdłuższa gra w szachy może zawierać nawet do 5949 ruchów!!!",
    },{
      id: 2,
      desc: "Polska koszykarka, Małgorzata Teresa Dydek-Twigg, była prawdopodobnie najwyższą profesjonalną koszykarką na świecie. Jej wzrost podawany w mediach wahał się od 213 do 218 cm.",
    },{
      id: 3,
      desc: "Początkowo techniki walki były wykorzystywane głównie do obrony przed zwierzętami, jednak z czasem coraz większego znaczenia nabierała samoobrona przed drugim człowiekiem.",
    },{
      id: 4,
      desc: "Na terenie Kanady oraz Stanów Zjednoczonych rozgrywana jest najważniejsza na świecie klubowa liga hokejowa świata NHL.",
    }
  ],
  musicCuriosities: [{
    id: 0,
    desc: "Muzyka Fryderyka Chopina wywiera duży wpływ na twórczość polskich poetów. Dotychczas poświęcono mu 600 wierszy.",
  },
  {
    id: 1,
    desc: " Jan Sebastian Bach przemierzył piechotą wiele dróg, by w niemieckich miastach podziwiać grę sławnych organistów. W Lubece, tak zasłuchał się w grę najsławniejszego organisty tych czasów Dietricha Buxtehudego (1637-1707), że zamiast po czterech tygodniach, wrócił z urlopu po czterech miesiącach.",
  },{
    id: 2,
    desc: "  Najsłynniejszą rodziną w historii muzyki była rodzina Bachów. Od XVI do XVIII wieku w Niemczech nazwisko Bach było synonimem muzyka.",
  },
  {
    id: 3,
    desc: " Jan Sebastian Bach był dwukrotnie żonaty. Z pierwszą żoną Marią Barbarą Bach miał 7 dzieci, a z drugą Anną Magdaleną Wilchen miał 13 dzieci.",
  },
  {
    id: 4,
    desc: " Włoski śpiewak-kastrat Gaetano Majorano Caffarelli (1710-1783) szczypał swoje partnerki na scenie, aby zmusić je do wydawania fałszywych dźwięków i w ten sposób wypaść korzystniej przed publicznością.",
  }],
  historyCuriosities: [{
    id: 0,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta odit nostrum aspernatur dolor mollitia eligendi minus magnam obcaecati corrupti quidem! Ipsam odio placeat ut eos quaerat voluptatum vitae, ratione nam.",
  },
  {
    id: 1,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta odit nostrum aspernatur dolor mollitia eligendi minus magnam obcaecati corrupti quidem! Ipsam odio placeat ut eos quaerat voluptatum vitae, ratione nam.",
  },{
    id: 2,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta odit nostrum aspernatur dolor mollitia eligendi minus magnam obcaecati corrupti quidem! Ipsam odio placeat ut eos quaerat voluptatum vitae, ratione nam.",
  },{
    id: 3,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta odit nostrum aspernatur dolor mollitia eligendi minus magnam obcaecati corrupti quidem! Ipsam odio placeat ut eos quaerat voluptatum vitae, ratione nam.",
  },{
    id: 4,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta odit nostrum aspernatur dolor mollitia eligendi minus magnam obcaecati corrupti quidem! Ipsam odio placeat ut eos quaerat voluptatum vitae, ratione nam.",
  }],
  curiosityText: "",
  addCategory : "sport"
}


//handle textarea with curiosity
handleCuriosityText = (e) =>{
  this.setState({
    curiosityText: e.target.value
  })
} 

handleCategory = (e) => {
  this.setState({
    addCategory: e.target.value
  })
}

add = () => {

  if(this.state.curiosityText.trim() === ''){
    alert('Wypełnij najpierw pole tekstu!');
  }

  else{

    if(this.state.addCategory === 'sport'){
      const curiosity = {
          id : Math.random().toString(36).substr(2, 9),
          desc : this.state.curiosityText
      }

      this.setState(prevState => ({
        sportCuriosities: prevState.sportCuriosities.concat(curiosity),
        curiosityText: ''
      }))
      alert('Dodano pomyślnie :)');
  }
  else if(this.state.addCategory === 'music'){
      const curiosity = {
          id : Math.random().toString(36).substr(2, 9),
          desc : this.state.curiosityText
      }

      this.setState(prevState => ({
        musicCuriosities: prevState.musicCuriosities.concat(curiosity),
        curiosityText: ''
      }))
      alert('Dodano pomyślnie :)');
  }
  else if(this.state.addCategory === 'history'){
      const curiosity = {
          id : Math.random().toString(36).substr(2, 9),
          desc : this.state.curiosityText
      }

      this.setState(prevState => ({
        historyCuriosities: prevState.historyCuriosities.concat(curiosity),
        curiosityText: ''
      }))
      alert('Dodano pomyślnie :)');
  }
  }


  }


render(){

  return(
    <>
    <Router basename = {process.env.PUBLIC_URL}>
    <h1>ℂ𝕚𝕖𝕜𝕒𝕨𝕪 𝕤́𝕨𝕚𝕒𝕥𝕒</h1>

      <Switch>
              <Route path = '/' exact>
                 <WelcomePage />
               </Route>
        
            <Route path = '/chooseOption' exact>
                <ChooseOption />
            </Route>

            <Route path = '/addCuriosity' exact>
                <AddCuriosity
                handleCuriosityText = {this.handleCuriosityText} 
                curiosityText =  {this.state.curiosityText}
                addCategory = {this.state.addCategory}
                handleCategory = {this.handleCategory}
                add = {this.add}/>
            </Route>

            <Route path = '/chooseCategory' exact>
                <ChooseCategory />
            </Route>

            <Route path = '/chooseCategory/sport' exact>
                <Sport sportCuriosities = {this.state.sportCuriosities}/>
            </Route>

            <Route path = '/chooseCategory/music' exact>
                <Music musicCuriosities = {this.state.musicCuriosities}/>
            </Route>

            <Route path = '/chooseCategory/history' exact>
                <History historyCuriosities = {this.state.historyCuriosities}/>
            </Route>

        </Switch>

      </Router>
    </>
  )
}

}

export default App;
