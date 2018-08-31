
const YOUTUBE_API_KEY = 'AIzaSyDN0_g8dLaBp5hI8UdleGbEEMAQjZlnePU';
const google = require('googleapis');

const youtube = google.youtube({
	version: 'v3',
	auth: YOUTUBE_API_KEY
});

module.exports = () => new Promise((resolve, reject) =>
	youtube.search.list({
		part: 'snippet',
		maxResults: 5,
		chart: 'mostPopular',
		regionCode: 'US'
	}, (err, data) => {
		if (err) {
			console.error('Error: ' + err);
			reject(err)
		}
		if (data) {
			resolve(data.items)
			
		}
	}))

