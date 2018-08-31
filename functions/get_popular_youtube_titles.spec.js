const getVideos = require('./get_popular_youtube_titles')

getVideos().then(x => {
    console.log(x)
}).catch(err => {
    console.log(err)
})
