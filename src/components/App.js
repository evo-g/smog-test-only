import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
// import { GlobalStyles } from '../global';
// import { theme } from '../theme';
import Home from './Home';
import Banner from './Banner';
import Coupon from './Coupon';
import Contact from './Contact';
import NoMatch from './NoMatch';
import Navbar from './Navbar/Navbar';
import '../assets/css/index.css';

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <section>
          <Banner />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/contact' component={Contact} />
            <Route path='/coupon' component={Coupon} />
            <Route path='*' component={NoMatch} />
          </Switch>
        </section>
      </main>
    </Router >
  )
}

export default App;
