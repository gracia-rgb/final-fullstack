import React from "react";
import Header from "./../components/Header";
import ShopSection from "./../components/homeComponents/ShopSection";
import ContactInfo from "./../components/homeComponents/ContactInfo";
import Footer from "./../components/Footer";
import { useParams } from "react-router";

const HomeScreen = () => {
  window.scrollTo(0, 0);
  const {uid} = useParams()
  console.log(uid)
  return (
    <div>
      <Header />
      <ShopSection/>
      <ContactInfo />
      <Footer />
    </div>
  );
};

export default HomeScreen;
