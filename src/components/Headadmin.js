import React from "react";
import { Link, useParams } from "react-router-dom";

const Headadmin = () => {
  
  const {uid} = useParams()
  return (
    <div>
      {/* Top Header */}
      <div className="Announcement ">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center display-none">
              <p>buyme</p>
            </div>
          </div>
        </div>
      </div>
      {/* Header */}
      <div className="header">
        <div className="container">
          {/* MOBILE HEADER */}
          <div className="mobile-header">
            <div className="container ">
              <div className="row ">
            
                <div className="col-6 d-flex align-items-center justify-content-end Login-Register">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="name-button dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i class="fas fa-user"></i>
                    </button>
                    <div className="dropdown-menu">

                      <Link className="dropdown-item" to="/">
                        Logout
                      </Link>
                    </div>
                  </div>
                  <Link to={`/${uid}/barang/list`} className="cart-mobile-icon">
                    <i className="fas fa-shopping-bag"></i>
                    <span className="badge"></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* PC HEADER */}
          <div className="pc-header">
            <div className="row">
              
            
              <div className="col-md-3 d-flex align-items-center justify-content-end Login-Register">
                <div className="btn-group">
                  <button
                    type="button"
                    className="name-button dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                  Menu 
                  </button>
                  <div className="dropdown-menu">
                  <Link className="dropdown-item" to={`/${uid}/menu/admin`}>
                      Tambah Barang
                    </Link>
                    <Link className="dropdown-item" to={`/${uid}/or/order`}>
                      Pesanan
                    </Link>
                    <Link className="dropdown-item" to="/">
                      Keluar
                    </Link>
                  </div>
                </div>

              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Headadmin;
