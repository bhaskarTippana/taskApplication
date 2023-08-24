import React from "react";
import "../Css/index1.css";
import { Link } from "react-router-dom";
function Register(){
return <div className="tata"> <form className="parentt">Register
<div className="con">
<input placeholder="Username" className="child"></input>
<input placeholder="Mobile-Number" className="child" type="number" maxLength={10} minLength={10}></input>
<input placeholder="Email" className="child" type="email"></input>
<input placeholder="Password" className="child" type="password" maxLength={8} minLength={8}></input>
<input placeholder="Confirm-Password" className="child" type="password" maxLength={8} minLength={8}></input>
</div>
<button className="btn1">Sumbit</button>
<Link to={"/"} className="reg">Login</Link>
</form></div>
}

export default Register;