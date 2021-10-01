// model defines what kind of data a user have like
// name have string data type we will take help of mongoose to create the schema

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    mobile_no: {
      type: Number,
      required: true,
      trim: true,
      maxlength: 10,
    },
    password: {
      type: String,
      minlength: 8,
      maxlength: 16,
      trim: true,
      required: true,
    },
    confirm_password: {
      type: String,
      trim: true,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
// encrypting password
userSchema.pre('save', async function(req, res, next){
        if(!this.isModified('password')){
            next();
        }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)
})
// decrypting password

userSchema.methods.matchPassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password)
}


const User = mongoose.model('User', userSchema)

module.exports = User;