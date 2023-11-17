import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './assets/fonts/Poppins/Poppins-Regular.ttf';
import './assets/fonts/Poppins/Poppins-SemiBold.ttf';
import './assets/fonts/Poppins/Poppins-Bold.ttf';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

reportWebVitals();
