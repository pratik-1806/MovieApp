import React from "react";

class MovieCard extends React.Component{
    

    render(){
        const{movies, decStar, incStar, handleFav, handleCart} = this.props;    
        const {title,plot,price,rating,star,fav,cart,image}=this.props.movies;
        return(
            <div className="main">
                <div className="movie-card">
                    <div className="left">
                        <img alt="Poster" src={image}/>
                    </div>

                    <div className="right">
                        <div className="title">{title}</div>
                        <div className="plot"> {plot}</div>
                        <div className="price">Rs.{price}</div>
                        <div className="footer">
                            <div className="rating"> {rating}</div>
                            <div className="star-dis"> 
                            <img className="str-btn" alt="decrease" src="https://cdn-icons-png.flaticon.com/128/43/43625.png"
                            onClick={()=>{decStar(movies)}}/>
                            <img className="stars" alt="star" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"/>
                            <img className="str-btn" alt="increase" src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png" 
                            onClick={()=>{incStar(movies)}}/>
                            <span>{star}</span>
                            </div>
                            <button className={fav?"unfavourite-btn":"favourite-btn"} onClick={()=>{handleFav(movies)}}>
                                {fav?"unfavourite":"favourite"}</button>
                            <button className={cart?"remove-btn":"cart-btn"} onClick={()=>{handleCart(movies)}}>{cart?"remove from cart":"Add to cart"}</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieCard;