import Header from "./Components/Header";
import Search from "./Components/Search";
import MovieCard from "./Components/MovieCard";
import { useState } from "react";
function App() {
  // const[searchterm ,setSearchterm] = useState("")
  const [result, setResult] = useState({});

  function fetchData(searchterm){
    fetch(`https://api.tvmaze.com/search/shows?q=${searchterm}`)
    .then((res)=>{
      return res.json();
    })
    .then((data)=>{
     setResult(data)
      console.log(data)
    }).catch((error)=>{
    
      console.log("error fetching data:",error)
    })
  }
  return (
    <div classNameName="App">
      <Header />
      <div className="main">
        <Search handleOnclick={fetchData}  />
        <div className="movies-section">
          {/* <!-- one card --> */}
          <MovieCard data={result} />
          {/* <!-- one card --> */}
        </div>
      </div>
    </div>
  );
}

export default App;
