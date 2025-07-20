 import React, { Fragment } from 'react';
import { CgMouse } from 'react-icons/cg'; // Correct import
import './Home.css';
import Product from "./Product.js"


const product={
  name:"blue-tshit",
  image:[{url:"https://imgs.search.brave.com/rgn5-B9uEoWTiO0LeOKfsJ8BCrIVRULABW4g14TqAYA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jbXMu/Y2xvdWRpbmFyeS52/cHN2Yy5jb20vaW1h/Z2VzL2Nfc2NhbGUs/ZHByX2F1dG8sZl9h/dXRvLHdfNDUwL2xl/Z2FjeV9kYW0vZW4t/dXMvUzAwMTk1MTE4/My9NWFA0MDgyNi1B/bGxtYWRlLU9yZ2Fu/aWMtVWx0cmEtU29m/dC1KZXJzZXktVHNo/aXJ0LU5BLVBEUC1U/aWxlLTAwMQ"}],
  price:"$223",
  _id:"himu",

};



const Home = () => {
  return (
    <Fragment>
      <div className="banner">
        <p>Welcome to ECOMMERCE</p>
        <h1>Find Amazing Products Below</h1>

        <a href="#container">
          <button>
            Scroll <CgMouse />
          </button>
        </a>
      </div>

    
      <h2 className='homeHeading'>
          Feature Products
      </h2>



      <div className='container' id='container'>
        <Product product = {product} />
        <Product product = {product} />
        <Product product = {product} />
        <Product product = {product} />
       
        <Product product = {product} />
        <Product product = {product} />
        <Product product = {product} />
        <Product product = {product} />


      </div>


    </Fragment>
  );
};

export default Home;
 