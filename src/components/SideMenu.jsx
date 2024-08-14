import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoHeartOutline, IoHomeOutline } from "react-icons/io5";
import logo from "../assets/logo.svg";
import { CiLogin } from "react-icons/ci";
import { IoOpenOutline, IoCartOutline } from "react-icons/io5";
import { AiOutlineProduct } from "react-icons/ai";
import { CiMenuFries } from "react-icons/ci";
import { MdCancel } from "react-icons/md";
import { AuthContext } from "../context/AppContext";

function SideMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const {
    user: { user }, dispatch
  } = useContext(AuthContext);
  console.log(user);

  return (
    <div className="sticky left-0 top-0 md:h-screen w-full md:w-80  flex flex-col justify-between items-center md:items-stretch p-5 border-r space-y-7 bg-slate-400/40 z-20 backdrop-blur-lg md:bg-white">
      <div className="relative w-full">
        <div className="flex  items-baseline">
          <img src={logo} alt="logo" width={25} />
          <h2 className="text-rose-500 text-2xl font-bold font-brand">
            Bellion
          </h2>
          <button
            className="md:hidden border border-rose-500 rounded-lg p-2 text-rose-500 text-xl absolute right-1 top-1"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            {isOpen ? <MdCancel /> : <CiMenuFries />}
          </button>
        </div>
      </div>
      <nav className={`w-full ${isOpen ? "block" : "hidden"} md:block`}>
        <ul>
          <li>
            <NavLink
              to="/"
              className="flex items-center  text-rose-500 space-x-5 py-3 w-full border-y"
            >
              <IoHomeOutline className="text-2xl" />
              <span className="font-bold">Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/store"
              className="flex items-center  text-rose-500 space-x-5 py-3 w-full border-y"
            >
              <AiOutlineProduct className="text-2xl" />
              <span className="font-bold">Store</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              className="flex items-center  text-rose-500 space-x-5 py-3 w-full border-y"
            >
              <IoCartOutline className="text-2xl" />
              <span className="font-bold">Cart</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/favourite"
              className="flex items-center  text-rose-500 space-x-5 py-3 w-full border-y"
            >
              <IoHeartOutline className="text-2xl" />
              <span className="font-bold">Favourite</span>
            </NavLink>
          </li>
        </ul>
      </nav>
      {user ? (
        <div>
          <p>{user.email}</p>
          <button
          className="border border-rose-500 rounded-xl p-2 text-rose-500"
          onClick={()=>{
            const leave = window.confirm("You sure say you wan komot?")
            if(leave){
              dispatch({type: "LOGOUT"})
              localStorage.removeItem("user")
            }
          }}
          >
              Komot
          </button>
        </div>
      ) : (
        <div
          className={` items-center space-x-5 ${
            isOpen ? "flex" : "hidden"
          } md:flex`}
        >
          <Link
            to="/signup"
            className="bg-rose-500 text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-3"
          >
            {" "}
            Sign Up <IoOpenOutline />
          </Link>
          <Link
            to="/login"
            className=" text-rose-500 border border-rose-500 px-4 py-2 rounded-lg flex items-center justify-center space-x-3"
          >
            Log In <CiLogin />
          </Link>
        </div>
      )}
    </div>
  );
}

export default SideMenu;
