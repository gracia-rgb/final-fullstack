import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link, useParams } from "react-router-dom";
import products from "../data/Products";
import firebase from "../config/Firebase";
const Header = () => {
  
  const {uid} = useParams()
  const [keyword, setKeyword] = useState()
  let history = useHistory();
  const submitHandler = (e) =>{
  e.preventDefault()
  if(keyword.trim()){
 history.push(`/search/${keyword}`)
  }else{
   history.push("/");
  }
  }
  const handle = () =>{
    firebase.auth().signOut().then(() => {
      history.push("/login");
    })
  }
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
                      <Link className="dropdown-item" to="/profile">
                        Profile
                      </Link>

                      <Link className="dropdown-item" to= "/profile">
                        Logout
                      </Link>
                    </div>
                  </div>
                  <Link to="/:uid/list" className="cart-mobile-icon">
                    <i className="fas fa-shopping-bag"></i>
                    <span className="badge"></span>
                  </Link>
                </div>
                <div className="col-12 d-flex align-items-center">
                  <form className="input-group">
                    <input
                      type="search"
                      className="form-control rounded search"
                      placeholder="Search"
                        />
                    <button type="submit" className="search-button">
                      search
                    </button>
                  </form>
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
                  Hi
                  </button>
                  <div className="dropdown-menu">
                    <Link className="dropdown-item" to={`/${uid}/profile/profile`}>
                      Profile
                    </Link>

                    <Link className="dropdown-item" to="/">
                      Logout
                    </Link>
                  </div>
                </div>

                <Link to={`/${uid}/barang/list`}>
                  <i className="fas fa-shopping-bag"></i>
                  <span className="badge"></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
