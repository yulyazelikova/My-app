import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postsData = [
  { id: 1, message: 'Hello', likeCount: 800 },
  { id: 2, message: 'You are luckiest', likeCount: 5 },
  { id: 3, message: 'You are beautifu', likeCount: 88 },
];

let massage = [
  { id: 1, massage: 'Will be peace' },
  { id: 2, massage: 'Hi' },
  { id: 3, massage: 'Bay' },
  { id: 4, massage: 'How are you?' },
]

let dialogsData = [
  { id: 1, name: 'Dima' },
  { id: 2, name: 'Tom' },
  { id: 3, name: 'Max' },
  { id: 4, name: 'Anton' },
  { id: 5, name: 'Mia' }
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <App postsData={postsData} dialogsData={dialogsData} massage={massage} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
