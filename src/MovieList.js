import { Component } from "react";
import MovieCard from "./MovieCard";

class MovieList extends Component{
    
    


    render(){
        const{movies, incStar,decStar,handleCart,handleFav} = this.props;
        console.log(movies)
        return(
            <>
            {movies.map((movie)=><MovieCard movies={movie}  
                                            incStar={incStar} decStar={decStar}
                                            handleFav={handleFav}
                                            handleCart={handleCart}
                                            key={movie.id}/>)}
            </>

        )
    }
}

export default MovieList;