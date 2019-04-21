const ciscospark = require('ciscospark');
const teams = ciscospark.init({
    credentials: {
        access_token: "ZTJiNGYwNjUtZjAyNS00ZmQ3LWI1NjEtYTI5YjM5NGIwNjM2ZmI0NTQ0MDItY2E5_PF84_1eb65fdf-9643-417f-9974-ad72cae0e10f"
    }
})

module.exports = {
    handleMessage: function (message) {
        console.log(JSON.stringify(message, null, 2));
        console.log(message.data.id);
        teams.messages.get(message.data.id)
            .then(function(msg) {
                console.log(msg.text);
            })
    }
};
