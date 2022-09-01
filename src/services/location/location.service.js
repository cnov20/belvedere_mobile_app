import camelize from 'camelize';

import { locations } from '../../../functions/geocode/geocode.mock';

// export const locationRequest = (searchTerm) => {
// 	return new Promise((resolve, reject) => {
// 		const locationMock = locations[searchTerm];
// 		if (!locationMock) {
// 			reject('not found');
// 		}
// 		resolve(locationMock);
// 	});
// };

export const locationRequest = (searchTerm) => {
	return fetch(
		// `http://localhost:5001/belvedere-mobile-app/us-central1/geocode?city=${searchTerm}`
		`https://ff6d-154-6-22-107.ngrok.io/belvedere-mobile-app/us-central1/geocode?city=${searchTerm}`
	).then((res) => {
		return res.json();
	});
};

export const locationTransform = (result) => {
	console.log(result);

	const formattedResponse = camelize(result);
	const { geometry = {} } = formattedResponse.results[0];
	const { lat, lng } = geometry.location;

	return { lat, lng, viewport: geometry.viewport };
};
