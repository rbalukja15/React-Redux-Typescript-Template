import React from 'react';
import './App.scss';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './app/modules/login/pages/login';

toast.configure();

function App() {
    return (
        <div className="App">
            <Login />
        </div>
    );
}

export default App;
