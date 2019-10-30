import { createStore, combineReducers } from 'redux';
import { titleReducer } from '../reducers/titleReducer';
import { descriptionReducer } from '../reducers/descriptionReducer';

const mainReducer = combineReducers({ titleReducer, descriptionReducer });

export const store = createStore(mainReducer);


