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
    <div className="container mt-5">
      <h2 className="text text-secondary my-3">Client Details</h2>
      <div class="table-responsive">
    <table class="table table-bordered table-striped">
      <thead>
        <tr>
          <th>S.No</th>
          <th>Name</th>
          <th>Contact</th>
          <th>Subscription</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        {client.map((item, i)=>{
            return(
              <tr>
                <td>{i+1}</td>
                <td>{item.name}</td>
                <td>{item.contact}</td>
                <td>{item.sub}</td>
                <td>{item.address}</td>
              </tr>
            )
        })}
        </tbody>
        </table>
      </div><br />
      <button class="btn btn-warning" onClick={logout}>Log-Out</button>
    </div>
  )
}
