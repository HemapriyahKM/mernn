import { FaRegBookmark, FaRegHeart, FaShoppingBag, FaUser, FaEllipsisV, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form"; 
import React, { useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from "./firebaseConfig"; 
import background from "./assets/images/background.jpg";
function Register() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const [message, setMessage] = useState('');
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("Google User:", result.user);
    } catch (error) {
      console.error("Error with Google Sign-In:", error);
      alert("Error with Google Sign-In: " + error.message); // Show Google Sign-In error
    }
  };

  const onSubmit = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.username, // Change username to name
          email: formData.email,
          password: formData.password,
        }),
      });
      
      if (!response.ok) {
        const errorText = await response.text(); // Capture error message from server
        throw new Error(errorText || 'Server returned an error');
      }
      
      const data = await response.json();
      console.log("Registration successful:", data);
      alert("Registration successful!");
      setMessage("Registration successful!"); // Optional success message
    } catch (err) {
      console.error("Error registering:", err.message || err);
      alert(`Registration failed: ${err.message}`);
      setMessage(`Registration failed: ${err.message}`);
    }
  };
   

  return (
    <body style={{backgroundImage: `url(${background})`,backgroundSize: 'cover',
      backgroundPosition: 'center', height:"654px"}}>
    <div className="trending-register" style={{
        backgroundColor: 'rgba(255, 255, 255, 0.8)',marginTop:"20px"}}>
      <div className="First-log">
        <p className="booktxt-log">
          <b style={{ fontSize: "20px", fontFamily: "cursive" }}>BOOKS</b>
        </p>
        <p className='User-log'><Link to="/login"><FaUser /></Link></p>
      </div>
      <p style={{ textAlign: "center", fontSize: "40px", fontFamily: "monospace", fontWeight: "bold" }}>Register Page</p>
      
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='log-first' style={{ display: 'flex', flexDirection: 'column', marginLeft: "50px" }}>
          <label htmlFor="name" style={{ margin: "10px 0", fontFamily: "sans-serif", fontSize: "20px" }}>Name</label>
          <input
            {...register("username", { required: "Username is required" })}
            type="text"
            id="name"
            name="username"
            placeholder='Type your name'
            value={formData.username}
            onChange={handleChange}
            style={{ margin: "0px 10px 20px 0px", padding: "10px", width: "300px", borderRadius: "5px", border: "1px solid lightgrey" }}
            className='nameclass'
          />
          {errors.username && <span style={{ color: "red" }}>{errors.username.message}</span>}
        </div>
        <div className='log-first' style={{ display: 'flex', flexDirection: 'column', marginLeft: "50px" }}>
          <label htmlFor="email" style={{ margin: "10px 0", fontFamily: "sans-serif", fontSize: "20px" }}>Email</label>
          <input
            {...register("email", { required: "Email is required" })}
            type="email"
            id="email"
            name="email"
            placeholder='email@gmail.com'
            value={formData.email}
            onChange={handleChange}
            style={{ margin: "0px 10px 20px 0px", padding: "10px", width: "300px", borderRadius: "5px", border: "1px solid lightgrey" }}
            className='emailclass'
          />
          {errors.email && <span style={{ color: "red" }}>{errors.email.message}</span>}
        </div>

        <div className='log-first' style={{ display: 'flex', flexDirection: 'column', marginLeft: "50px" }}>
          <label htmlFor="password" style={{ margin: "10px 0", fontFamily: "sans-serif", fontSize: "20px" }}>Password</label>
          <input
            {...register("password", { required: "Password is required" })}
            type="password"
            id="pass"
            name="password"
            placeholder='password'
            value={formData.password}
            onChange={handleChange}
            style={{ margin: "0px 10px 20px 0px", padding: "10px", width: "300px", borderRadius: "5px", border: "1px solid lightgrey" }}
            className='passclass'
          />
          {errors.password && <span style={{ color: "red" }}>{errors.password.message}</span>}
        </div>

        <button type="submit" style={{ padding: "10px 20px", backgroundColor: "grey", color: "white", border: "none", borderRadius: "5px", cursor: "pointer", justifyContent: "center", marginLeft: "170px" }}>Register</button>
      </form>

      <div style={{ display: "flex", marginLeft: "50px" }}>
        <p>Have an account? Please </p>
        <p style={{ color: "blue", marginLeft: "3px" }}> <Link to="/Login">Login</Link></p>
      </div>

      <div style={{ display: "flex", flexDirection: "row", gap: "10px", width: "200px", height: "50px", border: "2px solid black", borderRadius: "10px", margin: "auto", paddingLeft: "30px" }}>
        <p><FaGoogle/></p>
        <button onClick={handleGoogleSignIn} style={{ color: "black", backgroundColor: 'rgba(255, 255, 255, 0.8)', outline:"none", border:"none", cursor:"pointer" }}> Sign in with Google</button>
      </div>
    </div>
    </body>
  );
}

export default Register;
