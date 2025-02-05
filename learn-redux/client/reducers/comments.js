function postComment(state=[], action){
    switch(action.type){
        case 'ADD_COMMENT':
            //return new state with the new comment
            return [...state,
            {
                user: action.author,
                text: action.comment            
            }]
        case 'REMOVE_COMMENT':
            console.log("removing a comment")
            //return the new state without the deleted comment
            return [
                ...state.slice(0, action.i),
                ...state.slice(action.i + 1)
            ]
        default:
            return state
    }
    
}
 
 function comments (state = [], action) {
     if(typeof action.postId != 'undefined'){
         return {
             ...state,
             //overwiriter this post
             [action.postId]: postComment(state[action.postId],action)
         }
     }
     return state
 }

 export default comments;