import React from "react";
import "../Css/index.css"
import { Link } from "react-router-dom";
function Login(){
return <div className="total"><form className="parent">Login
    <input placeholder="Username" className="child1"></input>
    <input placeholder="Password" className="child1"></input>
    <button className="btn">Sumbit</button>
    <Link to={"/Register"} className="reg">Register</Link>
</form></div>
}

export default Login;