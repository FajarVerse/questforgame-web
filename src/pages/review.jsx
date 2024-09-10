import Navbar from "../components/layout/Navbar";
import Authlayout from "../components/layout/AuthLayout";
import Review from "../components/fragments/Review";
import "../style/PageStyle/review.css"

const ReviewPage = () => {
  return (
    <>
      <Navbar />
      <Authlayout className="reviews" classNameMain="reviews-content">
        <Review />
      </Authlayout>
    </>
  );
};

export default ReviewPage;
