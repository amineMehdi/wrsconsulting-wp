import React, {useEffect} from "react";
import ReactDOM from "react-dom";

import { HashRouter as Router, Switch, Route } from "react-router-dom";
import "./style/index.css";

import Navbar from "./components/Navbar";
import FooterContainer from "./components/FooterContainer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Infrastructure from "./pages/Infrastructure";
import Developpement from "./pages/Developpement";
import GestionLogiciel from "./pages/GestionProjet";
import ConsultingIT from "./pages/ConsultingIT";
import Realisations from "./pages/Realisations";
import Contact from "./pages/Contact";
import EntrepriseContact from "./pages/EntrepriseContact";
import Candidature from "./pages/Candidature";
import Audit from "./pages/Audit";
import ArrowTop from "./components/ArrowTop";
function Index() {
  useEffect(() => {
    document.title = "WRS Consulting";
  }, []);
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/a-propos" component={About} />
        <Route path="/infrastructure-reseaux" component={Infrastructure} />
        <Route path="/developpement-logiciel" component={Developpement} />
        <Route path="/gestion-de-projet" component={GestionLogiciel} />
        <Route path="/consulting-en-strategie-it" component={ConsultingIT} />
        <Route path="/audit" component={Audit} />
        <Route path="/realisations" component={Realisations} />
        <Route path="/contact" component={Contact} />
        <Route path="/entreprise" exact component={EntrepriseContact} />
        <Route path="/candidature" component={Candidature} />
      </Switch>
      <FooterContainer />
      <ArrowTop />
    </Router>
  );
}

ReactDOM.render(
  <Index />,
  document.getElementById("render-react-example-here")
);
