const { locations: locationsMock } = require('./geocode.mock');
const url = require('url');
// const GOOGLE_API_KEY = require('../../functions');

// response.json(locationMock);

module.exports.geocodeRequest = (request, response, client) => {
	const { city, mock } = url.parse(request.url, true).query;
	if (mock === 'true') {
		const locationMock = locationsMock[city.toLowerCase()];
		return response.json(locationMock);
	}

	client
		.geocode({
			params: {
				address: city,
				key: 'AIzaSyCZ9_OjgQvzUrAD9FQcv59hWxTn63Y7GAs',
			},
			timeout: 1000,
		})
		.then((res) => {
			return response.json(res.data);
		})
		.catch((e) => {
			response.status(400);
			return response.send(e.response.data.error_message);
		});
};
