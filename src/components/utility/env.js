const liveHost = 'https://us-central1-belvedere-mobile-app.cloudfunctions.net';

const localHost =
	'https://3bd9-45-130-83-172.ngrok.io/belvedere-mobile-app/us-central1';

export const isDevelopment = process.env.NODE_ENV === 'development';

export const host = liveHost;
