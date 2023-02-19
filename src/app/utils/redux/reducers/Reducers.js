import { combineReducers } from 'redux';

import { authReducer } from './AuthReducers';


export const reducer = combineReducers({

    //////// AUTH ////////
    auth: authReducer,
})
