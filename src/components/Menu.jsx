import DishesCard from "../layouts/DishesCard";
import menu1 from "../assets/img/BigBox_Zinger.png";
import menu2 from "../assets/img/Bucket_ExtraCrispy_Laying.png";
import menu3 from "../assets/img/Bucket_Tenders_Laying.png";
import menu4 from "../assets/img/HotWings.png";
import menu5 from "../assets/img/Bucket_COB.png";
import menu6 from "../assets/img/Box_2pcFeed.png";


const Menu = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5 bg bg-red-300">
      <h1 className=" text-4xl font-semibold text-center lg:pt-8 pt-24 pb-10">
      chicken menu
      </h1>

      <div className=" flex flex-wrap gap-8 justify-center">
        <DishesCard img={menu1} title="Big Box Zinger" price="UGX 79000" />
        <DishesCard img={menu2} title="12pc Chicken drumsticks" price="UGX 65000" />
        <DishesCard img={menu3} title="12pc Chicken with Tenders" price="UGX 75000" />
        <DishesCard img={menu4} title="7pc hot wings" price="UGX 45000" />
        <DishesCard img={menu5} title="10pc spicy chicken" price="UGX 55000" />
        <DishesCard img={menu6} title=" fries & chicken " price="UGX 35000" />
      </div>
    </div>
  );
};

export default Menu;
