import { GET_CATS_LIST, GET_CAT_POSTS_LIST } from '../actions/actionTypes'

/**
 * 
 * @param {obeject} state - Initial state of the app
 * @param {object} action 
 * @returns 
 */

export const newsReducer = ( action ) => {

    const {selectedCat, payload} = action;
    
    switch ( action.type ) {
        case GET_CATS_LIST:
            /**
             * 
             * @param {object} action.playload
             * @returns an object {title: 'title of the category', nbItems: 'Counting instances', thumbnailUrl: 'thumbnailUrl of the first instances'}
             */
            const catsList = Object.values(payload).reduce((allCats, obj) => {
                let cat = obj.category;
                // If instances exist implement nbItems
                if (cat in allCats) {
                    allCats[cat].nbItems++
                }
                else {
                    // If not create first instances
                    allCats[cat] = {
                        title: cat,
                        nbItems: 1,
                        thumbnailUrl: obj.thumbnailUrl
                    }
                }
                return allCats
            }, {})
            // Return an array of the object values
            return Object.values(catsList);

        case GET_CAT_POSTS_LIST: 
            
            /**
             * 
             * @param {object} action.playload
             * @returns Selected category posts list
             */
            const catPostsList = Object.values(payload).reduce((allPosts, obj) => {
                let cat = obj.category;
                                
                // Group initialization
                if(cat === selectedCat){
                    if (!allPosts[cat]) {
                        allPosts[cat] = [];
                    }
                    // Grouping
                    allPosts[cat].push(obj);
                }
                return allPosts;
            }, {})
            // Return posts category list if exist
            return (selectedCat in catPostsList) ? catPostsList[selectedCat] : {message: 'Not found'} ;

        default:
        return action
    }
}