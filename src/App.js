import React from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
// redux
import { Provider } from 'react-redux';
import store from './store';

import Navbar from './components/Navigation/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import ProjectsMain from './components/Projects/ProjectsMain';
import Github from './components/Github/Github';
import LexiconMain from './components/Lexicon/LexiconMain';
import NotFound from './components/NotFound';

import 'materialize-css/dist/css/materialize.min.css';

const App = () =>{

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
    
          <Navbar />
          <Route render={({ location }) => (

          <TransitionGroup>

            <CSSTransition
              in={true}
              appear={true}
              key={location.key}
              timeout={1450}
              classNames="fade" 
            >

              <Switch location={location}>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About}/>
                <Route path='/projects' component={ProjectsMain} />
                <Route path='/github' component={Github} />
                <Route path='/lexicon' component={LexiconMain} />
                <Route component={NotFound} />
              </Switch>

            </CSSTransition>
          </TransitionGroup>
          )} />
        </div>
      </BrowserRouter>
    </Provider>
  );
  
}

export default App;
