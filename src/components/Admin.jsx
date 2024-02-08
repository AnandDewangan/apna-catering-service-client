import React, { useEffect, useState } from "react"; 
import { useNavigate } from 'react-router-dom';

export default function Admin() { 
    const [client, setClient] = useState([]);
    const navigate = useNavigate();

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    await fetch("https://apna-catering-service-server.vercel.app/clients")
    .then((res)=>res.json())
    .then((data) => setClient(data));
  };

  const logout =()=>{
    localStorage.clear();
    navigate("/login");
  }

  return (
    <div className="container">
      <h2 className="text text-secondary my-3">Client Details</h2>
      <div className="">
        {client.map((item, i)=>{
            return(
                <div className="row">
                    <p className="col-1">{i+1}</p>
                    <p className="col">{item.name}</p>
                    <p className="col">{item.contact}</p>
                    <p className="col">{item.sub}</p>
                    <p className="col">{item.address}</p>
                </div>
            )
        })}
      </div><br />
      <button class="btn btn-warning" onClick={logout}>Log-Out</button>
    </div>
  )
}
