const liveHost = 'https://us-central1-belvedere-mobile-app.cloudfunctions.net';

const localHost =
	'https://ff6d-154-6-22-107.ngrok.io/belvedere-mobile-app/us-central1';

export const isDevelopment = process.env.NODE_ENV === 'development';

export const host = isDevelopment ? localHost : liveHost;
