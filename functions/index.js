const functions = require('firebase-functions');
const { dialogflow } = require('actions-on-google');
const commonIntents = require('./intents/common_intents')
const displayVideosIntents = require('./intents/display_videos_intents')


const app = dialogflow()

app.intent('Default Welcome Intent', conv => commonIntents.welcomeIntent(conv))
app.intent('Default Fallback Intent', conv => commonIntents.unknownIntent(conv))
app.intent('show videos', conv => displayVideosIntents.inputShowVideos(conv))


exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app)


