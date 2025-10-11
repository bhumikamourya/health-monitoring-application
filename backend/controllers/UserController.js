const User = require('../models/User.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//Generate JWT token
const generateToken = (id) => {
    return jwt.sign({ id },
        process.env.JWT_SECRET, { expiresIn: "30d" }
    );
};

//Register User 
exports.registerUser = async (req, res) => {
  try{
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) return res.status(400).json({ message: "User already exists" });

    const hashPassword = await bcrypt.hash(password, 10);

    const user = await User.create({ name, email, password: hashPassword });
    res.json({
        message:"User Registerd Successfully"
    });
  }catch(err){
    res.status(500).json({message:"Server error"});
  }
};
//Login User
exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            message : "User Successfully LoggedIn",
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        });
    } else {
        res.status(400).json({ message: "Invalid email or password" });
    }
};

//Get user Profile
exports.getProfile = async (req ,res)=>{
    try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });

    res.json(user); // ab isme goals bhi aayenge
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
//Update user Profile
exports.updateProfile = async(req,res)=>{
    try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ message: "User not found" });

     // Profile details
    user.name = req.body.name || user.name;
    user.age = req.body.age || user.age;
    user.height = req.body.height || user.height;
    user.weight = req.body.weight || user.weight;
    user.gender = req.body.gender || user.gender;
           // Goals update (agar bheje gaye ho to)
    user.goal = {
      water: req.body.goal?.water || user.goal.water,
      steps: req.body.goal?.steps || user.goal.steps,
      sleep: req.body.goal?.sleep || user.goal.sleep,
      calories: req.body.goal?.calories || user.goal.calories,
      weight: req.body.goal?.weight || user.goal.weight
    };
    const updatedUser = await user.save();
    updatedUser.password = undefined;
    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }

};
