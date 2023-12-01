import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { BiRestaurant } from 'react-icons/bi';
import Button from '../layouts/Button';
import { AiOutlineMenuUnfold, AiOutlineClose } from 'react-icons/ai';
import { BiChevronDown } from 'react-icons/bi';

const Login = ({ onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    console.log('Logging in with username:', username, 'and password:', password);
    onClose(); // Close the login modal or perform other actions
  };

  return (
    <div className="login-modal">
      <form onSubmit={handleLogin}>
        {/* Your login form */}
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [loginModal, setLoginModal] = useState(false);

  const handleMenuChange = () => {
    setMenu(!menu);
  };

  const handleLoginClick = () => {
    setLoginModal(true);
  };

  const closeLoginModal = () => {
    setLoginModal(false);
  };

  return (
    <div className="fixed w-full">
      <div>
        {/* Your existing navbar code */}
        <div className="flex flex-row justify-between p-5 md:px-32 px- bg-yellow-600 ">
          <div className="flex flex-row items-center cursor-pointer">
            <span>
              <BiRestaurant size={32} />
            </span>
            <h1 className="text-xl font-semibold" style={{ color: 'red' }}>
              KFC
            </h1>
          </div>

          <nav className="hidden md:flex flex-row items-center text-lg font-medium gap-8">
            {/* ... Your existing navigation links ... */}
            <Button title="Login" onClick={handleLoginClick} />
          </nav>

          <div className="md:hidden flex items-center">
            {menu ? (
              <AiOutlineClose size={25} onClick={handleMenuChange} />
            ) : (
              <AiOutlineMenuUnfold size={25} onClick={handleMenuChange} />
            )}
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={` ${
            menu ? 'translate-x-0' : '-translate-x-full'
          } lg:hidden flex flex-col absolute bg-black text-white left-0 top-20 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
        >
          {/* ... Your existing mobile menu links ... */}
          <Button title="Login" onClick={handleLoginClick} />
        </div>
      </div>

      {/* Login modal */}
      {loginModal && <Login onClose={closeLoginModal} />}
    </div>
  );
};

export default Navbar;


