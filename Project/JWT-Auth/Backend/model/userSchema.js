const mongoose = require('mongoose');
const {Schema}=mongoose;
const JWT = require('jsonwebtoken');

const userSchema = new Schema({
         name:{
            type: String,
            required:[true,'Úser name is required'],
            minLength:[5,'Name must be at least 5 char'],
            trim:true
         },
         email:{
            type: String,
            required:[true,'email name is required'],
            minLength:[5,'Name must be at least 5 char'],
            trim:true,
            unique:[true,'Already register'],
            lowercase:true
         },
         password:{
            type : String,
            select:false
         },
         forgotPasswordToken:{
            type : String
         },
         forgotPasswordExperyDate:{
                type:Date
         },
    

},  
    {
        timestamps:true
    }
);
userSchema.method ={
    jwToken (){
        return JWT.sign({
            id:this._id,email: this.email},
            process.env.SECRET,
            {expiresIn:'24h'}
        )
    }
}

const userModel = mongoose.model('user',userSchema); 
module.exports = userModel;