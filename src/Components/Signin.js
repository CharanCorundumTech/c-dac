import React from 'react'
import './Signin.css'
// import asset1 from '../Assets/Asset13ldpi.png'
// import asset2 from '../Assets/Asset14ldpi.png'
// import asset4 from '../Assets/block.svg'
import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { signIn } from '../Service/authService'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import eaglelogo from '../Assets/signin_img.jpeg'
import topright from '../Assets/Asset 1.png'
import bottomleft from '../Assets/Asset 2.png'
import axios from 'axios'
const Signin = () => {
    const [userName,setUserName]= useState('');
    const [email,setEmail]= useState('');
    const [password,setPassword]= useState('');
    const [loginError, setLoginError] = useState(false);
    const [visible,setVisible]=useState(false);
    const [toggleLoginLoader,setToggleLoginLoader]=useState(false);
    const email_ref=useRef('')
    const showpassword = useRef('')
    const email_is=email_ref.current.value
    const password_is=showpassword.current.value
    // console.log(password_is)
    // console.log(email_is)

    const showToast = (message) => {
            toast.error(message, {
                position: toast.POSITION.BOTTOM_CENTER,
                autoClose: 2000,
              });
      };


    const toogleShowPassword = ()=>{
        setVisible(!visible)
        showpassword.current.type= visible ? 'password':'text';
        
    }
      
    const navigate = useNavigate();
    const loginAction = async () => {
      if (email_is === '' || password_is === '') {
        showToast('Please fill in all fields');
      } else {
        try {
          setLoginError(false);
          setToggleLoginLoader(true);
          const payload={
            "username":email_is,
            "password":password_is
          }
          console.log(password_is)
    console.log(email_is)
          const response = await axios.post('http://13.233.150.43:5000/login', payload);
          const responseData = response.data;
          console.log("response=====",responseData)
          const userToken = responseData.token;
          console.log(userToken)
          try {
            localStorage.setItem('token', responseData.token);
            localStorage.setItem('role', responseData.role);
            localStorage.setItem('username', responseData.username);
         } catch (error) {
            console.error("LocalStorage Error:", error);
         }
          const userRole = responseData.role; 
          console.log(response.data)
          // Redirect based on userrole
          if (userRole === 'user') {
            navigate('/dashboard');
          } else if (userRole === 'reviewingManager') {
            navigate('/dashboard');
          }else if (userRole === 'reportingManager') {
            navigate('/dashboard');
          }else if (userRole === 'approvingManager') {
            navigate('/dashboard');
          } else {
            showToast('Invalid user role');
          }
        } catch (error) {
          setLoginError(true);
          showToast('Wrong email or password');
        } finally {
          setToggleLoginLoader(false);
        }
      }
    };
      
    return (
  
    <>
    
    <div style={{position: "relative",height:"100vh",width:"100%",backgroundColor:"white",display:"flex",flexDirection:"column",justifyContent:"",alignItems:""}}>

    <div style={{position: "absolute",zIndex: "",backgroundColor:"",height:"100vh",width:"100%",display:"flex",gap:"20px",justifyContent:"center",alignItems:"center"}}>

      <div style={{ backgroundColor:"", marginLeft:""}}>
        <h4 style={{color:"#020645",fontWeight:"700"}}>Social Media Monitoring</h4>
      <img className='app-logo' style={{ }} height="400px" width="700px" src={eaglelogo} alt='leftside_pic'></img>
      </div>
    
    <div style={{width: '493px',height:"70%",padding:"0px",display:"flex",flexDirection:"column",justifyContent:"center", background: 'white', boxShadosw: '0px 3px 3px rgba(0, 0, 0, 0.25)', borderRadius:"22px", borsder: '1px #BCBCBC solid'}} >
    <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginRight:"50px",backgroundColor:""}}><h2 className='login_h2 input-tags'>Login </h2> 
    {/* <h4 id='signup' onClick={()=>{navigate('/signup')}}><b>Sign up</b></h4> */}
    </div>
    <div style={{display:"flex",flexDirection:"column",gap:"30px",marginTop:"10px"}}>

                <div className='input-tags'>
                  <label className='emaail_label'>Email :</label>
                  <input ref={email_ref} style={{borderRadius:"10px",border:"1px solid grey"}} type='email' onChange={(e) => setEmail(e.target.value)} placeholder='john.doe@gmail.com'></input>
                </div>
                {/* <div className='input-tags'>
                  <label className='emaail_labdel'>User Name :</label>
                  <input style={{borderRadius:"10px",border:"1px solid grey"}} type='text' onChange={(e) => setUserName(e.target.value)} placeholder='username'></input>
                </div>
                <div className='input-tags'>
                  <label className='emaail_label'>Role :</label>
                  <input style={{borderRadius:"10px",border:"1px solid grey"}} type='text' onChange={(e) => setUserName(e.target.value)} placeholder='role'></input>
                </div> */}
                <div className='input-tags'>
                  <label className='emaail_label'>Password :</label>
                  <div style={{ position: 'relative', width: '100%' }}>
                    <input style={{borderRadius:"10px",border:"1px solid grey"}} ref={showpassword} type='password' onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password'></input>
                    <div onClick={toogleShowPassword} style={{ display: 'flex', position: 'absolute', bottom: 0, right: 0, marginBottom: '10px', marginRight: '8px' }} className='showpass-icon-contianer'>
                      {visible ? <VisibilityIcon /> : <VisibilityOffIcon />}
                    </div>
                  </div>
                  <h6 id='forgotpss'  onClick={()=>{navigate('forgot_pwd')}}>forgot password?</h6>

                </div>
                
               

              </div>
              <button onClick={loginAction} style={{marginLeft:"2.5rem",marginTop:"2.5rem",border:"none"}} className='login-btn' disabled={toggleLoginLoader}>
                {toggleLoginLoader ? (
                  <div className='loader'></div> // Add your loader component or styling here
                ) : (
                  <strong>LOG IN</strong>
                )}
              </button>
    </div>
    </div>
    {/* <img  height="520rem" width="550rem" src={bottomleft} alt='leftside_pic'></img>  */}

    </div>
    </>
    )
}

export default Signin