import { mocks, mockImages } from './mock';
import camelize from 'camelize';

export const mobileBarsRequest = (location) => {
	return new Promise((resolve, reject) => {
		const mock = mocks[location];
		if (!mock) {
			reject('not found');
		}
		resolve(mock);
	});
};

export const resultsTransform = ({ results = [] }) => {
	const mappedResults = results.map((bar) => {
		bar.photos = bar.photos.map((p) => {
			return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
		});

		return {
			...bar,
			address: bar.vicinity,
			isOpenNow: bar.opening_hours && bar.opening_hours.open_now,
			isClosedTemporarily: bar.business_status === 'CLOSED_TEMPORARILY',
		};
	});

	return camelize(mappedResults);
};

// mobileBarsRequest()
// 	.then(resultsTransform)
// 	.then((transformedResponse) => {
// 		console.log(transformedResponse);
// 	})
// 	.catch((err) => {
// 		console.log('error');
// 	});
