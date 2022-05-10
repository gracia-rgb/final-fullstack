import React, { useEffect,useState } from "react";
import { Link,useParams } from "react-router-dom";
import firebase from '../../config/Firebase'
import products from "../../data/Products";

const ShopSection = () => {
  const [search, setSearch] = useState("");
  const [produk, setProduk] = useState([])
  const {uid} = useParams()
  useEffect(() => {
    firebase
      .database()
      .ref(`/barang`)
      .on("value", (res) => {
        if (res.val()) {
          //ubah menjadi array object
          const rawData = res.val();
          const productArray = [];
          // console.log(keranjang[0].namaProduk);
          Object.keys(rawData).map((item) => {
            productArray.push({
              id: item,
              ...rawData[item],
            });
          });
          setProduk(productArray);

          // console.log(products);
        }
      });
  }, []);
  
  return (
    <>
     
  
      <div className="container">
      <div className="section">
      <div className="col-md-6 col-8 d-flex align-items-center">
                <form  className="input-group">
                  <input
                    type="search"
                    className="form-control rounded search"
                    placeholder="Search"
                    onChange={(e) =>setSearch(e.target.value)}
                  />
                  <button type="submit" className="search-button">
                    search
                  </button>
                </form>
              </div>
              <div style={{ paddingLeft: 20 }}>
        {search.length === 0 ? (
          produk ? (
            <div className="shopContainer row">
              {produk.map((item) => (
              <div
              className="shop col-lg-4 col-md-6 col-sm-6"
              key={item.id}
            >
              <div className="border-product">
                <Link to={`/${uid}/${item.id}`}>
                  <div className="shopBack">
                    <img src={item.gambar} alt={item.namaProduk} />
                  </div>
                </Link>

                <div className="shoptext">
                  <p>
                    <Link to={`/products/${item.id}`}>
                      {item.namaProduk}
                    </Link>
                  </p>

                  
                  <h3>Rp.{item.biaya}</h3>
                </div>
              </div>
            </div>
              ))}
            </div>
          ) : (
            <div>
              <h1>Tidak ada barang</h1>
            </div>
          )
        ) : (
          <div className="shopContainer row">
            {produk
              .filter((item) =>
                item.namaProduk.toLowerCase().includes(search.toLowerCase())
              )
              .map((item) => (
                <div
                className="shop col-lg-4 col-md-6 col-sm-6"
                key={item.id}
              >
                <div className="border-product">
                  <Link to={`/${uid}/${item.id}`}>
                    <div className="shopBack">
                      <img src={item.gambar} alt={item.namaProduk} />
                    </div>
                  </Link>

                  <div className="shoptext">
                    <p>
                      <Link to={`/products/${item.id}`}>
                        {item.namaProduk}
                      </Link>
                    </p>

                    
                    <h3>Rp.{item.biaya}</h3>
                  </div>
                </div>
              </div>
              ))}
          </div>
        )}
      </div>
      </div>
    </div>
  
     
    </>
  );
};

export default ShopSection;
