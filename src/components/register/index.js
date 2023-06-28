import './index.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {useState,useEffect} from 'react'
const imageUrl = 'https://res.cloudinary.com/dcauubpq9/image/upload/v1687843831/register_eysbks.png'

const getFromLocalStoarge  = () =>{
    const userData = JSON.parse(localStorage.getItem('usersData'))
    if (userData){
        return userData
    }
    else{
        return []
    }
}

const Register = () =>{
 const [userDetails,setUserDetails] = useState(getFromLocalStoarge())
 
 const [fullName,setFullName] = useState('')
 const [email,setEmail] = useState('')
 const [number,setNumber] = useState('')
 const [username,setUsername] = useState()
 const [password,setPassword] = useState('')
 const [rePassword,setRePassword] = useState('')
 const [gender,setGender] = useState('')
 
 useEffect(()=>{
    localStorage.setItem('usersData',JSON.stringify(userDetails))
 },[userDetails])

 const onChangeFullname = (event) =>{
    setFullName(event.target.value)
 }

 const onChangeEmail = (event)=>{
    setEmail(event.target.value)
 }

 const onChangeNumber = (event) =>{
    setNumber(event.target.value)
 }

 const onChangeGender = (event) =>{
    setGender(event.target.value)
 }

 const onChangeUsername = (event) =>{
    setUsername(event.target.value)
 }

 const onChangePassword = (event)=>{
    setPassword(event.target.value)
 }

 const onChangeRePassword = (event) =>{
    setRePassword(event.target.value)
 }

 const onRegister = (event) =>{
    event.preventDefault()
    const newUser = {
        id: new Date().getTime().toString(),
        name: fullName,
        email: email,
        number:number,
        gender: gender,
        username:username,
        password:password,
    }
  
    setUserDetails([...userDetails,newUser])
    setFullName('')
    setEmail('')
    setGender(null)
    setNumber('')
    setPassword('')
    setRePassword('')
    setUsername('')
     
 }

 


    return(
        <div className="register-container">
        <img  alt="register" src={imageUrl} className="reg-image" />
        <div className="reg-container">
        <h1 className="reg-heading">Registration</h1>
        <form className="reg-form-container" onSubmit={onRegister} >
        <label htmlFor='fullname' className="reg-label mt-2">Full Name </label>
        <input value={fullName} type="text" id="fullname" className="form-control input" onChange={onChangeFullname}/>
        <label htmlFor='email' className="reg-label mt-2">Email </label>
        <input value={email} type="text" id="email" className="form-control input" onChange={onChangeEmail}/>
        <label htmlFor='phn' className="reg-label mt-2">Phone Number </label>
        <input value={number} type="text" id="phn" className="form-control input" onChange={onChangeNumber}/>
        <label className="reg-label mt-2">Gender </label>
        <div className="gender-container"> 
        <input type="radio" id="male" name="gender" value="male" onChange={onChangeGender} />
        <label htmlFor="male" className="reg-label">Male</label>
        <input type="radio" id="male" name="gender" value="female" onChange={onChangeGender}/>
        <label htmlFor="male" className="reg-label">Female</label>
        </div>
        <label  htmlFor='username' className="reg-label mt-2">Create Username </label>
        <input value={username} type="text" id="username" className="form-control input" onChange={onChangeUsername}/>
        <label htmlFor='password' className="reg-label mt-2">Enter Password </label>
        <input value={password} type="password" id="password" className="form-control input" onChange={onChangePassword}/>
        <label htmlFor='re-password' className="reg-label mt-2">Re-Enter Password </label>
        <input value={rePassword} type="re-password" id="re-password" className="form-control input" onChange={onChangeRePassword}/>
        <button type="submit" className="register-button mt-3">Register</button>
        </form>

        </div>
        </div>
    )
}

export default Register