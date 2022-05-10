import React,{useEffect, useState} from "react";
import firebase from "../../config/Firebase";
import {useParams} from "react-router-dom";
const Orders = () => {
  const [pesanbarang, setPesanBarang] = useState([]);
  const {uid} = useParams()
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
         
        
          console.log(pesanbarang)
        }
    });
  },[])
  return (
    <div className=" d-flex justify-content-center align-items-center flex-column">
     
<div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
            <th>Nama Barang</th>
            <th>Harga</th>
            </tr>
          </thead>
          <tbody>
            {pesanbarang.map((item) => (
            <tr className={"alert-success"}>
              <td>{item.namaBarang}</td>
              <td>{item.hargaBarang}</td>
              <td></td>
              </tr>
            ))}
           
    
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
