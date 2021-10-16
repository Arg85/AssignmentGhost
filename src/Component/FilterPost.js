import React from "react";
import { useEffect, useState } from "react";
import "../Css/FilterPostCss.css";
function FilterPost({ Heading, data }) {
  const Broken = [];
  const [linkCount, setLinkCount] = useState(0);
  const [brokenInternal, setBrokenInternal] = useState([]);
  useEffect(() => {
    console.log("useEfeect filter");
    // Heading==="Total Link Count"? Object.entries(data).filter(post=>post[1].url).length:Heading==="Total Broken Internal Links"?Object.entries(data).filter(post=>post[1].url.includes("https://ghost-blog.ipxp.in/")).forEach((a)=>fetch(a[1].url).then((res)=>res.status<300?Broken.push(a[1].url):"")):""}
    if (Heading === "Total Link Count") {
      const Count = Object.entries(data).filter((post) => post[1].url).length;
      setLinkCount(Count);
    }
    if (Heading === "Total Broken Internal Links") {
      const InternalLinks = Object.entries(data).filter((post) =>
        post[1].url.includes("https://ghost-blog.ipxp.in/")
      );
      InternalLinks.forEach((Link) => {
        fetch(Link).then((res) => {
          if (res.status < 300) {
            Broken.push(Link[1].url);
            // console.log(Broken,"ngor")
          }
        });
        setBrokenInternal(Broken);
      });
    }
  }, [Heading, data]);
  return (
    <div className="filterCards">
      {/* {Links.forEach((a)=>fetch(a[1].url).then((res)=>res.status<300?Broken.push(a[1].url):""))} */}

      {Heading && Heading === "Total Link Count" ? (
        <>
          <h4>{Heading}</h4>
          <p>{linkCount}</p>
        </>
      ) : (
        ""
      )}
      {Heading && Heading === "Total Broken Internal Links" && (
        <>
          <h4>{Heading}</h4>
          {brokenInternal.map((a)=>{
          return <li>{a}</li>
          })}
        </>
      )}
      {/* {Heading==="Total Link Count"? Object.entries(data).filter(post=>post[1].url).length:Heading==="Total Broken Internal Links"?Object.entries(data).filter(post=>post[1].url.includes("https://ghost-blog.ipxp.in/")).forEach((a)=>fetch(a[1].url).then((res)=>res.status<300?Broken.push(a[1].url):"")):""} */}
    </div>
  );
}
// Object.entries(allPosts).filter(post=>post[1].url)
// Object.entries(allPosts).filter(post=>post[1].url.includes("https://ghost-blog.ipxp.in/"))

export default FilterPost;
