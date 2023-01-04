import React,{useEffect,useState} from 'react';
import { useNavigate } from 'react-router-dom';


const Profile = () => {
    const navigate = useNavigate();
    const [userData,setUserData] = useState({});

const callAboutPage = async() =>
{
    try{
        const res =  await fetch('/profile',{
            method:"GET",
            headers:{
                Accept:"application/json",
                "Content-Type" : "application/json"
            },
            credentials:"include"
        });

        const data = await res.json();
         console.log(data);
         setUserData(data);

         if(!res.status === 200){
            const error = new Error(res.error);
            throw error;
         }

    }catch (err){
        console.log(err);
        
    }
}
 useEffect(() =>
 {
    callAboutPage();
 }, []);


 const PostData = () =>
 {
    navigate('/about');
 }
 
return (
        <>
        <div className="container emp-profile">
            <form method="GET">
            <h5>Profile Details</h5>

                <div className="row">
                    <div className="col-md-6">
                
                <label> Name </label>
                </div>
                <div className="col-md-6">
                    <p>{userData.name}</p>
                </div>
                </div>  


                <div className="row">
                    <div className="col-md-6">
                <label> Email </label>
                </div>
                <div className="col-md-6">
                    <p>{userData.email}</p>
                </div>
                </div> 
                

                <div className="col-md-2">
                    <input type="submit" name="btn" value="Edit Profile"
                    onClick = {PostData} />
                </div>
            </form>
        </div>
        
        
        </>
    )
    
}

export default Profile