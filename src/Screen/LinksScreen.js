import React, {useEffect, useState } from "react";
import axios from "axios";
import "../Css/PostsScreen.css"
import FilterPost from "../Component/FilterPost";
function LinksScreen() {
  const [allPosts, setAllPosts] = useState(0);

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
  // var Links
  return (
    <div className="postFilterCards">
    {/* {(()=>{
      Links= Object.entries(allPosts).filter(post=>post[1].url.includes("https://ghost-blog.ipxp.in/"))
     })()} */}
     {/* {console.log(Links)} */}
      {/* {console.log(allPosts)} */}

                  <FilterPost Heading="Total Link Count" data={allPosts}/>
                  <FilterPost Heading="Total Broken Internal Links" data={allPosts}/>
                  <FilterPost Heading="Total Broken External Links" Links={Object.entries(allPosts).filter(post=>!post[1].url.includes("https://ghost-blog.ipxp.in/"))}/>




              
    </div>
  );
}

export default LinksScreen;
