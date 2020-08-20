const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const connect = async (url) => {
    await mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology:true
    });
    console.log('[mongoose]: Connection success!')
}

module.exports ={
    connect,
}