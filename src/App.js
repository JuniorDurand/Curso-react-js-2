import * as React from 'react';
import './App.css';
import Homepage from './pages/Homepage/Homepage.component';
import Restaurant from './pages/Restaurant/Restaurant.component';
import About from './pages/About/About.component'
import ListPosts from './pages/ListPosts/ListPosts.component'
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from './components/Header/Header.component.jsx';

function App() {

  
  return (
    //<div class="jumbotron-fluid"></div>
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/restaurants/:handle' component={Restaurant}/>
        <Route exact path='/sobre' component={About}/>
        <Route exact path='/posts' component={ListPosts}/>
      </Switch>
    </div>
  );
}

export default App;