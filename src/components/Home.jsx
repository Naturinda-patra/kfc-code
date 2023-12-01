import { Link } from "react-scroll";
import Button from "../layouts/Button";

const Home = () => {
  return (
    <div className=" min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url('./assets/img/kosovo.jpg')] bg-cover bg-no-repeat ">
      <div className=" w-full lg:w-2/3 space-y-5">
        <h1 className=" text-[grey] font-semibold text-6xl">
          KFC Restuarant
        </h1>
        <p className=" text-[red]">
          Finger licking good chicken for everyone!
          COME ONE COME ALL
        </p>
        <div className=" lg:pl-44">
          <Link to="dishes">
          <Button title="Our Menu" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
