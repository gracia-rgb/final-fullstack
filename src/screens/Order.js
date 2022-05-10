import React, { useEffect, useState } from "react";
import firebase from "../config/Firebase";
import {Link, useParams, useHistory } from "react-router-dom";
import Headadmin from "../components/Headadmin";
const Order = () => {
  window.scrollTo(0, 0);
  const [pesanbarang, setPesanBarang] = useState([])
  
  let history = useHistory();
  const {uid} = useParams()
  useEffect(()=>{
    firebase.database().ref(`datapesanan`).on("value", (res) => {
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
          console.log(pesanbarang)
          console.log(1)
        }
    });
  },[])
  const onDeleteSt = (item) => {
    firebase.database().ref(`datapesanan/${item.id}`).remove()
    alert('Sudah Diantar')
  }
  const onpemesan = (id) => {
    
    history.push(`users/prof/${id}`)
    console.log(id)
  }
  
  return (
    <>
      <Headadmin />
      {/* Cart */}
      <div className="container">
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
            <th>Nama Barang</th>
            <th>Harga</th>
            <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {pesanbarang.map((item) => (
            <tr className={"alert-success"}>
              <td>{item.namaBarang}</td>
              <td>{item.hargaBarang}</td>
              <td>
                <div>
                <button className="hapus" onClick={() => onDeleteSt(item)}>Selesai</button>
                </div>
              </td>
              </tr>
            ))}
           
    
          </tbody>
        </table>
      </div>
      </div>
    </>
  );
};

export default Order;
