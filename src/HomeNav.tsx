import { useState } from 'react';
import HomeMenu from './HomeMenu';
import './App.css';

export default function  HomeNav(){
  const [menu,setMenu]=useState(false);

  return(
  <div className="menu">
   <div className={`${menu ? "active" : "desactive"} navbar`}>
   <HomeMenu setIsActive={setMenu} />
   </div>
    <button className="start-menu" onClick={()=>setMenu((menu)=>!menu)} >Menu</button>
    <p className="mid-menu">{menu} My application</p>
    <button className="end-menu">My profile</button>
  </div>
  );
}
