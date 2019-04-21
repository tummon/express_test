require('dotenv').config()
const ciscospark = require('ciscospark');
const teams = ciscospark.init({
    credentials: {
        access_token: process.env.BOTTY_API
    }
});

module.exports = {
    handleMessage: function (message) {
        console.log(JSON.stringify(message, null, 2));
        
        teams.messages.get(message.data.id)
            .then(function(msg) {
                console.log(msg.text);
            })
    }
};
