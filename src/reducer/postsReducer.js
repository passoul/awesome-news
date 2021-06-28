import { GET_CATS_LIST, GET_CAT_POSTS_LIST } from '../actions/actionTypes'

/**
 * 
 * @param {obeject} state - Initial state of the app
 * @param {object} action 
 * @returns 
 */

export const newsReducer = ( action ) => {
    switch ( action.type ) {
        case GET_CATS_LIST:
            /**
             * 
             * @param {object} action.playload
             * @returns 
             * Return an object {title: 'title of the category', nbItems: 'Counting instances', thumbnailUrl: 'thumbnailUrl of the first instances'}
             */
            const catsList = Object.values(action.payload).reduce((allCats, obj) => {
                let key = obj.category;
                // If instances exist implement nbItems
                if (key in allCats) {
                    allCats[key].nbItems++
                }
                else {
                    // If not create first instances
                    allCats[key] = {
                        title: key,
                        nbItems: 1,
                        thumbnailUrl: obj.thumbnailUrl
                    }
                }
                return allCats
            }, {})
            return Object.values(catsList);

        case GET_CAT_POSTS_LIST: 
            
            /**
             * 
             * @param {object} action.playload
             * @returns 
             */
            const catPostsList;

        default:
        return action
    }
}