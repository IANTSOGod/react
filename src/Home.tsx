import './index.css';
import { Dispatch, SetStateAction } from "react";
import HomeNav from "./HomeNav";

export default function Home({setIsActive} : {setIsActive : Dispatch<SetStateAction<number>>}){
  
  return(

  <div className="allContent">
    <HomeNav></HomeNav>
    <div className="HomeBody">
      Nous sommes une société de vente en ligne sur les articles agroalimentaire et composants informatique 
    </div>
    <div className="backBody">
      <button onClick={()=>setIsActive((defaultState)=>defaultState+1)}>Voir plus</button>  
    </div>
  </div>
  );
}
