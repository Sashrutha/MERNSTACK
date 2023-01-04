import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () =>{


    const navigate = useNavigate('');
  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  const loginUser = async (e) =>{
    e.preventDefault();

    const res = await fetch('/signin',{
        method:"POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body:JSON.stringify({
            email,
            password
        })
    });

    const data = res.json();
  if (res.status === 400 || !data){
    window.alert("Invalid Credentials");
  }else{
    window.alert("Login Successfull");
    navigate("/about");
  }

  }

  return (
    <>
   <section className="signup">
    <div className="signup-content">
        <form method="POST" className="register-form" id="register-form">
              <div className="form-group">
              <label htmlFor="email" className="form__label" >Email </label>
                  <input  type="email" name="email" autoComplete="off"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"/>
              </div>
              <div className="form-group">
                  <label htmlFor="password" className="form__label" >Password </label>
                  <input type="password" name="password" autoComplete="off"
                   value={password}
                   onChange={(e) => setPassword(e.target.value)}
                   placeholder="Password"/>
              </div>
    
    <div className="form-group form-button">
              <input type="submit" name="Login" id="login" className="form-submit"
              value="Login"
              onClick={loginUser}
              />
          </div>
          </form>
      </div>  
      </section>
      </>
  )
}

export default Login