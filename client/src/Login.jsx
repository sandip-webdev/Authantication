import { useState } from "react";

import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

function Login(){
  
   const [email,setEmail]=useState()
  const [password,setPassword]=useState()
  const navigate = useNavigate()

  const handleSubmit =(e)=>{
    e.preventDefault()
     axios.post('http://localhost:5000/login',{email,password})

.then(result => {
  console.log(result);

  if (result.data === "success") {
    setTimeout(() => {
      navigate('/Home');
    }, 3000); 
  }
});
      
  }

  return(

   <div  className="signup-container">
      
        
            <form  onSubmit={ handleSubmit} style={{maxWidth:"70vh"}} className="right-section">
          <h2 >Log in </h2>
    
          <input type="email" placeholder="email"onChange={(e)=> setEmail(e.target.value)} />
          <input type="password" placeholder=" Password"onChange={(e)=> setPassword(e.target.value)} />
          
  <ToastContainer/>
          <button type="Submit" onClick= {()=>{toast("Your Log In Successfully",{
              position:"top-center",theme:"dark",type:"success",autoClose:3000,
            })}} className="signup-btn" >Log In</button>
  <p style={{marginLeft:"230px", color:"blue"}}>Forget password</p>
          <div className="or">or</div>
  
          <div className="social-btns">
            <button className="google"><svg aria-label="Google logo" width="30" height="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
    Google</button>
            <button className="facebook"> <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
  <path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path><path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"></path>
  </svg>
  Facebook</button>
          </div>
  
          <p className="login-text">
            Already have an account? <Link to="/"><span>Sing Up</span></Link>
            
          </p>
        
  
        </form>
        <div style={{maxWidth:"80vh",}}className="left-section">
          <div className="quote-box">
            <p className="quote">
              The only way to <span>do great work</span> is to <br />
              <span>love what you do.</span>
            </p>
            <p className="author">– Steve Jobs</p>
          
          </div>
          
        </div>
  
        
        </div>
        
    
    );
  };
  

export default Login;