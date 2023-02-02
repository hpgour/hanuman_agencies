const jwt=require('jsonwebtoken');
const mongooose = require('mongoose');
const bcrypt=require('bcryptjs')
const userSchema = new mongooose.Schema({
    name: {
        type: String,
        required:true
    },
    phone: {
         type: Number,
        required:true
    },
    mail: {
        type: String,
        required:true
    },
    message: {
         type: String,
        required:true
    },
    // password: {
    //      type: String,
    //     required:true
    // },
    // cpassword: {
    //      type: String,
    //     required:true
    // },
    // tokens:[
    //     {
    //         token:{
    //             type: String,
    //             required:true
    //         }
    //     }
    // ]
})



// // hashing of password
// userSchema.pre('save',async function(next){
//     console.log("hi people");
//     if(this.isModified('password')){
//         this.password=await bcrypt.hash(this.password,12);
//         this.cpassword=await bcrypt.hash(this.cpassword,12);
//     }
//     next();
// })

// // Step to generate  a token
// userSchema.methods.generateAuthToken=async function(){
//     try{
//         let tokenss=jwt.sign({_id:this._id},process.env.SECRET_KEY);
//         this.tokens=this.tokens.concat({token:tokenss})
//         await this.save();
//         return tokenss;

//     }catch(err){
//         console.log(err);
//     }
// } 

const User = mongooose.model('USER', userSchema);

module.exports = User;