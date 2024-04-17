import React from "react";
import MovieList from "./MovieList";
import NavBar from "./NavBar"
import { movies } from "./moviedata";

class App extends React.Component{
  constructor(){
    super();
    this.state = { 
      movies :  movies, 
      cartCount: 0, 
    }
}
incStar=(movie)=>{
  const {movies} = this.state;
  const mid= movies.indexOf(movie);
  
  if(movies[mid].star>=5){
      return
  }
  
  movies[mid].star+=0.5;
  this.setState({
      movies: movies

  })
}

decStar=(movie)=>{
  const {movies} = this.state;
  const mid= movies.indexOf(movie);
  
  if(movies[mid].star<=0){
      return
  }

  movies[mid].star-=0.5;

  this.setState({
      movies: movies

  })
}

handleFav=(movie)=>{
  const {movies} =this.state;
  const mid= movies.indexOf(movie);
  movies[mid].fav=!movies[mid].fav
  
  
      this.setState({ 
          movies: movies});
}

handleCart=(movie)=>{
  let {movies, cartCount} =this.state;
  const mid= movies.indexOf(movie);
  movies[mid].cart=!movies[mid].cart
  if(movies[mid].cart){
  cartCount+=1;
  }else{
    cartCount-=1;
  }

  this.setState({
       movies: movies,
        cartCount:cartCount});
        console.log(cartCount)

}

  render(){
  const {movies, cartCount} =this.state;

    return(
      <>
      
      <NavBar cartCount={cartCount}/>
      <MovieList movies={movies}
      incStar={this.incStar}
      decStar={this.decStar}
      handleFav={this.handleFav}
      handleCart={this.handleCart}
      />
      </>
    )
  }
}

export default App;