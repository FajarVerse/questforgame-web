import Contact from "../components/fragments/Contact";
import AuthLayout from "../components/layout/AuthLayout";
import Navbar from "../components/layout/Navbar";
import "../style/PageStyle/contact.css";

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <AuthLayout classNameSection="contact">
        <Contact />
      </AuthLayout>
    </>
  );
};

export default ContactPage;
