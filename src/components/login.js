// Import necessary components from react-router-dom
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Existing code for Login and Navbar components

const Home = () => (
  <div>
    <h2>Home Page</h2>
    {/* Home page content */}
  </div>
);

const About = () => (
  <div>
    <h2>About Page</h2>
    {/* About page content */}
  </div>
);

const App = () => {
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
    <Router>
      <div className="fixed w-full">
        <div>
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
              {/* Use Link from react-router-dom for navigation */}
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
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

          <div
            className={` ${
              menu ? 'translate-x-0' : '-translate-x-full'
            } lg:hidden flex flex-col absolute bg-black text-white left-0 top-20 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
          >
            {/* Use Link for mobile menu navigation */}
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Button title="Login" onClick={handleLoginClick} />
          </div>
        </div>

        {/* Use Switch and Route for rendering components based on the route */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
        </Switch>

        {/* Login modal */}
        {loginModal && <Login onClose={closeLoginModal} />}
      </div>
    </Router>
  );
};

export default App;
