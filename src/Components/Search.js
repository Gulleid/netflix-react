import { useState } from "react";

function Search(props) {
  
    const[searchterm ,setSearchterm] = useState("")
    

  return (
    <div className="search-section">
      Search for your favorite shows
      <div classNameName="search-input">
        <input className="search-box" type="text" placeholder="Search" value={searchterm}
          onChange={(e) =>setSearchterm(e.target.value)} />
        <button className="btn-search" onClick={()=> props.handleOnclick(searchterm)}>Search</button>
      </div>
     <div>

     {/* {result.map((result) => (
          <div key={result.show.id}>{result.show.name}</div>
        ))} */}

     </div>

      
    </div>
  );

}

export default Search;
