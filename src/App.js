import {useState, useEffect} from 'react'
import '../src/assets/styles/bootstrap.min.css';
import 'antd/dist/antd.css';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Trans, useTranslation } from "react-i18next";
import Header from './core/layout/Header/Header';
import HomePage from './core/components/Home/HomePage';
import Footer from './core/layout/Footer/Footer';
import Contact from './core/components/Contact/Contact';
import Faq from './core/components/Faq/Faq';
import ScrollToTop from './core/components/ScrollTop';
import react from 'react';
import logo from '../src/assets/images/b-logo.svg';

function App() {
  const [loaderscreen, setLoaderscreen] = useState(true);

  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoaderscreen(false)
    }, 3000);
  
  }, [])

  return (
    <Router basename="/">
      <ScrollToTop/>
      <div className="App">
        <div className={"loader " + (loaderscreen ? "" : "hideLoader")}>
            <div className="loader__logo">
              <img src={logo} alt=""/>
            </div>
        </div>
        <Header/>
        <Switch>
          <Route path="/faq">
            <Faq />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
