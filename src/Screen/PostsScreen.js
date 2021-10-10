import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import "../Css/PostsScreen.css"
import PostCardComponent from "../Component/PostCardComponent";
import FilterPost from "../Component/FilterPost";
function PostsScreen() {
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
  return (
    <div className="postFilterCards">
      {console.log(allPosts)}

                  <FilterPost data={Object.entries(allPosts).filter(post=>post[1].meta_description===null)}/>
                  <FilterPost data={Object.entries(allPosts).filter(post=>post[1].meta_description!==null && post[1].meta_description.length>50 ) }/>
     {/* {Object.entries(allPosts).map((a)=>{return console.log(a[1].url.length)})} */}
                  <FilterPost data={Object.entries(allPosts).filter(post=>post[1].url.length>100)}/>
    </div>
  );
}

export default PostsScreen;
