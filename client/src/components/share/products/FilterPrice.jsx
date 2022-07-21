import React from 'react'
import { useEffect, useState,useMemo } from 'react'
import Select from 'react-select'
import axios from 'axios';

function Item({id,img,title,price,description}){
    return(
        <>
        
        <article key={id}>
            <a href="#" className='image'><img src={img} alt='product-pic'/></a>
            <h3 className='major'>{title}-{price}</h3>
            <p>{description}</p>
            <a href="#" className='special'>Buy Now</a>
        </article>
        
        </>
    )
}

function FilterPrice() {
    // product data
    const [product,setProduct]= useState([])
    // keep track out select by price 
    const [selected,setSelected]=useState()
    
    useEffect(()=> {
        axios.get('http://localhost:5000/products/')
            .then(res => setProduct(res.data));
    },[])
    
    function handleChange(e){
        const products= e.value
       
       setSelected(e.value)
        console.log(e.value)
        
    }
    function getFilteredList(){
        if(!selected){
           return [] ;
        } return selected
    }

  

    var filteredList = useMemo(getFilteredList, [selected, product]);


    const first = product.filter(x=>{return x.price === 25 })
    const second= product.filter(x=>{return x.price === 40 })
    const third= product.filter(x=>{return x.price === 50 })
    const forth = product.filter(x=>{return x.price === 64 })
    const price=[
        {label: '25 and under' ,value:first},
        {label:'25-40', value:second},
        {label:'40-60', value:third},
        {label:'60-70', value:forth}
    ]
    const tops = product.filter(x=>{return x.cat_id === 1 })
    const bottoms= product.filter(x=>{return x.cat_id === 2})
    const outerwear= product.filter(x=>{return  x.cat_id === 3 })
  
    const category=[
        {label: 'tops' ,value:tops},
        {label:'bottoms', value:bottoms},
        {label:'outerwear', value:outerwear},
      
    ]
   
  return (

    <>
    <div>
    <h4>Sort:</h4>
        <Select placeholder='sort by price' options={price} onChange={handleChange}/>
    <h4>Filter</h4>
        <Select placeholder='filter by category' options={category} onChange={handleChange}/>
    </div>
    <figure className='features'>
        {filteredList.map((element, index) => (
          <Item {...element} key={index} />
        ))}
    </figure>
   </>
  )
}

export default FilterPrice
