import React from "react";
import styled from "./NavBar.module.css"

class NavBar extends React.Component{
    render(){
        const{cartCount}= this.props;
        console.log(this.props)

        return(
            <>
            <div className={styled.navbar}>
                <div className={styled.title}>MOVIE-APP</div>
                <div>
                    <img className={styled.carticon} alt="cart-icon" src="https://cdn-icons-png.flaticon.com/128/1170/1170678.png"/>
                    <span className={styled.cartcount}>{cartCount}</span>
                </div>
            </div>
            </>
        )

    }
}

export default NavBar;