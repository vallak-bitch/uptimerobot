const axios = require("axios")
const urls = ["https://glitch.com/edit/#!/accurate-functional-mallet"]
setInterval(function() {
            urls.forEach(url => {
            axios.get(url).then(console.log("Pong at " + Date.now())).catch(() => {});
        })
    }, 60 * 1000);
