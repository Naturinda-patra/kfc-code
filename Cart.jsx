// App.js
import React, { useState } from 'react';

const Cart = ({ cartItems }) => (
  <div>
    <h2>Shopping Cart</h2>
    <ul>
      {cartItems.map(item => (
        <li key={item.id}>
          {item.title} - {item.price}
        </li>
      ))}
    </ul>
  </div>
);

const DishesCard = ({ img, title, price, addToCart }) => (
  <div>
    <img src={img} alt={title} style={{ width: '100px', height: '100px' }} />
    <p>{title} - {price}</p>
    <button onClick={addToCart}>Add to Cart</button>
  </div>
);

const Menu = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5 bg-red-300">
      <h1 className="text-4xl font-semibold text-center lg:pt-8 pt-24 pb-10">
        Chicken Menu
      </h1>

      <div className="flex flex-wrap gap-8 justify-center">
        <DishesCard img={img/BigBox_Zinger.png} title="Big Box Zinger" price="UGX 79000" addToCart={() => addToCart({ id: 1, title: "Big Box Zinger", price: "UGX 79000" })} />
        <DishesCard img={img/Bucket_ExtraCrispy_Laying.png} title="12pc Chicken drumsticks" price="UGX 65000" addToCart={() => addToCart({ id: 2, title: "12pc Chicken drumsticks", price: "UGX 65000" })} />
        <DishesCard img={img/Bucket_Tenders_Laying.png} title="12pc Chicken with Tenders" price="UGX 75000" addToCart={() => addToCart({ id: 3, title: "12pc Chicken with Tenders", price: "UGX 75000" })} />
        <DishesCard img={img/HotWings.png} title="7pc hot wings" price="UGX 45000" addToCart={() => addToCart({ id: 4, title: "7pc hot wings", price: "UGX 45000" })} />
        <DishesCard img={img/Bucket_COB.png} title="10pc spicy chicken" price="UGX 55000" addToCart={() => addToCart({ id: 5, title: "10pc spicy chicken", price: "UGX 55000" })} />
        <DishesCard img={} title=" fries & chicken " price="UGX 35000" addToCart={() => addToCart({ id: 6, title: " fries & chicken", price: "UGX 35000" })} />
      </div>

      <Cart cartItems={cartItems} />
    </div>
  );
};

export default Menu;
