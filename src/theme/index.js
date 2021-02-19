/**
 * @version 1.0.0
 * @author Woonkly - Sergio
 * @description Theme handler
*/

/**
 * @description Set in the browser the theme preferences
 * @param { String } theme: 'light' or 'dark' theme value
*/
export const setPreferences = theme => {
        
    const DOM = document.documentElement;
    const localStorage = window.localStorage;

    DOM.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    return theme;

};
