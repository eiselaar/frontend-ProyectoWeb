import React, {useState, useEffect} from "react";
import{useNavigate,useParams} from "react-router"
import axios from "axios";
import "./login.scss";
function Logicalogin(correo,cont,navigate){ 
    let Tokuser ="";
        if(!correo || !cont){ 
        if(!correo && cont){
            alert("Llenar campos");           
        }if(!cont && correo){
            alert("Llenar campos"); 
        }if(!correo && !cont){
            alert("Llenar campos"); 
        } 

    }else{
        axios.post('http://localhost:5000/session',{  
            email: correo,
            password: cont      
        },{
            headers: {
            'Content-Type': 'application/json'
             }  
        }).then(function (res) {
            console.log(res);
            if(!res.data.data){
                console.log("papitas");
                alert("error");
            }
            if(res.data.data){
                Tokuser=res.data.data;
               localStorage.setItem('Token',JSON.stringify(Tokuser)); 
               navigate("/home");         
            };
            
          })
          
    };
    
}


function Login(){
    const navigate=useNavigate();
	
    let [correo,setCorreo]=useState('');
    let [cont,setContra]=useState('');  
    return(
        <div className="background">
            <div className="cover">
                <h1>OpenAI</h1>
                    <input className="email" type="text" placeholder="Email" onChange={ev=>setCorreo(ev.target.value)} required/>
                    <input className="contra" type="password" placeholder="Contraseña" onChange={ev=>setContra(ev.target.value)} required/>
                    <div className="login-btn"  type="submit" value="Login" onClick={()=>Logicalogin(correo,cont,navigate)}>Login</div>
                    <div className="cancel-btn"  type="submit" value="Cancel">Cancel</div> 
                    {/*<input type="submit" value="Login" onClick={()=>Logicalogin(correo,contra,navigate)}/>*/}
                    <div className="alt-login">                        
                        <div className="">If you don't have an account? <a href="/register">Singup here</a></div>
                    </div>
                </div>          
        </div>
    );
}
export default Login;