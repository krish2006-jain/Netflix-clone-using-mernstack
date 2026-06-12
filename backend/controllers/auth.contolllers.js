import { User } from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { generateTokenAndSendCookie } from "../utils/generateToken.js";

export async function signup(req,res) {
    try{
        const{email,password,username}=req.body;
        if(!email || !password ||!username){
            return res.status(400).json({success:false,message:"All fields are required"})
        }
        const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)){
            return res .status(400).json({success:false,message:"Invalid email format"})
        }
        if(password.length < 6){
    return res.status(400).json({
        success:false,
        message:"Password must be at least 6 characters"
    })
}
        const existingUserByEmail=await User.findOne({email:email})
        if(existingUserByEmail){
            return res.status(400).json({success:false,message:"Email already exist"})
        }
        const existingUserByUsername=await User.findOne({username})
        if(existingUserByUsername){
            return res.status(400).json({success:false,message:"Username already exist"})
        }


        const salt=await bcryptjs.genSalt(10);
        const hashedPassword= await bcryptjs.hash(password,salt);
        const PROFILE_PIC=["/avatar1.png","/avatar2.png","/avatar3.png"];

        const image=PROFILE_PIC[Math.floor(Math.random()*PROFILE_PIC.length)];
        const newUser=new User({
            email,
            password:hashedPassword,
            username,
            image
        })
        await newUser.save();
        generateTokenAndSendCookie(newUser._id,res);
                    res.status(201).json({success:true,user:{
            ...newUser._doc,
            password:""
        }})


    }catch(error){
        console.log("Intenal error occured");
           res.status(500).json({
        success:false,
        message:error.message
    });
    }
}
export async function login(req,res) {
        try{
        const {email,password}=req.body;
        if(!email||!password){
            return res.status(400).json({success:false,message:"All fields are required"})
        }
        const user=await User.findOne({email:email});
        if(!user){
            return res.status(404).json({success:false,message:"Invalid credentials"})
        }
        const isPasswordMatch=await bcryptjs.compare(password,user.password);
        if(!isPasswordMatch){
            return res.status(404).json({success:false,message:"Invalid credentials"});
        }
        generateTokenAndSendCookie(user._id,res);
        res.status(200).json({
            success:true,
            user:{
                ...user._doc,
                password:""
            }
        })
    }catch(error){
       console.log("Error in login controller", error.message);
       res.status(500).json({success:false,message:"Internal server error"}) ;
    }
}
export async function logout(req,res) {
        try{
        res.clearCookie("jwt-netflix");
        res.status(200).json({success:true,message:"Logged out successfully"});

    }catch(error){
        console.log("Error in logout controller",error.message);
        res.status(500).json({success:false,message:"Internal server error"});
    }
}
