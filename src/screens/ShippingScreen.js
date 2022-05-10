import React, { useState } from "react";
import Headerr from "../components/Headerr";

import {useParams, useHistory } from "react-router-dom";
import firebase from "../config/Firebase";
const ShippingScreen = () => {

  window.scrollTo(0, 0);
  let history = useHistory();
  const {uid, productID} = useParams()
  const [alamat, setAlamat] = useState("")
  const [kota, setKota] = useState("")
  const [kodepos, setKodePos] = useState("")
  const [provinsi, setProvinsi] = useState("")
  const pesan = () =>{
    const data = {
      alamat: alamat,
      kota: kota ,
      kodepos: kodepos,
      provinsi: provinsi,
    };

    firebase.database().ref(`users/${uid}/datausers`).update(data);
    alert("Data User Berhasil di Update")
    history.push(`/${uid}/home`)
  }
  console.log(uid)
  return (
    <>
      <Headerr />
      <div className="container d-flex justify-content-center align-items-center login-center">
        <form
          className="Login col-md-8 col-lg-4 col-11"
         >
          <h6>DELIVERY ADDRESS</h6>
          <input placeholder="Masukan Alamat Rumah" value={alamat} onChange={(e) => setAlamat(e.target.value)}/>
          <input  placeholder="Masukan Kota" value={kota} onChange={(e) => setKota(e.target.value)}/>
          <input  placeholder="Masukan Kode Pos" value={kodepos} onChange={(e) => setKodePos(e.target.value)}/>
          <input  placeholder="Masukan Provinsi" value={provinsi} onChange={(e) => setProvinsi(e.target.value)} />
          <button onClick={pesan}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default ShippingScreen;
