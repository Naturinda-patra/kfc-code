import img from "../assets/img/KFC.jpeg";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5 bg bg-red-400">
      <img src={img} alt="img" />

      <div className=" space-y-4 lg:pt-14 space-x-10">
        <h1 className=" font-semibold text-4xl text-center md:text-start p-7">
          More About us ?
        </h1>
        <p>
        KFC, or Kentucky Fried Chicken, is a globally renowned fast-food chain famous for its secret recipe fried chicken. Founded by Colonel Harland Sanders in 1930, KFC has expanded worldwide, offering a menu that includes its iconic original recipe chicken, chicken sandwiches, and various sides. The brand is known for its marketing featuring Colonel Sanders. Over the years, KFC has changed ownership, and it continues to innovate its menu while addressing environmental concerns.






                ITS THE BEST OF  ALL  AND ALSO  AFFORDABLE
        </p>
        <p>
                SIMPLE AND TASTY AND WE ALSO GIVE STARTERS
        </p>
        <div className=" flex justify-center lg:justify-start">
          
        </div>
      </div>
    </div>
  );
};

export default About;
