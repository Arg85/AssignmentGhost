import React, {useEffect, useState } from "react";
import axios from "axios";
import "../Css/PostsScreen.css"
import FilterLinks from "../Component/FilterLinks";
function LinksScreen() {
  const [allPosts, setAllPosts] = useState(0);
  const [brokenInternal, setBrokenInternal] = useState([]);
  const [brokenExternal, setBrokenExternal] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchData = async () => {
    const Posts = await axios.get(
      `https://ghost-blog.ipxp.in/ghost/api/v3/content/posts/?key=${process.env.REACT_APP_API_KEY}`
    );

    setAllPosts(Posts.data.posts);
    
    
  };

  useEffect(() => {
    console.log("useEfeecet called");
    fetchData();
    
    
  }, []);
  useEffect(()=>{
    console.log("ha")
    const BrokenInternal=[]
    const BrokenExternal=[]
    const InternalLinks = Object.entries(allPosts).filter((post) =>
    post[1].url.includes("https://ghost-blog.ipxp.in/")
  );
  const ExternalLinks=Object.entries(allPosts).filter(post=>!post[1].url.includes("https://ghost-blog.ipxp.in/"))
 if(ExternalLinks.length>0){
   ExternalLinks.forEach((a)=>{
    fetch(allPosts).then((res) => {
      if (res.status < 300) {
        BrokenExternal.push(a[1].url);
      }
    });
    setBrokenExternal(BrokenExternal)
   })
 }
  if(InternalLinks.length>0){

    InternalLinks.forEach((Link) => {
      fetch(Link).then((res) => {
        if (res.status < 300) {
          BrokenInternal.push(Link[1].url);
        }
      });
      setBrokenInternal(BrokenInternal);
     
    });
  }
  
  },[allPosts])
  // var Links
  return (
    <>
    <h1>Links</h1>
    
    <div className="postFilterCards">

                  <FilterLinks key={1} Heading="Total Link Count" datas={allPosts.length}/>
                  <FilterLinks key={21} Heading="Total Broken Internal Links" datas={brokenInternal}/>
                  <FilterLinks key={3} Heading="Total Broken External Links" datas={brokenExternal}/>
    </div>
    </>
  );
}

export default LinksScreen;
