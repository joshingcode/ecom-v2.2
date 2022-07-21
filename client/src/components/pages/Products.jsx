import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import Tops from '../share/products/Tops';
import Bottoms from '../share/products/Bottoms';
import axios from 'axios';
import Outerwear from '../share/products/Outerwear';
import FilterPrice from '../share/products/FilterPrice';

function Products() {
// const [products,setProducts]= useState( )
// axios.get('http://localhost:5000/products')
// .then(res => res.json))
// .then(data=> console.log(data))
    return(
       <div id='wrapper'>
        <header>
            <section className="inner">
            <h2>PRODUCTS</h2>
            <p>Top-rated RESTOCK</p>
            </section>
        </header>
        <div className='wrapper'>
            
            <section className="inner">
                
                <FilterPrice/>
                
             <h3 className="major">Tops</h3>
             <Tops/>
             <h3 className="major">Bottoms</h3>
             <Bottoms/>
             <h3 className="major">Outwear</h3>
             <Outerwear/>
            </section>
        </div>
       </div>
    )

    }
export default Products