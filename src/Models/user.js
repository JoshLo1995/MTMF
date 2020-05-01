const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

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
const User = mongoose.model('User', userSchema);
    
User.prototype.setUserName = () => {
    let username;

    return username;
}

User.prototype.setPassword = () => {
    bcrypt.hash(`${insertpasswordfieldhere}`, 10, (err, hash) => {
        // Store hash in database
        if (err) throw err;
    })
}

User.prototype.createNewUser = () => {
    let username = setUserName();
    // create query to send username to db
    setPassword();
}

User.prototype.verifyPassword = () => {
    bcrypt.compare(`${insertpasswordfieldhere}`, hash, (err, res) => {
        if (res) {
            // handle success
        } else {
            // handle failure womp womp womppppppp
            throw err;
        }
    } )
}


module.exports = User;