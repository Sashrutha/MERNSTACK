import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';


const About = () => {
    const navigate = useNavigate();
        const [user,setUser] = useState({
         age:"",gender:"",dob:"",mobile:""
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
         const {age,gender,dob,mobile}=user;
         const res= await fetch("/about",{
             method: "POST",
             headers:{
                 "Content-Type" : "application/json"    
                 },
                 body:JSON.stringify({
                     age:age,gender:gender,dob:dob,mobile:mobile
                 })
                 });

                 const data = await res.json();

            if(data.status === 422 || !data) {
                window.alert("Invalid");
                console.log("Invalid");
            }else{
                window.alert("Update Successful");
                console.log("Update Successful");

                
            } 
}

     return (
        <>
       <section className="profile">
        <div className="profile-content">
            <form method="GET" className="profile-form" id="profile-form">
                  <div className="form-group">
                      <label htmlFor="age" className="form__label" >Age </label>
                      <input type="number" name="age" autoComplete="off"
                      value ={user.age}
                      onChange={handleInputs}
                       placeholder="Age" />
                  </div>
                  
                  <div className="form-group">
                      <label htmlFor="gender" className="form__label" >Gender</label>
                      <input  type="text" name="gender" autoComplete="off"
                      value ={user.gender}
                      onChange={handleInputs}
                     placeholder="Gender" />
                  </div>
    
                  <div className="form-group">
                      <label htmlFor="dob" className="form__label" >Date Of Birth </label>
                      <input type="date" name="dob" autoComplete="off"
                      value ={user.dob}
                      onChange={handleInputs}
                       placeholder="DOB" />
                  </div>
                  <div className="form-group">
                      <label htmlFor="mobile" className="form__label" >Mobile</label>
                      <input type="number" name="mobile" autoComplete="off"
                      value ={user.mobile}
                      onChange={handleInputs}
                      placeholder="Mobile"/>
                  </div>
             
              <div className="form-group form-button">
                  <input type="submit" name="Update" id="Update" 
                  className="form-submit"
                  value="Update"
                  onClick={PostData}
                  
                  />
                  </div>
                  </form>
                  </div>
              
           </section>
              </>
        )       
    }

export default About





