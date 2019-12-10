// src/js/reducers/index.js
import { ADD_ARTICLE } from "../constants/action-types";
const initialState = {
    articles: []
};

function rootReducer(state = initialState, action) {
    if (action.type === ADD_ARTICLE) {
        var teststate = Object.assign({}, state, {
            articles: state.articles.concat(action.payload)
        });
        return teststate;
    }
    return state;
}
export default rootReducer;