import React from "react";
import ReactDom from "react-dom";
import {createStore, applyMiddleware, compose} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./reducer/rootReducer";
import TodoPage from "./components/TodoPage";

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

ReactDom.render(
    <Provider store={store}>
        <TodoPage/>
    </Provider>
    , document.getElementById("app")
);
