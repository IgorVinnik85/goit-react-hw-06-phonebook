import { intlState } from './initialState';
const { combineReducers } = require('redux');

const filterReducer = (state = intlState.filterCts, action) => {
  
    switch (action.type) {
    case 'filter':
      return {
        ...state,
        filter: action.payload,
      };

    default:
      return state;
  }
};

const contactsReducer = (state = intlState.phoneCts.contacts, action) => {
//   console.log(intlState.phoneCts.contacts);
  switch (action.type) {
    case 'contacts':
      return {
        ...state,
        contacts: action.payload,
      };

    default:
      return state;
  }
};

export const reducer = combineReducers({
  filter: filterReducer,
  contacts: contactsReducer,
});
