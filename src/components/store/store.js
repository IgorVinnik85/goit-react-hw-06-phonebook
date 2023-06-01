import { createStore } from 'redux';

import { reducer } from './reducer';
// import { intlState } from './initialState';


export const store = createStore(reducer);
