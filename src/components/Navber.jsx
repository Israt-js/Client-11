import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const Navber = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const { user, logOut } = useContext(AuthContext);

    const handleDropdownClick = () => {
      setDropdownOpen(!dropdownOpen);
    };
    const handleLogOut = () => {
        logOut()
        .then(() => console.log('SUCCESSFULLY LOGOUT'))
        .catch(error =>{
            console.log(error)
        })
    }
    return(
        <div className="">
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><Link to={'/assignment'}>Assignment</Link></li>
          <>
          <li><Link to={'/create'}>Create Assignments</Link></li>
          <li><Link to={'/register'}>Pending Assignments</Link></li>
            <li>
              <div className="user-avatar" onClick={handleDropdownClick}>
              {/* {user.avatar} */}
              </div>
              {dropdownOpen && (
                <div className="dropdown">
                  <ul>
                    <li><a href="#">My Attempted Assignments</a></li>
                  </ul>
                </div>
              )}
            </li>
            </>
      </ul>
    </div>
    <Link to={"/"}><img className="btn btn-ghost text-xl h-28 w-28" src="https://i.ibb.co/CW0XJbR/438089751-1912190849219342-5243083842823283929-n-removebg-preview.png" alt="" /></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
  <ul className="menu menu-horizontal px-1">
  <li><Link to={'/assignment'}>Assignment</Link></li>
          <>
          <li><Link to={'/create'}>Create Assignments</Link></li>
          <li><Link to={'/register'}>Pending Assignments</Link></li>
            <li>
              <div className="user-avatar" onClick={handleDropdownClick}>
                {/* {user.avatar} */}
              </div>
              {dropdownOpen && (
                <div className="dropdown">
                  <ul>
                    <li><a href="#">My Attempted Assignments</a></li>
                  </ul>
                </div>
              )}
            </li>
          </>
      </ul>
  </div>
                <div className="navbar-end">
                  <ul className="flex">
                    {
                        user ? 
                        <>
                            <li><img src={user.photoURL} alt="User" title={user.displayName} className="rounded-full h-8 w-8 mt-2 mr-2" /></li>
                            <li className="btn bg-orange-500 text-white m-1"><a onClick={handleLogOut} href="#">LogOut</a></li>
                        </>
                        :
                        <li><Link className="btn bg-orange-500 text-white m-1" to={'/login'}>Login</Link></li>
                        
                    }
                  </ul>
                </div>
      </div>
        </div>
    )
}
export default Navber;