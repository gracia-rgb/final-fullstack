import React, { useEffect, useState } from "react";
import Head from "./../components/Head";
import firebase from "../config/Firebase";
import {Link, useParams, useHistory } from "react-router-dom";
const List = () => {
  window.scrollTo(0, 0);
  let history = useHistory();
  const [pesanbarang, setPesanBarang] = useState([])
  ;
  const [product, setProduct] = useState({})
  const [totalbayar, setTotalBayar] = useState(0)
  let totalKeseluruhan = totalbayar
  const {uid, productID} = useParams()
  useEffect(()=>{
    firebase.database().ref(`users/${uid}/datakeranjang`).on("value", (res) => {
      if(res.val()) {
          //ubah menjadi array
         const rawData = res.val();
          const pesanArr =[];
          Object.keys(rawData).map((item) => {
            pesanArr.push({
                id: item,
                ...rawData[item],
            });
          });
          setPesanBarang(pesanArr);
          let count = 0;
          for (let i = 0; i<pesanArr.length; i++) {
            count = +count + +pesanArr[i].total;
            setTotalBayar(count)
          }
          console.log(pesanbarang)
        }
    });
  },[])
  const onDeleteSt = (item) => {
    firebase.database().ref(`users/${uid}/datakeranjang/${item.id}`).remove()
    alert('Barang dihapus')
  }
  useEffect(() => {
    firebase
      .database()
      .ref(`users/${uid}/datakeranjang`)
      .on("value", (res) => {
        if (res.val()) {
          setProduct(res.val());
        }
        // setFirstName(SplitFullName(users.fullName));
      });
  }, []);
  const pesan = () => {    
    alert("Barang Berhasil Di Pesan")
    firebase
    .database()
    .ref(`users/${uid}/datakeranjang/totalkeseluruhan`)
    .push(totalKeseluruhan);
    history.push(`/${uid}/menu/shipping`)
  }
  return (
    <>
      <Head />

      <div className="container">
     
        <div>
        
          {pesanbarang.map((item) => (
           <div className="cart-iterm row">
         
           <div className="cart-image col-md-3" key={item.id}>
             <img src={item.gambar} alt={item.namaProduk}/>
           </div>
           <div className="cart-text col-md-5 d-flex align-items-center">
             <Link to={`/${uid}/${item.id}`}>
               <h4>{item.namaBarang}</h4>
               <h4>{item.total}</h4>
             </Link>
           </div>
         
             <div className="remove-button d-flex justify-content-center align-items-center">
             <i className="fas fa-times" onClick={() => onDeleteSt(item)}></i>
           </div>
           </div>
          ))}
          
        </div>
      
      
          
      
        <hr />
        <div className="total">
         <span className="sub">total:</span>
         <span className="total-price">Rp.{totalKeseluruhan}</span>
         </div>
         
        <div className="cart-buttons d-flex align-items-center row">
        
       
          <Link to={`/${uid}/home`}className="col-md-6 ">
            <button>Continue To Shopping</button>
          </Link>
          <div className="col-md-6 d-flex justify-content-md-end mt-3 mt-md-0">
            <button onClick={pesan}>
              
                pesan
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default List;
