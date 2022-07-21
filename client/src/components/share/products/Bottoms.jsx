import React,{useState,useEffect} from 'react';
import axios from 'axios';

function Bottoms() {
const [bottoms,setBottoms]=useState([])
useEffect(()=>{
    axios.get('http://localhost:5000/products/bottoms')
    .then(res=>setBottoms(res.data))
})

  return (
    <>
    <figure  className="features">
    {bottoms.map(x => <article key={x.id}>
            <a href="#" className='image'><img src={x.img} alt='product-pic'/></a>
            <h3 className='major'>{x.title}-{x.price}</h3>
            <p>{x.description}</p>
            <a href="#" className='special'>Buy Now</a>
        </article>)}
    </figure>
    </>
  )
}

export default Bottoms