
import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () =>{
   const navigate = useNavigate();
   const [user,setUser] = useState({
    name:"",email:"",password:"",cpassword:""
   });

   let name,value;

const handleInputs = (e) =>
{
    console.log(e);
    name=e.target.name;
    value=e.target.value;

    setUser({...user,[name]:value});

}

const PostData = async (e) =>
{
    e.preventDefault();
    const {name,email,password,cpassword}=user;
    if(!name || !email || !password ||!cpassword){
        window.alert("Invalid Registration");
                console.log("Invalid Registration");
    }
    const res= await fetch("/register",{
        method: "POST",
        headers:{
            "Content-Type" : "application/json"    
            },
            body:JSON.stringify({
                name:name,email:email,password,cpassword
            })
            });
            console.log("user= " ,user);
            const data =  res;
            console.log("data = " ,data);

            if(data.status === 422 || !data) {
                window.alert("Invalid Registration");
                console.log("Invalid Registration");
            }else{
                window.alert("Registration Successful");
                console.log("Registration Successful");

                navigate("/signin");
            } 
}




  return (
    <>
   <section className="signup">
    <div className="signup-content">
        <form method="POST" className="register-form" id="register-form">
              <div className="form-group">
                  <label htmlFor="name" className="form__label" >Name </label>
                  <input type="text" name="name" autoComplete="off"
                  value ={user.name}
                  onChange={handleInputs}
                   placeholder="Name" />
              </div>
              
              <div className="form-group">
                  <label htmlFor="email" className="form__label" >Email </label>
                  <input  type="email" name="email" autoComplete="off"
                  value ={user.email}
                  onChange={handleInputs}
                 placeholder="Email" />
              </div>

              <div className="form-group">
                  <label htmlFor="password" className="form__label" >Password </label>
                  <input type="password" name="password" autoComplete="off"
                  value ={user.password}
                  onChange={handleInputs}
                   placeholder="Password" />
              </div>
              <div className="form-group">
                  <label htmlFor="cpassword" className="form__label" >Confirm Password </label>
                  <input type="password" name="cpassword" autoComplete="off"
                  value ={user.cpassword}
                  onChange={handleInputs}
                  placeholder="Confirm Password"/>
              </div>
         
          <div className="form-group form-button">
              <input type="submit" name="Signup" id="signup" 
              className="form-submit"
              value="Register"
              onClick={PostData}
              />
              </div>
              </form>
              </div>
          
       </section>
          </>
    )       
}

export default Signup