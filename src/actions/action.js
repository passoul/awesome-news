import { GET_CATS_LIST, GET_CAT_POSTS_LIST } from './actionTypes';
import { newsReducer } from '../reducer/postsReducer'

/**
 * 
 * @param {object} postsListJson
 * @returns Categories list
 */
export const getCatsList = (postsListJson) => {
    return newsReducer( {type: GET_CATS_LIST, payload: postsListJson})
} 
/**
 * 
 * @param {object} postsListJson
 * @returns Category posts list
 */
 export const getCatPostsList = (postsListJson, selectedCat) => {
    return newsReducer( {type: GET_CAT_POSTS_LIST, payload: postsListJson, selectedCat: selectedCat})
} 