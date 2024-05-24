import { Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";
import './App.css';

export default function HomeMenu({setIsActive} : {setIsActive : Dispatch<SetStateAction<boolean>>}){
  return(
    <div className="container-menu">
      <div className="home-menu">
        <button onClick={() => setIsActive(false)}>x</button>
        <div className="start-label">Menu</div>
        <table className="list-menu-items" cellSpacing="15">
          <tr><td><Link to='/' className="menu-items">Home</Link></td></tr>
          <tr><td><Link to='/Products' className="menu-items">Nos produits</Link></td></tr>
          <tr><td><Link to='/Panier' className="menu-items">Votre panier</Link></td></tr>
          <tr><td><Link to='/Paiement' className="menu-items">Mode de paiement</Link></td></tr>
        </table>
      </div>
    </div>
  );
}
