import { useContext, useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../../assets/logo.svg';
import { AiOutlineLogin, AiOutlineSearch } from 'react-icons/ai';
import { BiLogOut } from 'react-icons/bi';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../../providers/AuthProvider';

const Header = () => {
  const navItems = [
    {
      title: 'Home',
      to: '/',
    },
    {
      title: 'About',
      to: '/about',
    },
    {
      title: 'Services',
      to: '/services',
    },
    {
      title: 'Blog',
      to: '/blog',
    },
    {
      title: 'Contact',
      to: '/contact',
    },
  ];

  const { user, logOut } = useContext(AuthContext);

  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(true);
  const dropdown = useRef();

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme('dark');
      setHidden(false);
    } else {
      setTheme('light');
      setHidden(true);
    }
    // setHidden(!hidden);
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
    const localTheme = localStorage.getItem('theme');
    if (localTheme === 'dark') {
      setHidden(false);
    }
    if (localTheme === 'light') {
      setHidden(true);
    }
    document.querySelector('html').setAttribute('data-theme', localTheme);
  }, [theme]);

  const handleMenuOpen = () => {
    dropdown.current.classList.toggle('dropdown-open');
    document.activeElement.blur();
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    logOut()
    .then(() => {
      localStorage.removeItem('car-zone-access-token')
    })
    .catch(err => console.log(err))
  };

  return (
    <div className="navbar px-4">
      <div className="navbar-start flex justify-between lg:justify-start">
        <div
          className="dropdown"
          ref={dropdown}>
          <label
            tabIndex={0}
            className="swap swap-rotate lg:hidden">
            <input
              onChange={handleMenuOpen}
              type="checkbox"
              checked={isOpen ? true : false}
            />
            {/* Mobile menu hamburger icon */}
            {/* <HiXMark className={`${isOpen ? 'text-lg ' : 'hidden'}`}></HiXMark>
            className={`swap-rotate swap btn-ghost btn lg:hidden `}
            */}
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`${isOpen ? 'hidden' : 'h-5 w-5'}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg> */}
            {/* hamburger icon */}
            <svg
              className="swap-off h-8 w-8 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512">
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>

            {/* <!-- close icon --> */}
            <svg
              className="swap-on h-8 w-8 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512">
              <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className={`dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow`}>
            {navItems.map((item, idx) => (
              <li key={idx}>
                <Link to={item.to}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <Link
          to={'/'}
          className=" block">
          <img
            src={Logo}
            alt=""
            className="h-12 lg:h-full"
          />
          <p className="text-center text-xl  font-bold">Car Zone</p>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navItems.map((item, idx) => (
            <li
              className="mx-1"
              key={idx}>
              <NavLink
                to={item.to}
                className="font-semibold">
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end space-x-6">
        {/* Toggle theme button */}
        <div className="flex items-center space-x-4">
          {user ? (
            <div className="flex items-center gap-2">
              {user.photoURL ? (
                <>
                  <div className="dropdown dropdown-end dropdown-hover ">
                    <img
                      className="h-8 rounded-full hover:cursor-pointer "
                      src={user.photoURL}
                      alt=""
                    />
                    {/* <label
                      tabIndex={0}
                      className="btn m-1">
                      Hover
                    </label> */}
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu rounded-box w-52 bg-base-200 p-2 shadow">
                      <li>
                        <Link to={'/appointments'}>My Appointments</Link>
                      </li>
                      <li className="flex">
                        <BiLogOut className="text-2xl hover:cursor-pointer" />
                        <button onClick={handleLogout}>Sign Out</button>
                      </li>
                    </ul>
                  </div>
                </>
              ) : (
                <FaUserCircle size={24}></FaUserCircle>
              )}
              {/* <BiLogOut
                onClick={logOut}
                className="text-2xl hover:cursor-pointer"
              /> */}
            </div>
          ) : (
            <NavLink
              className="flex items-center gap-2 font-semibold"
              to={'/login'}>
              <AiOutlineLogin className="text-2xl" />
              <span>Login</span>
            </NavLink>
          )}
          {/* <AiOutlineSearch className="text-2xl" /> */}
          {/* theme button */}
          <div>
            <label className="swap-rotate swap flex items-center">
              <input
                onChange={handleToggle}
                type="checkbox"
                checked={theme === 'light' ? false : true}
              />
              {/* moon icon */}
              <svg
                className={`swap-on h-8 w-8 fill-current lg:h-6 lg:w-6 ${hidden ? 'hidden' : 'block'}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>
              <svg
                className={`swap-off  h-8 w-8 fill-current lg:h-6 lg:w-6 ${hidden ? 'block' : 'hidden'}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </div>
        </div>
        <Link
          to={'/appointment'}
          className="btn-outline btn-primary btn rounded-none">
          Appointment
        </Link>
      </div>
    </div>
  );
};

export default Header;
