import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import ShoppingCart from './Pages/ShoppingCart';
import ProductDetails from './Pages/ProductDetails';
import Checkout from './Pages/Checkout';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="/shopping-cart" component={ ShoppingCart } />
            <Route path="/productDetails/:id" component={ ProductDetails } />
            <Route path="/checkout" component={ Checkout } />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
