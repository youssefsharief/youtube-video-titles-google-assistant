const fakeData = require('../config/fake_data')
const getPopularYoutubeTitles = require('../get_popular_youtube_titles')






function fetchFakeVideoTitles() {
	return new Promise((resolve) => [
		resolve(fakeData.events)
	])
}


module.exports = {
	inputShowVideos(conv) {
		return getPopularYoutubeTitles().then(data => {
			conv.ask(`<speak>  The most popular videos on YouTube right now are <break time="800ms"/>. </speak> `)
			const reduction = data.reduce((prev, elem, i) => i < 4 ? prev +
				`<say-as interpret-as="ordinal"> ${i + 1} </say-as> video <break time="500ms"/> is ${elem['snippet']['title']}.  <break time="1200ms"/>`
				: prev, '')
			conv.close(`<speak>` + reduction + `</speak>`)
		})
	},
	
}