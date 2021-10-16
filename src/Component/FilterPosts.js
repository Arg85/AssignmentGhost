import React from "react";
import { useEffect, useState } from "react";
import "../Css/FilterPostCss.css";
function FilterPosts({ Heading, datas }) {
 const [data, setData] = useState([])
 useEffect(()=>{
   console.log("data",typeof(datas),Heading,datas)
 setTimeout(()=>{
  setData(datas)
 },100)
 },[setData,datas,Heading])
  return (
    <div className="filterCards">
      {data.length>0?<><h4>{Heading}</h4>{data.map((a)=>{
return <h4>{a[1].url}</h4>
    })}</>:<><h4>{Heading}</h4><p>No posts found</p></>}
    </div>
  );
}


export default FilterPosts;
