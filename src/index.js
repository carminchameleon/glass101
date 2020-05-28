import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "Redux/rootReducer";
import GlobalStyle from "styles/GlobalStyle";
import thunk from "redux-thunk";

const initialState = {};

if(localStorage.getItem('cartItems')){
  console.log(localStorage.getItem('cartItems'))
  initialState.cart = { items : JSON.parse(localStorage.getItem('cartItems'))}
}
const composeEnhancer = window.__REDIX_DEVTOOLS_EXTENSTION__ || compose;

ReactDOM.render(
  <Provider
    store={createStore(
      rootReducer,
      initialState,
      composeEnhancer(applyMiddleware(thunk))
    )}
  >
    <React.StrictMode>
      <GlobalStyle />
      <Routes />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

export default Routes;
