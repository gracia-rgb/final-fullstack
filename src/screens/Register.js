import React, { useState }  from "react";
import { Link } from "react-router-dom";
import Headerr from "./../components/Headerr";
import firebase from "../config/Firebase"

const Register = () => {
  window.scrollTo(0, 0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {
    const data = {
      email: email,
    }
    firebase.auth().createUserWithEmailAndPassword(email,password)
    .then((userCredential) => {
      //simpan ke realtime database
      const userId = userCredential.user.uid;
      firebase.database().ref('users/' + userId).set(data);
     setEmail('')
    setPassword('')
      // redirect ke halaman dashboard
   
    alert('Akun berhasil dibuat')
    })
    .catch((error) => {
      console.log(error)
  //tampilkan pesan error
    });
  
    };


  return (
    <>
      <Headerr />
      <div className="container d-flex flex-column justify-content-center align-items-center login-center">
        <div className="Login col-md-8 col-lg-4 col-11">
          <input 
          type="email" 
          placeholder="Email"     
          value={email}
          onChange={(e) => setEmail(e.target.value)}
      />
          <input 
          type="password" 
          placeholder="Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit"  onClick={onSubmit}>Daftar</button>
          <p>
            <Link to={"/login"}>
              Punya Akun<strong>Login</strong>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
