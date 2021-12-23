
import User from '../models/user';
import jwt from 'jsonwebtoken';


export const register = async (req, res) => {
console.log(req.body)
const {name,email,password} = req.body

//validation
if(!name) return res.status(400).send('Name is required')
if(!password || password.length < 6 ) 
return res
    .status(400)
    .send("Password is required and should be min 6 characters long");
//find out if user already exists based on email
let userExist = await User.findOne({email})
if(userExist) return res.status(400).send('Email is taken')


//After doing all the above, create and register new user based on user Schema
const user = new User(req.body)
// try to save new user in the database
try{
   await user.save()
   console.log('USER CREATED', user)
   return res.json({ok:true})
} catch(err){
    console.log("ATTEMPT TO CREATE USER FAILED", err)
    return res.status(400).send('Error. Try again.')
}
}


 export const login = async (req, res) => {
    //   console.log(req.body)
      const {email, password} = req.body
    try {
        //check if logging in user exists
        let user = await User.findOne({ email }).exec();
        // console.log('USER EXISTS', user)
        if(!user) res.status(400).send('User with that email not found');
        //compare password, make sure we're getting the right password
        user.comparePassword(password, (err,match) => {
            console.log('COMPARE PASSWORD IN LOGIN ERR', err)
            if(!match || err) return res.status(400).send('Wrong password');
            // GENERATE A TOKEN THEN SEND AS RESPONSE TO CLIENT
            let token = jwt.sign({_id:user._id}, process.env.JWT_SECRET, {
                expiresIn:'7d'
            });
            res.json({token, user : {
                _id:user._id,
                name:user.name,
                email:user.email,
                createdAt:user.createdAt,
                updatedAt: user.updatedAt,
            },
        })
        })
    } catch(err){
        console.log('LOGIN ERROR', err)
        res.status(400).send("Signin failed")
    }
 }