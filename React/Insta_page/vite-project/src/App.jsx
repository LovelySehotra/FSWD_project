import { useState } from 'react';
import './App.css'

function App(){
  const [login,setlogin]=useState(true)
  const loginSwitch =()=>{
    setlogin(!login);
  }


  return(
    
      <div className="login-page">
         <div className="form">
           <div className="login">
             <div className="login-header">
               <h3>{login?"Log in":"Sign up"}</h3>
               <p>Please enter credentials to {login?"Log in":"Sign up"}</p>
             </div>
           </div>
           <form className="login-form">
           <input hidden={login} type="text"  id="name" placeholder="full name" />
           <input hidden={login} type="email" id="email" placeholder="email" />
             <input type="text" id="username" placeholder="username" />
             <input type="password" id="password" placeholder="password" />
             <button id="submit">{login?"Log in":"Sign up"}</button>
             <div id='footer'>
            {login?"Don't have account?":"Already account?"} <span onClick={loginSwitch}>{login?"Sign up":"Log in"}</span>
          </div>
           </form>
         </div>
       </div>
     
  )
}
export default App;