import MESSAGES from "../confign/commonRespones.js";
import { Register_user } from "../module/user.js";
import bcrypt from 'bcrypt'

class User {
  static register = async (req, res) => {
    try {
      const { username, email, password, phonenumber } = req.body;
      if (!username || !email || !password || !phonenumber) throw new Error(MESSAGES.VALIDATION.REQUIRED_FIELDS);
      const user= await Register_user.findOne({email})
      if(user){
        return res.status(400).json({status:false, message:MESSAGES.ERROR.USER_EXISTS ,data:[]})
      }
      const hashpassword= await bcrypt.hash(password,10)
      await Register_user.create({
        username,
        email,
        password:hashpassword,
        phonenumber
      })
      return res.status(200).json({status:true, message:MESSAGES.AUTH.SIGNUP_SUCCESS ,data:[]})
    } catch (error) {
      return res.send(error.message);
    }
  };
}

export default User; 