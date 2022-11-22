import React from "react";

const Search = ({ settext}) => {
   
  
    return (


<div className="search-container">
     
         <input  type="text"
          placeholder="search for category " onChange={(e) => settext(e.target.value)} />
    
      </div>
    )

}
export default Search;