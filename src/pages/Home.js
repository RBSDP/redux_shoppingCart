import React from 'react'

import Products from '../components/Products'
function Home() {
  return (
    <div>
      <h2 className='heading'>Welcome to the redux toolkit store</h2>
      
      <section>
        <h3>products</h3>
        <Products/>
      </section>
    </div>
  )
}

export default Home
