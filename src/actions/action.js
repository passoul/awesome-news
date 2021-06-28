import { GET_CATS_LIST, GET_CAT_POSTS_LIST } from './actionTypes';
import { newsReducer } from '../reducer/postsReducer'

/**
 * 
 * @param {object} postsListJson
 * @returns 
 */
export const getCatsList = (postsListJson) => {
    return newsReducer( {type: GET_CATS_LIST, payload: postsListJson})
} 
/**
 * 
 * @param {object} postsListJson
 * @returns 
 */
 export const getCatPostsList = (postsListJson) => {
    return newsReducer( {type: GET_CAT_POSTS_LIST, payload: postsListJson})
} 