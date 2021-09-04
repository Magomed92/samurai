import React from 'react';
import './App.css';
import { Dialogs } from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import { Profile } from './components/Profile/Profile';
import { Route } from 'react-router-dom';
import { News } from './components/News/News';
import { Music } from './components/Music/Music';
import { Settings } from './components/Settings/Settings';
import { Friends } from './components/Friends/Friends';

function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      <div class="app-wrapper-content">
        <Route path="/dialogs" render={() => <Dialogs store={props.store} />} />
        <Route
          path="/profile"
          render={() => <Profile profilePage={props.state.profilePage} dispatch={props.dispatch} />}
        />
        <Route path="/news" component={News} />
        <Route path="/music" component={Music} />
        <Route path="/settings" component={Settings} />
        <Route path="/friends" render={() => <Friends profilePage={props.profilePage.sitebar} />} />
      </div>
    </div>
  );
}
export default App;
