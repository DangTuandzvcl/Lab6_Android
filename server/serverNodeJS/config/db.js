const mongoose = require('mongoose');

const local = "mongodb+srv://hoangcvph42448:r9rJwiLuY6RqmbpV@cluster0.g2hcc3w.mongodb.net/MD18309";

const connect = async () => {
    try {
        await mongoose.connect(local);
        console.log('Connect success');
    } catch (error) {
        console.error('Connection to MongoDB failed:', error);
    }
}

module.exports = { connect };
