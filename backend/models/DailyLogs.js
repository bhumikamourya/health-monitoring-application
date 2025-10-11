const mongoose = require("mongoose");

const dailyLogSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },

  date: { type: Date, default: Date.now },

  sleep: { type: Number },               // hours
  steps: { type: Number },               // number of steps
  water: { type: Number },               // glasses/ml
  calories: { type: Number },            // consumed calories
  heartrate: { type: Number },           // bpm

  blood_pressure: {
    systolic: { type: Number },
    diastolic: { type: Number },
  },

  sugar: { type: Number },               // mg/dL
  oxygen: { type: Number },              // SpO2 %
  cholesterol: {
    ldl: { type: Number },
    hdl: { type: Number },
    total: { type: Number },
  },
  workouts: [
    {
      type: { type: String, enum: ["Cardio", "Strength", "Yoga", "Other"] },       // Cardio / Yoga / Strength
      duration: { type: Number },   // minutes
      caloriesBurned: { type: Number }
    }
  ],
  distance: { type: Number },//km
  notes: { type: String },
  foodIntake: [
    {
      foodName: String,
      carbs: Number,
      protein: Number,
      fats: Number,
      calories: Number
    }
  ]
},
  { timestamps: true });
  dailyLogSchema.index({ createdAt: 1 }, { expireAfterSeconds: 60 * 60 * 24 * 30 });

module.exports = mongoose.model("DailyLog", dailyLogSchema);