/* eslint-disable react/prop-types */

const ReviewCard = (props) => {
  return (
    <div className=" w-full md:w-1/3 bg-white border-2 border-lightText md:border-none p-5 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
      <div>
        <p className=" text-lightText">
        As a customer, KFC has become my go-to destination for a consistently satisfying fast-food experience. The original recipe fried chickens unique blend of 11 herbs and spices provides a flavor that I crave, and the crispy texture never disappoints. Whether I opt for the classic bucket, a flavorful chicken sandwich, or convenient chicken strips, 
        KFCs menu versatility ensures theres always something to suit my mood. The reliability of familiar and delicious tastes, coupled with the brands efforts to adapt to local preferences, creates a connection that keeps me coming back. The nostalgic branding featuring Colonel Sanders adds a comforting touch, making KFC not just a meal but a reliable and enjoyable tradition.
          its really nice and tasty and favourable
        </p>
        
      </div>

      <div className=" flex flex-row justify-center items-center mt-4 gap-4">
        <img className=" rounded-full w-1/4" src={props.img} alt="img" />
        <h3 className=" font-semibold ">{props.name}</h3>
      </div>
    </div>
  );
};

export default ReviewCard;
