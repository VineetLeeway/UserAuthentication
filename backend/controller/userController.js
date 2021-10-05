const expressAsyncHandler = require("express-async-handler");
const User = require("../model/userModel");
const generateToken = require("../util/generateToken");

const registerUser = expressAsyncHandler(async (req, res) => {
  const { fullname, email, mobile_no, password, confirm_password } = req.body;
  const userExist = await User.findOne({ email });
 
   if (userExist) {
    res.status(400);  throw new Error("User Already Exists");
  }
  const user = await User.create({
    fullname,
    email,
    mobile_no,
    password,
    confirm_password, 
  });
  if(user){
      res.status(201).json({
        id: user. _id,
         fullname:user.fullname,
         email:user.email,
         token:generateToken(user._id)
      })
  }else{
      res.status(400)
      throw new Error("Error Occured")
  }
});


const authUser = expressAsyncHandler(async (req, res) => {
    const { email,  password } = req.body;
    const user = await User.findOne({email})
    if(user && await user.matchPassword(password)){
        res.json({
            id: user. _id,
            fullname:user.fullname,
            email:user.email,
            token:generateToken(user._id)
        })
        const token = generateToken(user._id)
        // console.log(token);
    }
    else{
        res.status(400);
        throw new Error('Invalid Email and Password')
    }
   
  });
  


module.exports = { registerUser,authUser};
