

import {
  BrowserRouter as Router,
  Route,
  HashRouter,
  Switch,
  Link
} from "react-router-dom";


import HomePage from './Template/HomePage';

import NavbarPage from './Template/NavbarPage';


import AboutPage from './Template/AboutPage';

import TeamsPage from './Template/TeamsPage';

import ContactPage from './Template/ContactPage';

import PortofolioPage from './Template/PortofolioPage';


  export default function Routes() {
    return (
      <Router>
         <Switch>
            <Route exact path="/testing-hosting">
                <NavbarPage flagMenu="home"/>
                <HomePage />
                <AboutPage />
                <TeamsPage />
                <PortofolioPage />
                <ContactPage /> 
             </Route>
             <Route exact path="/testing-hosting/about">
                < NavbarPage flagMenu="about"/>
                <AboutPage />
             </Route>
             <Route exact path="/testing-hosting/team">
                < NavbarPage flagMenu="team" />
                <TeamsPage /> 
             </Route>
             <Route exact path="/testing-hosting/portofolio">
                < NavbarPage flagMenu="portofolio" />
                <PortofolioPage/>
             </Route>
             <Route exact path="/testing-hosting/contact">
                < NavbarPage flagMenu="contact" />
                <ContactPage/>
             </Route>
         </Switch>
      </Router>
    );
  }
  