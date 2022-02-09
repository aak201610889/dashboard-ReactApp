import React from 'react';
import { FiShoppingBag, FiSettings } from 'react-icons/fi';
import {HiOutlineShoppingCart} from 'react-icons/hi';
import { GiSchoolBag } from 'react-icons/gi';
import {IoIosWallet  } from 'react-icons/io';
import { RiTruckLine } from 'react-icons/ri';
import { BiHelpCircle } from 'react-icons/bi';
import { MdLogout } from 'react-icons/md';
import rocket from '../assets/rocket.png'
import Links from './Links';
import './sidebar.css';


function Sidebar() {
  const links1 = [
    {
      text: "overview",
      icon: FiShoppingBag,
      active: true
    },
    {
      text: "orders",
      icon: HiOutlineShoppingCart,
    },
    {
      text: "Customers",
      icon: GiSchoolBag,
    },
    {
      text: "Transactions",
      icon: IoIosWallet,
    },
    {
      text: "Shipments",
      icon: RiTruckLine,
    },
  ];

  const links2 = [
    { text: "Help Center", icon: BiHelpCircle },
    { text: "Setting", icon: FiSettings },
    { text: "Logout", icon: MdLogout },
  ];
  return (
    <div className='sidebar'>
      <div className="brand">shop Center</div>
      <div className="links">
        <Links links={ links1}/>
        <Links links={ links2}/>
      </div>
      <div className="pro">
        <div className="img">
        <img src={rocket} alt="" />
        </div>
        <h3>Shop Venter</h3>
        <p>Get access to all features on Shop Center</p>
        <button>Get Pro</button>
      </div>

    </div>
  );
}

export default Sidebar;
