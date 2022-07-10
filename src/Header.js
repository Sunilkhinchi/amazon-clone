import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import './header.css';
import { Link } from "react-router-dom";

function header() {
    return (
        // src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" 
        <div className="header">
            <Link to='/'>
            <img  
                  className="header_logo" 
                  src="./images/logo.png" 
            />
             </Link>


            <div
            className="header_search">
                <input
                className="header-searchinput"
                type="text"
                 />
                 <SearchIcon className="header_searchicon"/>
                 
                 {/*logo*/}
            </div>
            <div className="header_nav">
                <div className="header_options">
                    <span className="header_optionlineOn">hello Guest</span>
                    <span className="header_optionlineTw">Sign In</span>
                </div>
                <div className="header_options">
                    <span className="header_optionlineOn">Returns</span>
                    <span className="header_optionlineTw">& Orders</span>
                </div>
                <div className="header_options">
                    <span className="header_optionlineOn">Your</span>
                    <span className="header_optionlineTw">Prime</span>
                </div>
                <Link to='/checkout'>
                <div className="header_optionBasket">
                    <ShoppingBasketIcon/>
                    <span className="header_optionlineTw header_basketcount">0</span>
                </div>
                </Link>
            </div>

        </div>
    )
}

export default header;