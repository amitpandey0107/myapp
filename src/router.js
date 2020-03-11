import React, { Component, Suspense } from "react";
import { Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import "./default-layout.css";

import Home from './pages/Home';
import About from './pages/About';
import Article from './pages/Article';
import Support from './pages/Support';
import Press from './pages/Press';
import Contact from './pages/Contact';

// const Home = lazy(() => import('./pages/Home'));
// const About = lazy(() => import('./pages/About'));
// const Article = lazy(() => import('./pages/Article'));
// const Support = lazy(() => import('./pages/Support'));
// const Press = lazy(() => import('./pages/Press'));
// const Contact = lazy(() => import('./pages/Contact'));



// const Revolution = () => (
//     <Router>
//     <div>
//         <Route exact path="/" component={Home} />
//         <Route exact path="/about" component={About} />
//         <Route exact path="/article" component={Article} />
//         <Route exact path="/support" component={Support} />
//         <Route exact path="/press" component={Press} />
//     </div>
//     </Router>
//   )

class Revolution extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      currentIndex: '',
    };
  }

  render() {
    return (
      <Router >
        <Suspense fallback={<div className="loader" />}>
          <Switch>
          <Route exact path="/" component={Home} currentIndex='/' />
          <Route exact path="/about" component={About} />
          <Route exact path="/article" component={Article} />
          <Route exact path="/support" component={Support} />
          <Route exact path="/press" component={Press} />
          <Route exact path="/contact" component={Contact} />
          </Switch>
        </Suspense>
      </Router>
    )
  }

}


export default Revolution;