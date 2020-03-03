// import {updatePost, deletePost, createPost} from './actions/postActions';

const modifyPosts = (state = {}, action) => {
    switch (action.type) {
        case "UPDATE_POST": 
        case "DELETE_POST": 
        case "ADD_POST": 
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