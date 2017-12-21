'use strict';

var Alexa = require('alexa-sdk');
var http = require('https');
const welcomeOutput = "Welcome to Spell Guru. I can help you with spelling out words.";
const welcomeReprompt = "What do you want me to spell?";

exports.handler = function (event, context, callback) {
    var alexa = Alexa.handler(event, context, callback);
    alexa.appId = 'amzn1.ask.skill.5b47322a-066c-4909-a36e-df3cdf2062a0';
    alexa.registerHandlers(handlers);
    alexa.execute();
};

const handlers = {
    'LaunchRequest': function () {
        this.response.speak(welcomeOutput).listen(welcomeReprompt);
        this.emit(':responseReady');
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = 'I can help you with spelling out words.';

        this.response.speak(speechOutput).listen(welcomeReprompt);
        this.emit(':responseReady');
    },
    'AMAZON.CancelIntent': function () {
        this.response.speak('I guess you got it.');
        this.emit(':responseReady');
    },
    'AMAZON.StopIntent': function () {
        this.response.speak('I guess you got it.');
        this.emit(':responseReady');
    },
    'SpellWordIntent': function () {
        var self = this;
        var filledSlots = delegateSlotCollection.call(this);
        var word = this.event.request.intent.slots.WORD.value;
        var speechOutput = word + "; " + word.split('').join();
        self.response.speak(speechOutput);
        self.emit(':responseReady');

    }
};