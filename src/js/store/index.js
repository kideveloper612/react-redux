// src/js/store/index.js
import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/index";
import { forbiddenWordsMiddleware } from "../middleware";
const store = createStore(
    rootReducer,
    applyMiddleware(forbiddenWordsMiddleware)
);
export default store;

export function getData() {
    return fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(json => {
            return { type: "DATA_LOADED", payload: json };  
        });
}