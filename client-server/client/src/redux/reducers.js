import { combineReducers } from 'redux';

const cartQuantity = Math.floor(Math.random() * 7);

const nav = () => ({
  upper: [
    'SHOP REI',
    'REI OUTLET',
    'USED GEAR',
    'REI ADVENTURES',
    'CLASSES & EVENTS',
    'EXPERT ADVICE',
    'CO-OP JOURNAL',
    'CONVERSATIONS',
    'CAMPING PROJECT'
  ],
  lower: [
    'Camp & Hike',
    'Climb',
    'Cycle',
    'Paddle',
    'Run',
    'Snow',
    'Travel',
    'Yoga',
    'Men',
    'Women',
    'Kids',
    'Deals',
    'More'
  ]
});

const main = (
  state = { visible: false, active: '', data: [], adverts: [], clickables: [] },
  action
) => {
  switch (action.type) {
    case 'SHOW_MAIN':
      return { ...state, visible: true, ...action.payload };
    case 'HIDE_MAIN':
      return { ...state, visible: false, active: '' };
    default:
      return state;
  }
};

const cart = (
  state = { visible: false, xCoords: 0, data: [], cartQuantity },
  action
) => {
  switch (action.type) {
    case 'SHOW_CART':
      return { ...state, visible: true };
    case 'HIDE_CART':
      return { ...state, visible: false };
    case 'GET_CART':
      return { ...state, data: action.payload };
    case 'SCROLL_CART':
      return { ...state, xCoords: action.payload };
    default:
      return state;
  }
};

const login = (state = { visible: false, user: false, name: '' }, action) => {
  switch (action.type) {
    case 'SHOW_LOGIN':
      return { ...state, visible: true };
    case 'HIDE_LOGIN':
      return { ...state, visible: false };
    case 'USER_LOGGED_IN':
      return { ...state, user: true, name: action.payload };
    case 'USER_LOGGED_OUT':
      return { ...state, user: false, name: '' };
    default:
      return state;
  }
};

const search = (
  state = { visible: false, regex: '', data: [], history: [] },
  action
) => {
  switch (action.type) {
    case 'SHOW_SEARCHES':
      return { ...state, visible: true };
    case 'HIDE_SEARCHES':
      return { ...state, visible: false };
    case 'SEARCH_ITEMS':
      return { ...state, data: action.payload };
    case 'GET_HISTORY':
      return { ...state, history: action.payload };
    case 'CLEAR_HISTORY':
      return { ...state, history: [] };
    case 'SET_REGEX':
      return { ...state, regex: action.payload };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  nav,
  main,
  cart,
  login,
  search
});
