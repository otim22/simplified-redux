import { ADD_ARTICLE } from "../constants/action-types";
import { DATA_LOADED } from "../constants/action-types";
// import { FOUND_BAD_WORD } from "../constants/action-types";

const initialState = {
    articles: [],
    remoteArticles: []
};

function rootReducer(state = initialState, action) {
    switch(action.type){
        case ADD_ARTICLE:
            return Object.assign({}, state, {
                articles: state.articles.concat(action.payload)
            });

        case DATA_LOADED:
            return Object.assign({}, state, {
                remoteArticles: state.remoteArticles.concat(action.payload)
            });

        // case FOUND_BAD_WORD:
        //     return Object.assign({}, state, {
        //         articles: state.articles.concat(action.payload)
        //     });

        default:
            return state
    }
}

export default rootReducer;