const mongoose = require('mongoose');

const ConnectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://admin:Mel4VQbjCKgDBY6q@cluster0.cfo9t.mongodb.net/contactDatabase?retryWrites=true&w=majority&appName=Cluster0");
        console.log('You are connected to your Database');
    } catch (error) {
        console.log(error.message);
    }
};
module.exports = ConnectDB;
