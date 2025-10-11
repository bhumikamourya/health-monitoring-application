const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    age: {
        type:Number,
        min:1,
        max:120
    },
    height: Number,
    weight: Number,
    gender: {
        type:String,
        enum:["Male","Female","Other"],
        default:"Other"
    },
    goal: {
        water: { type: Number, default: 8 },       // 8 glasses
        steps: { type: Number, default: 10000 },   // 10k steps
        sleep: { type: Number, default: 7 },       // 7 hours
        calories: { type: Number, default: 2000 },
        weight: { type: Number, default: 0 }    // 150 lbs
    }
},
    { timestamps: true }
);

userSchema.index({ email: 1 });

module.exports = mongoose.model('User', userSchema);