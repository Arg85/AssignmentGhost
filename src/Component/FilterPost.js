import React from 'react'
import "../Css/FilterPostCss.css"
function FilterPost({data}) {
    return (
        <div className="filterCards">
      {data?data.map((a)=>{
              return <h4>{a[1].title}</h4>
           }): "Did not find Anything"}
        </div>
    )
}

export default FilterPost
