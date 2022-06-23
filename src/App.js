import React from "react";
import { Route, Routes } from "react-router-dom";
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Music from "./components/Music/Music";
import Navbar from './components/Navbar/nav';
import News from './components/News/News';
import Profiles from './components/Profile/profole';

function App(props) {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar sitebar={props.state.sitebar} />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/profiles/*' element={<Profiles
            profilePage={props.state.profilePage}
            addPost={props.addPost}
            updateNewPostText={props.updateNewPostText} />} />
          <Route path='/dialogs/*' element={<Dialogs
            dialogsPage={props.state.dialogsPage}
            addMassage={props.addMassage}
            updateNewMassageText={props.updateNewMassageText} />} />
          <Route path='/news/*' element={<News />} />
          <Route path='/music/*' element={<Music />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
