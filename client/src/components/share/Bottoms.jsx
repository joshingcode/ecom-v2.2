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
    <figure key={bottoms.id} className="features">
    {bottoms.map(x => <article>
            <a className='image'><img src={x.img}/></a>
            <h3 className='major'>{x.title}-{x.price}</h3>
            <p>{x.description}</p>
            <a className='special'>Buy Now</a>
        </article>)}
    </figure>
    </>
  )
}

export default Bottoms