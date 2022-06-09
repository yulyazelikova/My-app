import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Music from "./components/Music/Music";
import Navbar from './components/Navbar/nav';
import News from './components/News/News';
import Profiles from './components/Profile/profole';

function App(props) {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/profiles/*' element={<Profiles postsData={props.postsData}/>} />
            <Route path='/dialogs/*' element={<Dialogs massage={props.massage}  dialogsData={props.dialogsData} />} />
            <Route path='/news/*' element ={<News />}/>
            <Route path='/music/*' element={<Music />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
