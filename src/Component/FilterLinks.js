import React from "react";
import { useEffect, useState } from "react";
import "../Css/FilterPostCss.css";
function FilterLinks({ Heading, datas }) {
 const [data, setData] = useState([])
 useEffect(()=>{
  //  console.log("data",typeof(datas),Heading,datas)
 setTimeout(()=>{
  setData(datas)
 },100)
 },[setData,datas])
  return (
    
    <div className="filterCards">
    
      {Heading && Heading === "Total Link Count" ? (
        <>
          <h4>{Heading}</h4>
          <p>{data}</p>
        </>
      ) : (
        ""
      )}
      {Heading && Heading === "Total Broken Internal Links" && (
        <>
          <h4>{Heading}</h4>
          {data.length>0?data.map((a)=>{
  return <h5><a  rel="noreferrer" target="_blank" href={a} key={a}>{a}</a></h5>
}):<>"No Broken Internal Links"{data.length}</>}
        
        </>
      )}
      {Heading && Heading === "Total Broken External Links" && (
        <>
          <h4>{Heading}</h4>
          {data.length>0?data.map((a)=>{
  return <h5><a rel="noreferrer" target="_blank" href={a} key={a}>{a}</a></h5>
}):"No Broken External Links"}
        
        </>
      )}
 
    </div>
  );
}


export default FilterLinks;
