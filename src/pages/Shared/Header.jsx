import { FaHouseChimneyCrack } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Header = () => {
  const navLink = [
    { name: "Home", to: "/", title: "Home", isActive:({ isActive }) => isActive ? "text-blue-500" : "default" },
    { name: "About", to: "/About", title: "About",isActive:({ isActive }) =>isActive ? "text-blue-500 " : "default" },
    { name: "Rentals", to: "/Rentals", title: "Rentals",isActive:({ isActive }) =>isActive ? "text-blue-500 " : "default" },
    { name: "Testimonial", to: "/Testimonial", title: "Testimonial",isActive:({ isActive }) =>isActive ? "text-blue-500 " : "default" },
    { name: "Blog", to: "/Blog", title: "Blog",isActive:({ isActive }) =>isActive ? "text-blue-500 " : "default" },
    { name: "Contact Us", to: "/Contact", title: "Contact",isActive:({ isActive }) =>isActive ? "text-blue-500 " : "default" }
  ];
  return (
    <div className='navbar bg-slate-300 mt-5 rounded-lg'>
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
            {navLink.map((item, id) => (
              <li key={id}>
                <NavLink
                  to={item.to}
                  className={item.isActive}>
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <a className='btn btn-ghost normal-case text-xl'>
          <FaHouseChimneyCrack color='royalblue' /> Real-Stay
        </a>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1'>
          {navLink.map((item, id) => (
            <li key={id}>
              <NavLink
                to={item.to}
               className={item.isActive}>
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className='navbar-end'>
        <a className='btn btn-info'>Sign In</a>
      </div>
    </div>
  );
};

export default Header;
