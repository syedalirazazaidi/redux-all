import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import { Provider } from 'react-redux';
// items
// import cartItems from "./cart-items";
// redux stuff
import { createStore } from 'redux';
import reducer from './reducer'

const store = createStore(reducer);
function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  );
}
export default App;
