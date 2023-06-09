import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider/AuthProvider';

const NavigationBar = () => {
    const { User, UserLogOut, } = useContext(AuthContext);

    const handelLogOut = () => {
        UserLogOut()
            .then(() => {

            })
            .catch(error => console.error(error))
    }

    const WebsiteName = <>
        <Link to='/'>common</Link>

    </>


    const Navber_Menu = <>
        <li><Link to='/'>Home</Link></li>
        <li tabIndex={0}>
            <details>
                <summary>Parent</summary>
                <ul className="p-2">
                    <li><Link>Submenu 1</Link></li>
                    <li><Link>Submenu 2</Link></li>
                </ul>
            </details>
        </li>

        <li><Link to='/'>item</Link></li>
        <li><Link to='/'>item</Link></li>
        <li><Link to='/'>item</Link></li>
        <li><Link to='/blog'>blog</Link></li>

    </>

    const Navber_Profile_image = (
        <>
            {User ? (
                <img src={User.photoURL} alt="" />
            ) : (
                <img src="https://w7.pngwing.com/pngs/184/113/png-transparent-user-profile-computer-icons-profile-heroes-black-silhouette-thumbnail.png" alt="" />
            )}
        </>
    );





    const Navber_Profile_menu = <>
        {User && <li><Link>{User?.displayName}</Link></li>}
        {User && <li> <Link>{User.email}</Link></li>}


        {User ? (
            <>
                <li><button onClick={handelLogOut}>Log Out</button></li>
            </>

        ) : (
            <li> <Link to="/login">Log in</Link></li>
        )
        }


    </>





    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-300 rounded-box w-52 ">
                            {Navber_Menu}
                        </ul>
                    </div>
                    <Link className="btn btn-ghost normal-case text-xl">
                        {WebsiteName}
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal gap-2">
                        {Navber_Menu}
                    </ul>
                </div>

                <div className="navbar-end">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                {Navber_Profile_image}
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3  shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-fit">
                            {Navber_Profile_menu}
                        </ul>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default NavigationBar;