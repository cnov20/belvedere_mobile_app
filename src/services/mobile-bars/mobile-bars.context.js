import React, { useState, createContext, useEffect, useMemo } from 'react';

import { mobileBarsRequest, resultsTransform } from './mobile-bars.service';

export const MobileBarsContext = createContext();

export const MobileBarsContextProvider = ({ children }) => {
	const [bars, setBars] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const retrieveBars = () => {
		setIsLoading(true);
		setTimeout(() => {
			mobileBarsRequest()
				.then(resultsTransform)
				.then((results) => {
					setIsLoading(false);
					setBars(results);
				})
				.catch((err) => {
					setIsLoading(false);
					setError(err);
				});
		}, 2000);
	};
	useEffect(() => {
		retrieveBars();
	}, []);

	console.log('MOBILE BARS — ', bars);
	return (
		<MobileBarsContext.Provider
			value={{
				bars,
				isLoading,
				error,
			}}>
			{children}
		</MobileBarsContext.Provider>
	);
};
