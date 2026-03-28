const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please add a name'],
        },
        email: {
            type: String,
            required: [true, 'Please add an email'],
            unique: true,
        },
        password: {
            type: String,
            required: [true, 'Please add a password'],
        },
        profileName: {
            type: String,
            default: "@User_sluchit",
            trim: true,
            maxlength: [50, 'Profile name cannot exceed 50 characters'],
            // unique: true
        },
        profilePhoto: {
            type: Object,
            default: {
                url: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
                publicId: null,
                isSensitive: false
            }
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('User', userSchema);
