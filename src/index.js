import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import Catalog from './components/Catalog';
import Product from './components/Product';
import Cart from './components/Cart';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route exact path="/catalog" component={Catalog}/>
            <Route exact path="/product/:id" component={Product}/>
            <Route exact path="/cart" component={Cart}/>
        </Switch>
    </Router>, 
    document.getElementById('root')
);

registerServiceWorker();
