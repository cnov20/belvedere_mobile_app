import camelize from 'camelize';
import { host, isMock } from '../../../src/components/utility/env';

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

// `http://localhost:5001/belvedere-mobile-app/us-central1/geocode?city=${searchTerm}&mock=${isMock}`
export const locationRequest = (searchTerm) => {
	return fetch(`${host}/geocode?city=${searchTerm}&mock=${isMock}`).then(
		(res) => {
			console.log(res);
			return res.json();
		}
	);
};

export const locationTransform = (result) => {
	console.log(result);

	const formattedResponse = camelize(result);
	const { geometry = {} } = formattedResponse.results[0];
	const { lat, lng } = geometry.location;

	return { lat, lng, viewport: geometry.viewport };
};
