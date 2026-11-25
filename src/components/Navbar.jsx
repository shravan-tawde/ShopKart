
import React from 'react'
import "./Navbar.css"

export default function Navbar(){
    return(
        <>

        {/* Top Shipping Bar  */}
        <div className="top-bar">
            <div className="container-fluid">
                <span className="new-badge">New</span>
                Free Shipping on orders above ₹499 | Easy 7-day Returns
            </div>
        </div>

        {/* Main Navbar */}
        <nav className="navbar navbar-expand-lg shop-navbar">
            <div className="container-fluid">

        {/* {Logo } */}
            <a href="/">
            <img src="images/logo.png" alt="shopcart" className='shopKart-logo'/></a>

            {/* All Categories Dropdown */}

            <div className="dropdown">
  <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
      All Categories
  </button>
  <ul className="dropdown-menu">
     <li><a className="dropdown-item" href="/products">Electronics</a></li>
        <li><a className="dropdown-item" href="/products">Fashion</a></li>
        <li><a className="dropdown-item" href="/products">Shoes</a></li>
        <li><a className="dropdown-item" href="/products">Accessories</a></li>
  </ul>
</div>

       {/* Navigation Links */}
<div className="nav-links">

    <a href="/">Home</a>
    <a href="/products">Products</a>
    <a href="/deals">Deals</a>
    <a href="/about">About Us</a>
    <a href="/contact">Contact</a>

</div>

{/* Search Bar */}
<div className="nav-search">
    <input
        type="text"
        placeholder="Search for products..."
    />
<button type="button">
    <i className="bi bi-search"></i>
</button></div>

{/* Wishlist */}
{/* Wishlist */}
<a href="/wishlist" className="nav-icon">
    <i className="bi bi-heart"></i>
</a>

{/* Cart */}
<a href="/cart" className="nav-icon cart-icon">
    <i className="bi bi-cart3"></i>
    <span className="cart-count">3</span>
</a>






            {/* <div className="dropdown px-3">
                <button class="btn btn-light dropdown-toggle ">Dropdown Button</button>
            </div> */}
</div>
        </nav>

        

       </>
    )
}


