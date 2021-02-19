/**
 * @version 1.0.0
 * @author Woonkly - Sergio
 * @description Custom App
*/

import { useEffect, useState } from 'react';
import { setPreferences } from 'theme';
import { ThemeContext } 	from 'theme/context';
import 'sass/style.scss';

const App = ({ Component, pageProps }) => { 

	/**
	 * @description Create the global state for theme handling
	*/
	const [theme, setTheme] = useState('dark');
	const toggleTheme = theme => setTheme(setPreferences(theme));


	useEffect(() => {

		toggleTheme(setPreferences('dark'));

	}, []);


	return(
		<ThemeContext.Provider value = {{ theme, setTheme: toggleTheme }}>
			<Component { ...pageProps } />
		</ThemeContext.Provider>
	);

};

export default App;