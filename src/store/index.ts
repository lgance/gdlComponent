import { createStore } from 'redux';

const ADD_MENU: string = 'ADD_MENU';
const DELETE_MENU: string = 'DELETE_MENU';
const TOGGLE_MENU: string = 'TOGGLE_MENU';

const addMenu = () => ({ type: ADD_MENU });
const deleteMenu = () => ({ type: DELETE_MENU });
const toggleMenu = () => ({ type: TOGGLE_MENU });

const initialState = {
  lnbMenu: [
    { text: '1Depth Menu', children: [{ text: '2Depth Menu' }] },
    { text: '1Depth Menu222' },
    { text: '1Depth Menu222' },
    { text: '1Depth Menu222' }
  ]
};

function reducer(state = initialState, action: any) {
  switch (action.type) {
    case TOGGLE_MENU:
      return {};
    case ADD_MENU:
      return {};
    case DELETE_MENU:
      return {};
  }
}
