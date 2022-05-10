import React, {useState} from "react";
import { Link, useHistory } from "react-router-dom";
import Headerr from "./../components/Headerr";
import firebase from "../config/Firebase"
const Login = () => {
  window.scrollTo(0, 0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();
 const handleClick = () =>{
  const data = {
    email: email,
  };
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then((res) => {
    const data = {
      email: email,
    };
    firebase.auth().signInWithEmailAndPassword(email, password).then((res) =>{
      const uid = res.user.uid;
      console.log(uid);
      history.push(`/${uid}/home`)
   
    })
  })
   
  .catch((error) =>{
      alert(error)
     
      });
 }
  return (
    <>
      <Headerr />
      <div className="container d-flex flex-column justify-content-center align-items-center login-center">
        <form className="Login col-md-8 col-lg-4 col-11">
          <input 
          type="email"
           placeholder="Email"
           value={email}
           onChange={(e) => setEmail(e.target.value)}
         />
          <input
           type="password" 
           placeholder="Kata Sandi" 
           value={password}
           onChange={(e) => setPassword(e.target.value)} 
          />
          <button type="button"  onClick={handleClick}>Login</button>
          <p>
            <Link to={"/register"}>Buat Akun</Link>
          </p>
         <p> <Link to={"/loginadmin"}>Pilihan Menu Admin</Link>
         </p>
        </form>
      </div>
    </>
  );
};

export default Login;
