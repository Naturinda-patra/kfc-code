
import img1 from "../assets/img/Biscuits.png";
import img2 from "../assets/img/Fries.png";
import img3 from "../assets/img/ColeSlaw.png";
import img4 from "../assets/img/img4.jpg";
import img5 from "../assets/img/img2.jpg";
import img6 from "../assets/img/img1.jpg";
import DishesCard from "../layouts/DishesCard";

const Dishes = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center items-center lg:px-32 px-5 bg bg-red-200">
      <h1 className=" text-4xl font-semibold text-center pt-24 pb-10">
        starter Menu
      </h1>

      <div className=" flex flex-wrap gap-8 justify-center">
        <DishesCard img={img1} title="KFC Biscuits" price="UGX 20000" />
        <DishesCard img={img2} title="KFC Fries" price="UGX 15000" />
        <DishesCard img={img3} title="KFC starter" price="UGX 45000" />
        <DishesCard img={img4} title="KFC beef" price="UGX 35000" />
        <DishesCard img={img5} title="KFC special bread" price="UGX 25000" />
        <DishesCard img={img6} title="KFC special sauce" price="UGX 25000" />
      </div>
    </div>
  );
};

export default Dishes;
