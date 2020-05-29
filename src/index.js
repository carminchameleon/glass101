import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "Redux/rootReducer";
import GlobalStyle from "styles/GlobalStyle";


ReactDOM.render(
  <Provider store={createStore(rootReducer)}>
    <React.StrictMode>
      <GlobalStyle />
      <Routes />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// export default Routes;
