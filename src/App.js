import './App.css';
import Header from './components/Header/Header';
import SliderImages from './components/SliderImages';
import CardSlide from './components/CardSlide';
// import CardImages from './components/CardImages';

// import SingleCard from './components/SingleCard';
import AllCardFetch from './components/AllCardFetch';
import SingleCardFetch from './components/SingleCardFetch';
import  Registration from './components/Registration';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Footer from './components/Footer';

function App() {
  return (
    <Router>
    <div>
    
     <Header/>
     <Switch>
          <Route exact path="/">
             <SliderImages/>
             <CardSlide/>
             {/* <CardImages/> */}
          </Route>

          <Route exact path="/card/">
          <SliderImages/>
          </Route>

          <Route exact path="/chicken/">
          <CardSlide/>
          </Route>

          {/* <Route exact path="/chick">
          <CardImages/>
          </Route> */}
          
          {/* <Route exact path="/chick/:foodid">
          <SingleCard/>
          </Route> */}
          <Route exact path="/chick">
          <AllCardFetch/>
          </Route>

           <Route exact path="/chick/:foodid">
          <SingleCardFetch/>
          </Route>

          <Route exact path="/register">
          <Registration/>
          </Route>
          
        </Switch>
     <Footer/>
    </div>
    </Router>
  );
}

export default App;
