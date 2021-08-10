import { combineReducers } from "redux";
import { ASYNC_INCREMENT, CHANGE_THEME, DECREMENT, DISABLE_BUTTONS, ENABLE_BUTTONS, INCREMENT } from "./types";

function counterReducer(state = 0, action) {
    if (action.type === INCREMENT) {
        return state + 1;
    } else if (action.type === DECREMENT) {
        return state - 1;
    } else if (action.type === ASYNC_INCREMENT) {
        return state + 1;
    }
    return state;
}

const initialThemeState = {
    value: 'light',
    disabled: false
}

function themeReducer(state = initialThemeState, action) {
    if (action.type === CHANGE_THEME) {
        return {...state, value: action.payload};
    } else if (action.type === DISABLE_BUTTONS) {
        return {...state, disabled: true};
    } else if (action.type === ENABLE_BUTTONS) {
        return {...state, disabled: false};
    }
    return state;
}

export const rootReducer = combineReducers({counter: counterReducer, theme: themeReducer}) 