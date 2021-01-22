const { Schema, model } = require('mongoose');

const UserSchema = Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    }
});

UserSchema.method('toJSON', function () {
    const { password, ...object } = this.toObject();
    return object;
})

module.exports = model('User', UserSchema);