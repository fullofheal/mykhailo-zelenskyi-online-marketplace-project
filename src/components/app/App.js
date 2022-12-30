import { Component } from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Products from '../products/Products'
import ProductDetails from '../productDetails/productDetails';
import ProductCart from '../productCart/ProductCart';
import Header from '../header/header';


class App extends Component {


  render() {


    return (
          <Router>
            <div className="app">
              <Header />
              <main>
                <Routes>
                  <Route path="/" element={<Products />}/>
                  <Route path="/:id" element={<ProductDetails />}/>
                  <Route path="/cart" element={<ProductCart />}/>
                </Routes>
              </main>
          </div>
          </Router>

    );
  }
}

export default App;