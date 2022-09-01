const { locations: locationsMock } = require('./geocode.mock');
const url = require('url');

module.exports.geocodeRequest = (request, response) => {
	// response.send('Geodcode request');
	// const query = url.parse(request.url, true).query;
	const { city } = url.parse(request.url, true).query;
	const locationMock = locationsMock[city.toLowerCase()];

	// response.json(JSON.stringify(locationMock));
	response.json(locationMock);
};
