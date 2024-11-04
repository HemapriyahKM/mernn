import { FaRegBookmark, FaRegHeart, FaShoppingBag, FaUser, FaEllipsisV, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form"; 
import React, { useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from "./firebaseConfig"; 
import background from "./assets/images/background.jpg";
import Frontpage from "./Frontpage.jsx";

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [message, setMessage] = useState("");

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);
    try {
      const result = await signInWithPopup(auth, provider);
      const token = result.user.accessToken;
      console.log("Google User:", result.user);
    } catch (error) {
      console.error("Error with Google Sign-In:", error);
    }
  };

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        window.location.href = "/Frontpage"; 
        alert("Login successful!"); // Alert for successful login
      } else {
        alert(result.message); // Alert for login failure
      }
    } catch (error) {
      console.error("Error logging in:", error);
      alert("Something went wrong."); // Alert for general errors
    }
  };

  return (
    <>
    <body style={{backgroundImage: `url(${background})`,backgroundSize: 'cover',
      backgroundPosition: 'center', height:"570px"}}>
      <div className="trending-login" style={{
        backgroundColor: 'rgba(255, 255, 255, 0.8)',marginTop:"20px"}}>
        <div className="First-log">
          <p className="booktxt-log">
            <b style={{ fontSize: "20px", fontFamily: "cursive" }}>BOOKS</b>
          </p>
          <p className='User-log'><Link to="/login"><FaUser /></Link></p>
        </div>
        <p style={{ textAlign: "center", fontSize: "40px", fontFamily: "monospace", fontWeight: "bold" }}>Login Page</p>
        
        <form className="form-container" action="/login" method='post' onSubmit={handleSubmit(onSubmit)}>
          <div className='log-first' style={{ display: 'flex', flexDirection: 'column', marginLeft: "50px" }}>
            <label htmlFor="email" style={{ margin: "10px 0", fontFamily: "sans-serif", fontSize: "20px" }}>Email</label>
            <input
              {...register("email", { required: true })}
              type="email"
              id="email"
              placeholder='email@gmail.com'
              style={{ margin: "0px 10px 20px 0px", padding: "10px", width: "300px", borderRadius: "5px", border: "1px solid lightgrey" }}
              className='emailclass'
            />
            {errors.email && <span style={{ color: "red" }}>This field is required</span>}
          </div>

          <div className='log-first' style={{ display: 'flex', flexDirection: 'column', marginLeft: "50px" }}>
            <label htmlFor="password" style={{ margin: "10px 0", fontFamily: "sans-serif", fontSize: "20px" }}>Password</label>
            <input
              {...register("password", { required: true })}
              type="password"
              id="pass"
              placeholder='password'
              style={{ margin: "0px 10px 20px 0px", padding: "10px", width: "300px", borderRadius: "5px", border: "1px solid lightgrey" }}
              className='passclass'
            />
            {errors.password && <span style={{ color: "red" }}>This field is required</span>}
          </div>

          <button type="submit" style={{ padding: "10px 20px", backgroundColor: "grey", color: "white", border: "none", borderRadius: "5px", cursor: "pointer", justifyContent: "center", marginLeft: "170px" }}>Login</button>
        </form>

        <div style={{ display: "flex", marginLeft: "50px" }}>
          <p>Haven't an account? Please </p>
          <p style={{ color: "blue", marginLeft: "3px" }}> <Link to="/Register">Register</Link></p>
        </div>

        <div style={{ display: "flex", flexDirection: "row", gap: "10px", width: "200px", height: "50px", border: "2px solid black", borderRadius: "10px", margin: "auto", paddingLeft: "30px" }}>
          <p><FaGoogle/></p>
          <button onClick={handleGoogleSignIn} style={{ color: "black", backgroundColor: "rgba(255, 255, 255, 0.8)", outline:"none",border:"none",cursor:"pointer" }}> Sign in with Google</button>
        </div>
      </div>
      </body>
    </>
  );
}

export default Login;
