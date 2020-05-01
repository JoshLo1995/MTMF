const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        user: {
            username: {
                type: String,
                required: "Enter a username to login"
            },
            password: {
                type: String,
                required: "Enter a password to login"
            }
        }   
    }
);
const User = mongoose.model('User', userSchema);
    
// Call from sign up page
User.prototype.setUserName = () => {
    let username = `${insertusernamefieldhere}`;

    return username;
}

// Call from sign up page
User.prototype.createNewUser = () => {
    let username = User.prototype.setUserName();
    bcrypt.hash(`${insertpasswordfieldhere}`, 10, (err, hash) => {
        // Store hash in database
        if (hash) {
            this.db.MTMFdb.insertOne(
                {
                    user: {
                        username: username,
                        password: hash
                    }
                }
            )
        } else {
            throw err;
        }
    })
}

User.prototype.verifyPassword = () => {
    let username = `${insertusernamefieldhere}`;
    let hash = User.findOne(
        {
            username: username,
        }
    ).password;
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