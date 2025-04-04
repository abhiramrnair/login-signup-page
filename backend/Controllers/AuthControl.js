const UserModel = require("../Models/User");
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken');

const signup=async(req,res)=>{
    try{
        const{name,email,password}=req.body;
        const user=await UserModel.findOne({email});
        if(user){
            return res.status(409)
            .json({message:'User is already registered',success: false});
        }
        const UserMode1=new UserModel({name,email,password});
        UserMode1.password=await bcrypt.hash(password, 10);
        await UserMode1.save();
        res.status(201)
        .json({message:"signup successfully", success: true})
    } catch(err){
        res.status(500)
        .json({message:"Internal server error", success: false})
    }
}

const login=async(req,res)=>{
    try{
        const{email,password}=req.body;
        const user=await UserModel.findOne({email});
        if(!user){
            return res.status(403).json({message:'Auth failed, email or password is wrong',success: false});
        }
       const isPass=await bcrypt.compare(password, user.password);
       if(!isPass){
            return res.status(403).json({message:'Auth failed, email or password is wrong',success: false});
       }
       const jwtTok=jwt.sign({email: user.email, _id: user.id}, process.env.JWT_SEC, {expiresIn: '12h'})
        res.status(200)
        .json({message:"login successfully", success: true, jwtTok, name: user.name, email})
    } catch(err){
        res.status(500)
        .json({message:"Internal server error", success: false})
    }
}
module.exports={
    signup,
    login
};
