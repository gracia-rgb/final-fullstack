import React, { useState,useEffect } from "react";
import Header from "./../components/Header";
import {useParams } from "react-router-dom";
import products from "../data/Products";
import firebase from "../config/Firebase";
const SingleProduct = () => {

  const {uid, productID} = useParams()
  console.log(uid,productID)
  const [jumlah, setJumlah] = useState("");
  const [biaya, setBiaya] = useState("")
  const [product, setProduct] = useState({});
  const [users, setUsers] = useState({});
  
  useEffect(() => {
    firebase
      .database()
      .ref(`/barang/${productID}`)
      .on("value", (res) => {
        if (res.val()) {
          setProduct(res.val());
          setBiaya(res.val().biaya);
        }
        // setFirstName(SplitFullName(users.fullName));
      });
  }, []);
  useEffect(() => {
    firebase
      .database()
      .ref(`users/${uid}`)
      .on("value", (res) => {
        if (res.val()) {
          setUsers(res.val());
        }
        console.log("users", users);
      });
  }, []);

  const updateBarang= () => {
    
    if (jumlah != 0) {
    const total = product.biaya * jumlah
      const dataKeranjang = {
        namaBarang: product.namaProduk,
        hargaBarang: product.biaya,
        jumlahProduk: jumlah,
        total : total,
        gambar : product.gambar,
      }; 
     
      firebase
        .database()
        .ref(`users/${uid}/datakeranjang`)
        .push(dataKeranjang);
        firebase
        .database()
        .ref(`datapesanan`)
        .push(dataKeranjang);
    alert("Barang Berhasil Di Tambahkan Ke Keranjang")
    }else {

    
      alert("Pilih Barang Yang Ingin Di Tambahkan Ke Keranjang")
    }
   setJumlah('')
  };
  return (
    <>
      <Header />
      <div className="container single-product">
        <div className="row">
          <div className="col-md-6">
            <div className="single-image">
              <img src={product.gambar} alt={product.namaProduk} />
            </div>
          </div>
          <div className="col-md-6">
            <div className="product-dtl">
              <div className="product-info">
                <div className="product-name">{product.namaProduk}</div>
              </div>
              <p>{product.deskripsi}</p>

              <div className="product-count col-lg-7 ">
                <div className="flex-box d-flex justify-content-between align-items-center">
                  <h6>Price</h6>
                  <span>Rp.{product.biaya}</span>
                
               
                </div>
                <br></br>
                <input placeholder="Ketik Jumlah Barang" value={jumlah} onChange={(e) => setJumlah(e.target.value)} />
                <button className="round-black-btn" onClick={updateBarang}>Tambah Ke keranjang</button>
                    
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </>
  );
};

export default SingleProduct;
