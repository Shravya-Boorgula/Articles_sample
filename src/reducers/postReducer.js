// import {updatePost, deletePost, createPost} from './actions/postActions';

const modifyPosts = (state = {}, action) => {
    switch (action.type) { 
        case "ADD_POST": 
            return {
                ...state
            };
        case "GET_POSTS": 
            return {
                ...state,
                postsData: action.payload
            };
        case "UPDATE_POST": 
            return {
                ...state
            };
        case "DELETE_POST": 
            return {
                ...state
            };
        case "SHOW_MODAL": 
            return {
                ...state,
                showModalToEdit: true
            };
        case "HIDE_MODAL": 
            return {
                ...state,
                showModalToEdit: false
            };
        default: 
        return state;
    }
}
export default modifyPosts;