import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 
    const [data, setData] = useState("");
    const navigate = useNavigate();

    useEffect(()=>{
        fetchdata();
    }, []);

    const fetchdata =async()=>{
        await fetch('https://apna-catering-service-server.vercel.app/login')
        .then((res)=>res.json()) 
        .then((d)=>setData(d));
    }
    
    const login =()=>{
        const user = data[0].email;
        const pass = data[0].password;

        if(email===user && password===pass){
            localStorage.setItem('email', user);
            localStorage.setItem('password', pass);
            navigate('/admin');
        }else{
            alert("You are not authorized!!");
            setEmail('');
            setPassword('');
        } 
    }
  return (
    <div className="container mt-5">
        <h2 className='text text-secondary my-3'>Login Page</h2>
        <div>
        <input type="text" className="form-control" placeholder="Your Email" onChange={(e)=>setEmail(e.target.value)} value={email}/>
        <input type="password" className="form-control" placeholder="Your Password" onChange={(e)=>setPassword(e.target.value)} value={password}/>
        </div>
        <button className="btn btn-warning my-3" onClick={login}>Login Up</button>
    </div>
  )
}
