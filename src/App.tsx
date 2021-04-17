import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PublicLayout from './app/shared/components/layouts/public.layout';
import PrivateLayout from './app/shared/components/layouts/private.layout';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route path="/app" component={PublicLayout} />
                    <Route path="/" component={PrivateLayout} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
