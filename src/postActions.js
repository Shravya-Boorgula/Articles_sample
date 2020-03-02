// Actions 
const UPDATE_POST = "UPDATE_POST";
const DELETE_POST = "DELETE_POST";
const ADD_POST = "ADD_POST";
const SHOW_MODAL = "SHOW_MODAL";

// Action types
export const updatePost = () => {
    return {
        type: UPDATE_POST,
        payloadData: {}
    };
}

export const deletePost = () => {
    return {
        type: DELETE_POST,
        payloadData: {}
    };
}

export const createPost = () => {
    return {
        type: ADD_POST,
        payloadData: {}
    };
}

export const showEditModal = () => {
    return {
        type: SHOW_MODAL
    };
}
