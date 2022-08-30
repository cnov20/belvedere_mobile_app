import React, {
	useState,
	useContext,
	createContext,
	useEffect,
	useMemo,
} from 'react';
import { mobileBarsRequest, resultsTransform } from './mobile-bars.service';

import { LocationContext } from '../location/location.context';

export const MobileBarsContext = createContext();

export const MobileBarsContextProvider = ({ children }) => {
	const [bars, setBars] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const { location } = useContext(LocationContext);

	const retrieveBars = (loc) => {
		setIsLoading(true);
		setBars([]);
		setTimeout(() => {
			mobileBarsRequest(loc)
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
		if (location) {
			console.log('LOCATION MB CONTEXT — ', location);
			const locationString = `${location.lat},${location.lng}`;
			retrieveBars(locationString);
		}
	}, [location]);

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
