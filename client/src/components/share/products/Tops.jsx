import React, {useState, useEffect} from 'react'

import axios from 'axios';
function Tops() {
const [tops,setTops]=useState([])

useEffect(()=>{
    axios.get('http://localhost:5000/products/tops').then(res=> setTops(res.data))
})

  return (
    <>
    
    <figure className="features" >
        {tops.map(x => <article key={x.id}>
            <a  className='image'><img src={x.img}/></a>
            <h3 className='major'>{x.title}-{x.price}</h3>
            <p>{x.description}</p>
            <a className='special'>Buy Now</a>
        </article>)}
    {/* <article>
        <a href="#" className="image">
            <img src="https://cdn.shopify.com/s/files/1/1300/6871/products/Every-Day-II-Tee-Black-2_73ff53ba-2c21-4024-aa49-39aac1ff6401_1296x.jpg?v=1628846185" alt="basic-1" /></a>
             <h3 className="major">Basic Everyday Tee- 25</h3>
            <p>black</p>
            <a href="#" className="special">Buy Now</a>
            </article>
            <article>
            <a href="#" className="image"><img src="https://cdn.shopify.com/s/files/1/1300/6871/products/Every-Day-II-Tee-Grey-2_27007a80-56b1-4903-a5d4-0acb67b14589_1296x.jpg?v=1628846194" alt="basic-2" /></a>
            <h3 className="major">Basic Everyday Tee- 25</h3>
             <p>grey</p>
            <a href="#" className="special">Buy Now</a>
          </article>
        <article>
         <a href="#" className="image"><img src="https://cdn.shopify.com/s/files/1/1300/6871/products/Raw-Edge-Flannel-White-2_1296x.jpg?v=1645002266" alt="button-1"/></a>
        <h3 className="major">Raw Edge Flannel- 40</h3>
        <p>white</p><a href="#" className="special">Buy Now</a>
        </article>
        <article>
     <a href="#" className="image"><img src="https://cdn.shopify.com/s/files/1/1300/6871/products/Raw-Edge-Flannel-Black-2_1296x.jpg?v=1645002228" alt="button-2"/></a>
     <h3 className="major">Raw Edge Flannel- 40</h3>
     <p>black</p>                                         <a href="#" className="special">Buy Now</a>
     </article> */}
    </figure>
</>
)}

export default Tops