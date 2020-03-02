import createStore from 'redux';
import modifyPosts from '../reducers/postReducer'

export const store = createStore(modifyPosts);