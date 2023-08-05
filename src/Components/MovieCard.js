function MovieCard(props) {
  console.log("props are", props?.data[0]?.score);
  return (
    <>
      { props?.data?.length>0 &&
        props?.data?.map((d, idx) => {
          return (
            <div className="movie-card">
              <div className="movie-image">
                <img
        src= {d?.show?.image?.medium}
         alt="movie"
        />
              </div>

              {/* <h3 className="movie-heading">{props.data.show.name}</h3> */}
            </div>
          )
        })
      }
    </>

  );
}

export default MovieCard;
