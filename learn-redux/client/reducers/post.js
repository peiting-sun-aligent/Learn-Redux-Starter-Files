import posts from "../data/posts";

 function post (state = [], action) {
     switch(action.type) {
        case 'INCREMENT_LIKES':
            const i = action.index;
             //return the updated state
             return [...state.slice(0,i),
                {...state[i],likes: state[i].likes + 1},
                ...state.slice(i+1)]
        default:
            return state;
     }
 }

 export default post;