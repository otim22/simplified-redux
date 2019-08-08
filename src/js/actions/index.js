import { ADD_ARTICLE } from "../constants/action-types";
// import { DATA_LOADED } from "../constants/action-types";
import { DATA_REQUESTED } from "../constants/action-types";
import { FOUND_BAD_WORD } from "../constants/action-types";

export function addArticle(payload) {
    return { 
        type: ADD_ARTICLE, 
        payload 
    }
};

export function foundBadWord(payload) {
    return { 
        type: FOUND_BAD_WORD, 
        payload 
    }
};

// Uses redux-thunk
/* 
export function getData() {
    return function(dispatch) {
      return fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(json => {
                dispatch({ type: DATA_LOADED, payload: json });
            });
    };
} 
*/

// Uses redux saga and Redux sage can be a single file containing 
// watcher function, worker function
export function getData() {
    return { type: DATA_REQUESTED };
}