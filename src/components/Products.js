import React, { useEffect, } from 'react'
import { add } from '../store/cartSlice'
import { useDispatch , useSelector} from 'react-redux'

import { fetchProducts } from '../store/productSlice';
import { STATUSES } from '../store/productSlice';
function Products() {

const dispatch = useDispatch();

const {data:products ,status} = useSelector((state)=>state.product);




// const fetchProducts = async () => {
//     const res = await fetch('https://fakestoreapi.com/products')
//     //fetch returns string so we need to convert it to json
//     const data = await res.json();
//     console.log(data)
//     setProducts(data)
// }

useEffect(()=>{
// fetchProducts()

dispatch(fetchProducts())

},[dispatch]);

const handleAdd = (product)=>{

    dispatch(add(product));

}

if(status === STATUSES.LOADING ){
  return <h2>Loading .....</h2>
}
if(status === STATUSES.ERROR){
  return <h2>Something went wrong .....</h2>
}

  return (
    <div className='productsWrapper'>
      {
        products.map(product => (
            <div className="card" key={product.id}>
                <img src={product.image} alt='noimg' />
                <h4>{product.title}</h4>
                <h5>{product.price}</h5>
                <button onClick={()=> handleAdd(product)} className='btn'>Add to cart</button>

            </div>
        ))
      }
    </div>
  )
}

export default Products
