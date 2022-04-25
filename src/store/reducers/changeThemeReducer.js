const CHANGE_THEME = "CHANGE_THEME";

export const changeThemeReducer = (state = 'black', action) => {
    switch (action.type) {
        case CHANGE_THEME:
            return state === 'black' ? 'white' : 'black'
        default:
            return state
    }
}

export const changeTheme = () => ({type: CHANGE_THEME})