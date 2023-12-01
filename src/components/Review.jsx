import ReviewCard from "../layouts/ReviewCard";
import img1 from "../assets/img/pic1.png";

const Review = () => {
  return (
    <div className=" min-h-screen flex flex-col items-center justify-center md:px-10 px-10 bg bg-red-700">
      <h1 className=" text-4xl font-semibold text-center lg:pt-10 pt-10 pb-10">
        Customer Review
      </h1>
      <div className=" flex flex-col md:flex-row gap-3 mt-3">
        <ReviewCard img={img1} name="clancie" />
        
      </div>
    </div>
  );
};

export default Review;
