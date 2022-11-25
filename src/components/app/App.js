import { Component } from 'react';
import Categories from '../categories/Categories';
import Currencies from '../currencies/Currencies';
import Products from '../products/Products'


class App extends Component {


  render() {


    return (
          <div className="app">
            <Categories />
            {/* <Currencies /> */}
            <Products />
          </div>

    );
  }
}

export default App;