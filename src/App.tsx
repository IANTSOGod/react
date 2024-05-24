import {Route,Routes } from "react-router-dom";
import Home from "./Home";
import HomeTest from "./MoreInfo";
import { useState } from "react";
import Products from "./Products";
import Panier from "./Panier";
import Paiement from "./Paiement";

export default function App(){
  const [defaultState,setDefaultState]=useState(0);
  if (defaultState==0){
  return (
    <Routes>
    <Route path='/' element={<Home setIsActive={setDefaultState}></Home>}></Route>
    <Route path='/Products' element={<Products></Products>}></Route>
    <Route path='/Panier' element={<Panier></Panier>}></Route>
    <Route path='/Paiement' element={<Paiement></Paiement>}></Route>
    </Routes>
  )
}
else{
  return (
  <Routes>
    <Route path='/' element={<HomeTest></HomeTest>}></Route>
    <Route path='/Products' element={<Products></Products>}></Route>
    <Route path='/Panier' element={<Panier></Panier>}></Route>
    <Route path='/Paiement' element={<Paiement></Paiement>}></Route>
    </Routes>
  );

}
}
