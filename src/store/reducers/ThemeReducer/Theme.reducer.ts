import {ThemeType} from './Theme.types';
import {CHANGE_THEME} from './Theme.actions';

export const themeReducer = (state: ThemeType = 'white', action: any) => {
    switch (action.type) {
        case CHANGE_THEME:
            return state === 'black' ? 'white' : 'black'
        default:
            return state
    }
}

