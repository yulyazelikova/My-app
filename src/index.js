import reportWebVitals from './reportWebVitals';
import state, { subscride } from './redux/state';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { addPost } from './redux/state';
import { updateNewPostText } from './redux/state';
import { updateNewMassageText } from './redux/state';
import { addMassage } from './redux/state';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

let renderEntrireTree = (state) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}
                    addMassage={addMassage}
                    updateNewMassageText={updateNewMassageText} />
            </BrowserRouter>
        </React.StrictMode>
    );
}

renderEntrireTree(state);

subscride(renderEntrireTree);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
