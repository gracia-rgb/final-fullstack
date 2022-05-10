import React, {useState}from 'react'
import Headadmin from '../components/Headadmin';

import firebase from "../config/Firebase"
const Admin = () => {
    const [namaProduk, setNamaProduk] = useState("");
    const [harga, setHarga] = useState("");
    const [jumlah, setJumlah] = useState("");
    const [deskripsi, setDeskripsi] = useState("");
    const [gambar, setGambar] = useState("");
  
    const uploadImage = async (e) => {
      const file = e.target.files[0];
      const base64 = await convertBase64(file);
      console.log(base64);
      setGambar(base64);
    };
  
    const convertBase64 = (file) => {
      return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
  
        fileReader.onload = () => {
          resolve(fileReader.result);
        };
  
        fileReader.onerror = (error) => {
          reject(error);
        };
      });
    };
    const handleSubmit = () => {
      if (!namaProduk || !harga || !deskripsi || !gambar) {
        alert('tidak boleh kosong')
      } else {
        const data = {
          namaProduk: namaProduk,
          biaya: harga,
          deskripsi: deskripsi,
          gambar: gambar,
        };
  
        firebase.database().ref(`/barang`).push(data);
  
      alert('berhasil')
        setNamaProduk("");
        setHarga("");
        setJumlah("");
        setDeskripsi("");
        setGambar("");
      }
    };
    return (
      <div>
        <Headadmin />
      <div className="container d-flex flex-column justify-content-center align-items-center login-center">
         
           <form className="Login col-md-8 col-lg-4 col-11">
           <h4 class="text-right">Masukkan Data Barang</h4>
               
                <input
                  className="form-control"
                  label="Nama Produk"
                  placeholder="Masukkan Nama Produk"
                  value={namaProduk}
                  onChange={(event) => setNamaProduk(event.target.value)}
                />
                <input
                  className="form-control"
                  label="Biaya"
                  placeholder="Masukkan Harga Produk"
                  value={harga}
                  onChange={(event) => setHarga(event.target.value)}
                />
  
                <input
                  className="form-control"
                  label="Deskripsi"
                  placeholder="Masukkan Deskripsi Barang"
                  value={deskripsi}
                  onChange={(event) => setDeskripsi(event.target.value)}
                />
                <br />
                <h5>Pilih Foto Produk</h5>
                <input
                  type="file"
                  onChange={(e) => {
                    uploadImage(e);
                  }}
                />
                <br />
                <br />
                <button
                  onClick={handleSubmit}
                >Unggah</button>
                </form>
              </div>
            </div>
        
    );
  };
  
  export default Admin;