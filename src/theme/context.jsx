/**
 * @version 1.0.0
 * @author Woonkly - Sergio
 * @description Theme context managment
*/

import { createContext } from 'react';

export const ThemeContext = createContext({

    theme: 'dark',
    setTheme: () => {}

});
