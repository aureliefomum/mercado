
import User from '../models/user'


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
     console.log(req.body)
 }