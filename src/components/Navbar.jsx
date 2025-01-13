import React from "react";
import userImg from "../assets/images/userpic.png";
import { SettingsOutlinedIcon, NotificationsOutlinedIcon, ImSearch, HomeOutlinedIcon } from '../components/Icons';

const Navbar = () => {
  return (
    <>
        <div className='Custom-right-navigation'>
        <div className="left-side-flex">
            <form action="">
    <div className="flex-custom-form">
    <input type="text" className="form-control" placeholder="Type to Search .." />
    <button className="" type="button"><ImSearch /></button>
    </div>
            </form>
        </div>
        <div className="right-side-flex">
            <ul className="nav-icons">
                <li><SettingsOutlinedIcon /></li>
                <li><NotificationsOutlinedIcon /></li>
                <li className="profile-nav onhover-dropdown">
                    <div className="admin-detail">
                        <img src={userImg} alt="User" />
                        <div className="user-detail">
                            <span className="custom-username">vikram</span>
                            <p className="designation mb-0">Admin</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        </div>
        <div className="custom-breadcrumb">
            <h3>Custom Heading</h3>
            <ul className="custom-header-breadcrumb">
                <li className="breadcrumb-item"><a href="#"><HomeOutlinedIcon /></a></li>
                <li className="breadcrumb-item"><a href="#">Dashboard</a></li>
            </ul>
        </div>
    </>
  )
}

export default Navbar