const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: "Enter a username to login"
        },
        password: {
            type: String,
            required: "Enter a password to login"
        }
    }
);

const User = mmongoose.model('User', userSchema);

module.exports = User;