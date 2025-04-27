const  mongoose  = require("mongoose");

async function connectdb(url) {
    await mongoose.connect(url)
}

module.exports = {connectdb}