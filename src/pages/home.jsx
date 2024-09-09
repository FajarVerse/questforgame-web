import { Fragment } from "react";
import Home from "../components/fragments/Home";
import AuthLayout from "../components/layout/AuthLayout";
import Navbar from "../components/layout/Navbar";
import "../style/PageStyle/home.css";

const HomePage = () => {
  return (
    <Fragment>
      <Navbar />
      <AuthLayout classNameSection="home" classNameMain="home-content">
        <Home />
      </AuthLayout>
    </Fragment>
  );
};

export default HomePage;
