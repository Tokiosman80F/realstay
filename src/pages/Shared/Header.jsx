import { FaHouseChimneyCrack } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Header = () => {
  const navLink = [
    { name: "Home", to: "/", title: "Home" },
    { name: "About", to: "/About", title: "About" },
    { name: "Rentals", to: "/Rentals", title: "Rentals" },
    { name: "Testimonial", to: "/Testimonial", title: "Testimonial" },
    { name: "Blog", to: "/Blog", title: "Blog" },
    { name: "Contact Us", to: "/Contact", title: "Contact" },
  ];
  return (
    <div className='navbar bg-slate-300'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <label tabIndex={0} className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'>
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className='p-2'>
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a className='btn btn-ghost normal-case text-xl'>
          <FaHouseChimneyCrack color="lightblue" /> Real-Stay
        </a>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1'>
        {navLink.map((item,id)=>(
        <li key={id}>
          <NavLink
            to={item.to}
            className={({ isActive }) =>
              isActive ? "text-blue-500 " : "default"
            }>{item.name}</NavLink>
        </li>))}

        </ul>
      </div>
      <div className='navbar-end'>
        <a className='btn'>Button</a>
      </div>
    </div>
  );
};

export default Header;
