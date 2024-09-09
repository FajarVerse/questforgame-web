import AuthLayout from "../components/layout/AuthLayout";
import Navbar from "../components/layout/Navbar";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <AuthLayout>
        <h1>Hello World</h1>
      </AuthLayout>
    </>
  );
};

export default HomePage;
