/**
 * @version 1.0.0
 * @author Woonkly - Sergio
*/

import { useEffect, useState } from 'react';


/**
 * @description Custom Hook for HTTP requests
 * @param { String } url: HTTP String with enpoints 
 * @param { Object } options: Fetch options
 * @returns { Object } response: HTTP response
 * @returns { Object } error: HTTP request error
 * @returns { Boolean } isLoading: Boolen Flag
 * @url https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Utilizando_Fetch
*/
const useFetch = (url, options) => {

	const [isLoading, setIsLoading] = useState(false);
	const [response, setResponse] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {

	  	const fetchData = async () => {

			setIsLoading(true);

			try {

		  		const res = await fetch(url, options);
		  		const json = await res.json();
		  		setResponse(json);
				setIsLoading(false);

			} catch (error) {

		  		setError(error);
				setIsLoading(false);

			}
		};

	  	fetchData();

	}, []);

	return { response, error, isLoading };

};

export default useFetch;