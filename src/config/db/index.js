const mongoose = require('mongoose');
async function connect(params) {
    try {
        await mongoose.connect('mongodb://localhost:27017/f8_education_dev');
        console.log("success");
    } catch (error) {
        console.log('fail');
    }
}
module.exports={connect}